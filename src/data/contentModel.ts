export type EditorialStatus = 'demo' | 'needs-review' | 'verified';

export interface CategoryDefinition {
  slug: string;
  title: string;
  kicker: string;
  text: string;
  icon: 'restaurants' | 'cafes' | 'guesthouses' | 'scooter' | 'explore' | 'gyms' | 'markets' | 'essential';
  core: boolean;
}

export interface CityGuideDefinition {
  countrySlug: string;
  countryName: string;
  chapter: string;
  slug: string;
  name: string;
  description: string;
  fieldNote: string;
  image: string;
  imageAlt: string;
  caption: string;
  categorySlugs: string[];
}

export const categoryDefinitions: CategoryDefinition[] = [
  { slug: 'restaurants', title: 'Restaurants', kicker: 'EAT · LOCAL · SLOW', text: 'Local favourites, street-side tables and reliable places worth saving.', icon: 'restaurants', core: true },
  { slug: 'cafes', title: 'Cafés', kicker: 'COFFEE · PAUSE · SHADE', text: 'Quiet corners, good coffee and easy places to slow down for an hour.', icon: 'cafes', core: true },
  { slug: 'accommodation', title: 'Guesthouses', kicker: 'SLEEP · SIMPLE · CENTRAL', text: 'Comfortable stays, local guesthouses and practical bases around town.', icon: 'guesthouses', core: true },
  { slug: 'scooter-rental', title: 'Scooter Rental', kicker: 'KEYS · HELMET · ROAD', text: 'Trusted rentals, useful checks and the right bike for the roads ahead.', icon: 'scooter', core: true },
  { slug: 'things-to-do', title: 'Things to do', kicker: 'WALK · SEE · EXPLORE', text: 'Experiences, local landmarks and useful ideas for your stay.', icon: 'explore', core: true },
  { slug: 'gyms-fitness', title: 'Gyms & Fitness', kicker: 'TRAIN · MOVE · SWEAT', text: 'Gyms, training spaces and practical places to keep moving.', icon: 'gyms', core: false },
  { slug: 'markets-shopping', title: 'Markets & Shopping', kicker: 'MARKETS · GOODS · FINDS', text: 'Fresh markets, useful shops and small things worth bringing home.', icon: 'markets', core: true },
  { slug: 'essential-information', title: 'Essential Information', kicker: 'HEALTH · MONEY · BASICS', text: 'Hospitals, pharmacies, visa help, ATMs, SIM cards and useful contacts.', icon: 'essential', core: true }
];

const sriLankaCategorySlugs = categoryDefinitions.map((category) => category.slug);

export const cityGuides: CityGuideDefinition[] = [
  {
    countrySlug: 'sri-lanka',
    countryName: 'Sri Lanka',
    chapter: '03',
    slug: 'negombo',
    name: 'Negombo',
    description: 'A coastal gateway north of Colombo, shaped by lagoons, fishing life, beach roads and an easy first or last stop in Sri Lanka.',
    fieldNote: 'Lagoon mornings · coastal roads',
    image: '/images/placeholder-travel.webp',
    imageAlt: 'A view of Negombo in Sri Lanka',
    caption: 'Negombo · first notes from the road',
    categorySlugs: sriLankaCategorySlugs
  },
  {
    countrySlug: 'sri-lanka',
    countryName: 'Sri Lanka',
    chapter: '03',
    slug: 'colombo',
    name: 'Colombo',
    description: 'Sri Lanka’s energetic capital, where old neighbourhoods, markets, seafront walks and contemporary city life overlap.',
    fieldNote: 'City heat · ocean light',
    image: '/images/placeholder-travel.webp',
    imageAlt: 'A view of Colombo in Sri Lanka',
    caption: 'Colombo · first notes from the road',
    categorySlugs: sriLankaCategorySlugs
  },
  {
    countrySlug: 'sri-lanka',
    countryName: 'Sri Lanka',
    chapter: '03',
    slug: 'ahangama',
    name: 'Ahangama',
    description: 'A southern coastal town shaped by surf breaks, cafés, village roads and a growing creative scene.',
    fieldNote: 'Surf lines · village roads',
    image: '/images/placeholder-travel.webp',
    imageAlt: 'A view of Ahangama in Sri Lanka',
    caption: 'Ahangama · first notes from the road',
    categorySlugs: sriLankaCategorySlugs
  },
  {
    countrySlug: 'sri-lanka',
    countryName: 'Sri Lanka',
    chapter: '03',
    slug: 'mirissa',
    name: 'Mirissa',
    description: 'A laid-back southern beach town with surf mornings, seafood evenings and easy access to the coast around Matara.',
    fieldNote: 'Salt air · slow mornings',
    image: '/images/placeholder-travel.webp',
    imageAlt: 'A view of Mirissa in Sri Lanka',
    caption: 'Mirissa · first notes from the road',
    categorySlugs: sriLankaCategorySlugs
  }
];

export const getCategoryDefinition = (slug: string) => categoryDefinitions.find((category) => category.slug === slug);

export const getCityGuide = (countrySlug: string, citySlug: string) =>
  cityGuides.find((city) => city.countrySlug === countrySlug && city.slug === citySlug);

export const getCategoriesForCity = (city: CityGuideDefinition) =>
  city.categorySlugs.map(getCategoryDefinition).filter((category): category is CategoryDefinition => Boolean(category));

export const placeContentRequirements = {
  required: ['slug', 'name', 'category', 'city', 'country', 'shortDescription', 'description', 'whyWeRecommend', 'mapsUrl', 'status', 'lastChecked', 'address'],
  recommended: ['image', 'imageAlt', 'cardNote', 'highlights', 'hours', 'price', 'bestFor'],
  verificationRule: 'Only use verified when the practical information and location have been checked recently.'
} as const;
