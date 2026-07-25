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
  cuisine: string;
  city: string;
  country: string;
  image: string;
  imageAlt: string;
  cardNote: string;
  shortDescription: string;
  description: string;
  whyWeRecommend: string;
  highlights: string[];
  mapsUrl: string;
  status: EditorialStatus;
  lastChecked: string;
  hours: string;
  price: string;
  address: string;
  phone: string;
  bestFor: string;
};

export const categories: Category[] = [
  { slug: 'restaurants', name: 'Restaurants', description: 'A considered guide to the tables worth remembering in Pakse, from local kitchens to unhurried evenings.', icon: '01' },
  { slug: 'cafes', name: 'Cafés', description: 'Slow mornings, good coffee and places to pause.', icon: '02' },
  { slug: 'accommodation', name: 'Accommodation', description: 'A considered shortlist of places to make your stay easy.', icon: '03' },
  { slug: 'waterfalls', name: 'Waterfalls', description: 'The cascades and river landscapes worth the journey.', icon: '04' },
  { slug: 'things-to-do', name: 'Things to do', description: 'Ideas for a day, a weekend or a longer route.', icon: '05' },
  { slug: 'muay-thai', name: 'Muay Thai', description: 'Gyms and training experiences for visitors who want to move.', icon: '06' }
];

export const places: Place[] = [
  {
    slug: 'dok-mai-lao-trattoria',
    name: 'Dok Mai Lao Trattoria',
    category: 'restaurants',
    subcategory: 'Italian trattoria',
    cuisine: 'Italian',
    city: 'Pakse',
    country: 'Laos',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=84',
    imageAlt: 'A warmly lit restaurant interior prepared for dinner',
    cardNote: 'save this for dinner',
    shortDescription: 'Proper Italian cooking and a quiet garden table in central Pakse.',
    description: 'A welcoming Italian address for handmade pasta, thin-crust pizza, wine and an evening that can take its time.',
    whyWeRecommend: 'Keep this one for the evening when you want a slower meal and a genuine break from the local food circuit. The garden setting gives it the feeling of a small find, even though it has long been a Pakse favourite.',
    highlights: ['Homemade pasta', 'Thin-crust pizza', 'Garden seating', 'Wine'],
    mapsUrl: 'https://maps.app.goo.gl/QthEv6JmNmNAdcNS8',
    status: 'verified',
    lastChecked: 'July 2026',
    hours: 'Daily · 11:00–22:00',
    price: 'Mid-range · $$',
    address: 'Road 24, Pakse 16000, Laos',
    phone: '+856 20 55 302 608',
    bestFor: 'A relaxed dinner'
  }
];

export const homepageCountries = [
  {
    slug: 'thailand', name: 'Thailand', mood: 'Adventure · Energy',
    description: 'From Bangkok’s restless streets to quiet islands and northern roads, Thailand always has another story waiting beyond the map.',
    image: '/images/thailand-chapter-main.webp', status: 'coming soon',
    routeNote: 'Open roads · vivid mornings'
  },
  {
    slug: 'thailand', name: 'Thailand', mood: 'Adventure · Energy',
    description: 'From Bangkok’s restless streets to quiet islands and northern roads, Thailand always has another story waiting beyond the map.',
    image: '/images/thailand-chapter-main.webp', status: 'coming soon',
    routeNote: 'Open roads · vivid mornings'
  },
  {
    slug: 'thailand', name: 'Thailand', mood: 'Adventure · Energy',
    description: 'From Bangkok’s restless streets to quiet islands and northern roads, Thailand always has another story waiting beyond the map.',
    image: '/images/thailand-chapter-main.webp', status: 'coming soon',
    routeNote: 'Open roads · vivid mornings'
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
