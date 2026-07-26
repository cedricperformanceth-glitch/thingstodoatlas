const ALLOWED_MAPS_HOSTS = new Set(['maps.app.goo.gl', 'google.com', 'www.google.com']);
const GOOGLE_API_BASE = 'https://places.googleapis.com/v1';
const REQUEST_TIMEOUT_MS = 10000;

type Env = { GOOGLE_PLACES_API_KEY?: string };
type Attribution = { displayName?: string; uri?: string };

const jsonResponse = (body: unknown, status: number, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers }
  });

const isAllowedMapsUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && ALLOWED_MAPS_HOSTS.has(url.hostname.toLowerCase());
  } catch {
    return false;
  }
};

const googleFetch = async (input: string, init: RequestInit) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
};

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name')?.trim();
  const mapsUrl = url.searchParams.get('mapsUrl')?.trim();
  const city = url.searchParams.get('city')?.trim() || 'Pakse, Laos';

  if (!name || name.length > 200 || !mapsUrl || !isAllowedMapsUrl(mapsUrl)) {
    return jsonResponse({ error: 'A valid restaurant name and Google Maps URL are required.' }, 400);
  }
  if (!env.GOOGLE_PLACES_API_KEY) {
    return jsonResponse({ error: 'Google Places is not configured.' }, 503, {
      'Cache-Control': 'public, max-age=300, s-maxage=300'
    });
  }

  const googleHeaders = {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': env.GOOGLE_PLACES_API_KEY,
    'X-Goog-FieldMask': 'places.id,places.displayName,places.photos'
  };
  let searchResponse: Response;
  try {
    searchResponse = await googleFetch(`${GOOGLE_API_BASE}/places:searchText`, {
      method: 'POST',
      headers: googleHeaders,
      body: JSON.stringify({ textQuery: `${name}, ${city}` })
    });
  } catch {
    return jsonResponse({ error: 'Google Places timed out.' }, 504, {
      'Cache-Control': 'public, max-age=300, s-maxage=300'
    });
  }
  if (searchResponse.status === 429) {
    return jsonResponse({ error: 'Google Places rate limit reached.' }, 429, {
      'Cache-Control': 'public, max-age=300, s-maxage=300'
    });
  }
  if (!searchResponse.ok) {
    return jsonResponse({ error: 'Google Places search failed.' }, 502, {
      'Cache-Control': 'public, max-age=300, s-maxage=300'
    });
  }

  const searchData = await searchResponse.json() as {
    places?: Array<{ photos?: Array<{ name?: string; authorAttributions?: Attribution[] }> }>;
  };
  const photo = searchData.places?.[0]?.photos?.[0];
  if (!photo?.name) {
    return jsonResponse({ error: 'No Google photo found.' }, 404, {
      'Cache-Control': 'public, max-age=86400, s-maxage=604800'
    });
  }

  let mediaResponse: Response;
  try {
    mediaResponse = await googleFetch(
      `${GOOGLE_API_BASE}/${photo.name}/media?maxWidthPx=1200&skipHttpRedirect=true`,
      { headers: { 'X-Goog-Api-Key': env.GOOGLE_PLACES_API_KEY } }
    );
  } catch {
    return jsonResponse({ error: 'Google photo request timed out.' }, 504, {
      'Cache-Control': 'public, max-age=300, s-maxage=300'
    });
  }
  if (mediaResponse.status === 429) {
    return jsonResponse({ error: 'Google photo rate limit reached.' }, 429, {
      'Cache-Control': 'public, max-age=300, s-maxage=300'
    });
  }
  if (!mediaResponse.ok) {
    return jsonResponse({ error: 'Google photo media request failed.' }, 502, {
      'Cache-Control': 'public, max-age=300, s-maxage=300'
    });
  }

  const mediaData = await mediaResponse.json() as { photoUri?: string };
  if (!mediaData.photoUri) {
    return jsonResponse({ error: 'Google returned no photo URL.' }, 404, {
      'Cache-Control': 'public, max-age=86400, s-maxage=604800'
    });
  }

  let imageResponse: Response;
  try {
    imageResponse = await googleFetch(mediaData.photoUri, {});
  } catch {
    return jsonResponse({ error: 'Google photo download timed out.' }, 504, {
      'Cache-Control': 'public, max-age=300, s-maxage=300'
    });
  }
  if (!imageResponse.ok) {
    return jsonResponse({ error: 'Google photo download failed.' }, 502, {
      'Cache-Control': 'public, max-age=300, s-maxage=300'
    });
  }

  const responseHeaders = new Headers({
    'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    'Content-Type': imageResponse.headers.get('Content-Type') || 'image/jpeg'
  });
  if (photo.authorAttributions?.length) {
    responseHeaders.set(
      'X-Google-Photo-Attributions',
      encodeURIComponent(JSON.stringify(photo.authorAttributions))
    );
  }
  return new Response(imageResponse.body, { status: 200, headers: responseHeaders });
};
