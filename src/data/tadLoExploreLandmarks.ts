import type { CityLandmark } from './laosLandmarks';
import { tadLoExperiences } from './tadLoPlaces';

const requireExperience = (slug: string) => {
  const place = tadLoExperiences.find((item) => item.slug === slug);
  if (!place) throw new Error(`Missing Tad Lo experience: ${slug}`);
  return place;
};

const toLandmark = (
  slug: string,
  modalId: string,
  fieldCardNumber: string,
  kicker: string,
  duration: string,
  route: string,
  difficulty: string,
  whatToWear: string,
  mapsQuery: string
): CityLandmark => {
  const place = requireExperience(slug);
  const gallery = place.galleryImages?.length
    ? place.galleryImages
    : [{ src: place.image, alt: place.imageAlt }];

  return {
    slug,
    modalId,
    name: place.name,
    country: 'Laos',
    fieldCardNumber,
    region: place.address || 'Tad Lo · Salavan Province',
    description: `${place.description} ${place.whyWeRecommend}`,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
    gallery,
    facts: [
      { label: 'Getting there', value: route },
      { label: 'Best time', value: place.hours },
      { label: 'What to wear', value: whatToWear },
      { label: 'Price', value: place.price },
      { label: 'Duration', value: duration },
      { label: 'Difficulty', value: difficulty }
    ],
    cityContext: {
      order: Number(fieldCardNumber),
      kicker,
      summary: place.shortDescription,
      duration,
      route
    }
  };
};

export const tadLoExplorePageLandmarks: CityLandmark[] = [
  toLandmark(
    'tad-lo-waterfall',
    'partner-place-tad-lo-waterfall',
    '11',
    'WATERFALL · WALKABLE · VILLAGE',
    '2–3 hours',
    'Walkable from Tad Lo village',
    'Easy walking, with extra care around wet rocks and changing water levels.',
    'Light clothes and shoes or sandals with enough grip for wet paths.',
    'Tad Lo Waterfall Laos'
  ),
  toLandmark(
    'cooking-class-nyay',
    'partner-place-cooking-class-nyay',
    '12',
    'COOKING · LOCAL · HALF DAY',
    'Half day',
    'Walkable in Tad Lo · booking required',
    'Easy. The important part is booking ahead and sharing allergies or dietary requirements before the class.',
    'Comfortable everyday clothes suitable for preparing food and sitting down for the shared meal.',
    'Nyay cooking class Tad Lo Laos'
  ),
  toLandmark(
    'vat-paa-ancient-forest',
    'selection-place-vat-paa-ancient-forest',
    '13',
    'FOREST · BUDDHA · QUIET',
    'Less than 3 hours',
    'Transport useful from Tad Lo',
    'Easy for the surface visit. Do not enter an unassessed cave without a competent guide and proper equipment.',
    'Light forest clothing, insect protection and shoes with grip for natural ground.',
    'Vat Paa Forest Tad Lo Laos'
  )
];
