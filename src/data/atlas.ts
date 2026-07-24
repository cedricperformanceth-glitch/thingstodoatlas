export type EditorialStatus = 'demo' | 'verified' | 'needs-review';

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export type Place = {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  city: string;
  country: string;
  image: string;
  description: string;
  whyWeRecommend: string;
  mapsUrl: string;
  status: EditorialStatus;
  lastChecked: string;
  hours: string;
  price: string;
};

export const categories: Category[] = [
  { slug: 'restaurants', name: 'Restaurants', description: 'Places to eat, from everyday local tables to memorable evenings.', icon: '01' },
  { slug: 'cafes', name: 'Cafés', description: 'Slow mornings, good coffee and places to pause.', icon: '02' },
  { slug: 'accommodation', name: 'Accommodation', description: 'A considered shortlist of places to make your stay easy.', icon: '03' },
  { slug: 'waterfalls', name: 'Waterfalls', description: 'The cascades and river landscapes worth the journey.', icon: '04' },
  { slug: 'things-to-do', name: 'Things to do', description: 'Ideas for a day, a weekend or a longer route.', icon: '05' },
  { slug: 'muay-thai', name: 'Muay Thai', description: 'Gyms and training experiences for visitors who want to move.', icon: '06' }
];

export const places: Place[] = [
  {
    slug: 'corrado', name: 'Corrado', category: 'restaurants', subcategory: 'Italian restaurant', city: 'Pakse', country: 'Laos',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    description: 'Demo listing — a concise editorial card for a restaurant in Pakse.', whyWeRecommend: 'A useful example of how a recommendation can be explained without pretending the details are verified.',
    mapsUrl: 'https://www.google.com/maps', status: 'demo', lastChecked: 'Demo data — verify before publication', hours: 'Opening hours to verify', price: 'Budget to verify'
  },
  {
    slug: 'pakse-riverside-table', name: 'Riverside table — sample', category: 'restaurants', subcategory: 'Local dining', city: 'Pakse', country: 'Laos',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80',
    description: 'Demo listing — placeholder content showing a second scan-friendly result.', whyWeRecommend: 'Demonstrates how the list can carry a short reason to choose one place over another.',
    mapsUrl: 'https://www.google.com/maps', status: 'demo', lastChecked: 'Demo data — verify before publication', hours: 'Opening hours to verify', price: 'Budget to verify'
  }
];

export const homepageCountries = [
  {
    slug: 'thailand', name: 'Thailand', mood: 'Adventure · Energy',
    description: 'A country of open roads, vivid mornings and the next good turn waiting just beyond the map.',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=85', status: 'coming soon'
  },
  {
    slug: 'laos', name: 'Laos', mood: 'Authenticity · Serenity',
    description: 'A slower way through rivers, coffee country and small-town days that leave room to look around.',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1600&q=85', status: 'open'
  },
  {
    slug: 'sri-lanka', name: 'Sri Lanka', mood: 'Escape · Relaxation',
    description: 'Train windows, warm coastlines and a feeling that the journey has already started before arrival.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85', status: 'coming soon'
  }
];

export const laos = { slug: 'laos', name: 'Laos', eyebrow: 'The first atlas chapter', intro: 'A slower, greener way through southern Laos — shaped by rivers, coffee country and small-town days.', destinations: [
  { slug: 'pakse', name: 'Pakse', description: 'A practical base for the Mekong, the Bolaven Plateau and a first taste of southern Laos.', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80', status: 'active' },
  { slug: 'tad-lo', name: 'Tad Lo', description: 'Waterfalls, forest paths and an easygoing village rhythm on the plateau.', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80', status: 'coming soon' },
  { slug: 'paksong', name: 'Paksong', description: 'Coffee, cool air and the highlands around the Bolaven Plateau.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', status: 'coming soon' }
] };

export const pakse = { slug: 'pakse', name: 'Pakse', country: 'Laos', intro: 'A compact riverside base for exploring southern Laos — and a good place to take the day at your own pace.', essential: ['Mekong and Xe Don rivers', 'Gateway to the Bolaven Plateau', 'Best explored with flexible day plans'] };

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const getPlacesForCategory = (slug: string) => places.filter((place) => place.category === slug);
