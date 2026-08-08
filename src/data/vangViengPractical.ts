import type { Place } from './atlas';

type PlaceSeed = {
  slug: string;
  name: string;
  subcategory: string;
  cardNote: string;
  shortDescription: string;
  bestFor: string;
  highlights?: string[];
};

const cityImages = [
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nam_song_river_vang_vieng.jpg?width=1200',
    alt: 'Nam Song River and limestone mountains at Vang Vieng, used as city context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/VientianeProvince_VangVieng1_tango7174.jpg?width=1200',
    alt: 'The karst landscape around Vang Vieng, used as city context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Narrow_Wooden_Bridge_-_Vang_Vieng,_Laos.jpg?width=1200',
    alt: 'A wooden bridge across the Nam Song near Vang Vieng, used as city context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/VangVieng.jpg?width=1200',
    alt: 'Limestone cliffs around Vang Vieng, used as city context imagery'
  }
];

const toPlaces = (
  seeds: PlaceSeed[],
  category: string,
  cuisine: string,
  hours: string,
  price: string
): Place[] => seeds.map((seed, index) => {
  const image = cityImages[index % cityImages.length];
  return {
    ...seed,
    category,
    cuisine,
    city: 'Vang Vieng',
    country: 'Laos',
    image: image.src,
    imageAlt: image.alt,
    description: seed.shortDescription,
    whyWeRecommend: `Keep ${seed.name} in the Vang Vieng notebook as a practical ${seed.subcategory.toLowerCase()} option. Open the saved Google Maps search and confirm the latest access, opening hours, conditions and prices directly before setting out.`,
    highlights: seed.highlights || [seed.subcategory, 'Vang Vieng address', 'Google Maps search saved', 'Details to confirm directly'],
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${seed.name} Vang Vieng Laos`)}`,
    status: 'needs-review',
    lastChecked: 'August 2026',
    hours,
    price,
    address: 'Vang Vieng, Vientiane Province, Laos',
    imageIsGeneric: true
  };
});

const scooterSeeds: PlaceSeed[] = [
  {
    slug: 'mr-kham-motorbike-rental',
    name: 'Mr. Kham Motorbike Rental',
    subcategory: 'Motorbike rental',
    cardNote: 'compare the bike before leaving',
    shortDescription: 'A Vang Vieng motorbike-rental address to compare for a scooter day around lagoons, caves and viewpoints.',
    bestFor: 'Renting a scooter for the western countryside roads',
    highlights: ['Motorbike rental', 'Helmet and brakes to inspect', 'Deposit terms to confirm', 'Fuel policy to confirm']
  },
  {
    slug: 'ln-motorbike-rental',
    name: 'LN Motorbike Rental',
    subcategory: 'Motorbike rental',
    cardNote: 'another central rental option',
    shortDescription: 'A central rental option to keep when comparing scooter condition, deposit rules and return times.',
    bestFor: 'Comparing rental terms in central Vang Vieng',
    highlights: ['Motorbike rental', 'Bike condition to inspect', 'Passport policy to confirm', 'Return time to confirm']
  },
  {
    slug: 'mr-ta-motorbike-rental',
    name: 'Mr. Ta Motorbike Rental',
    subcategory: 'Motorbike rental',
    cardNote: 'prepare the lagoon road',
    shortDescription: 'A local scooter-rental address for independent trips toward the Blue Lagoons and Vang Vieng viewpoints.',
    bestFor: 'A self-guided lagoon and viewpoint route',
    highlights: ['Motorbike rental', 'Lagoon-road base', 'Helmet included to confirm', 'Damage policy to confirm']
  },
  {
    slug: 'mr-thavyxai-motorbike-rental',
    name: 'Mr. Thavyxai Motorbike Rental',
    subcategory: 'Motorbike rental',
    cardNote: 'check the full rental agreement',
    shortDescription: 'Another Vang Vieng rental address to keep for comparing bikes, daily terms and deposits before choosing.',
    bestFor: 'Comparing several local rental shops',
    highlights: ['Motorbike rental', 'Daily terms to confirm', 'Deposit to confirm', 'Roadside support to confirm']
  }
];

const fitnessSeeds: PlaceSeed[] = [
  {
    slug: 'vang-vieng-gym',
    name: 'Vang Vieng Gym',
    subcategory: 'Local gym',
    cardNote: 'keep training in town',
    shortDescription: 'A local gym address for travellers wanting basic strength or fitness training during a Vang Vieng stay.',
    bestFor: 'A straightforward independent workout',
    highlights: ['Local gym', 'Strength equipment to confirm', 'Day pass to confirm', 'Opening hours to confirm']
  },
  {
    slug: 'yoga-in-vang-vieng',
    name: 'Yoga in Vang Vieng',
    subcategory: 'Yoga studio & classes',
    cardNote: 'move and recover slowly',
    shortDescription: 'A yoga option in Vang Vieng for mobility, recovery and a slower session between outdoor days.',
    bestFor: 'Yoga, mobility and active recovery',
    highlights: ['Yoga classes', 'Schedule to confirm', 'Drop-in places to confirm', 'Recovery session']
  },
  {
    slug: 'kickboxing-vang-vieng',
    name: 'Kickboxing Vang Vieng',
    subcategory: 'Kickboxing training',
    cardNote: 'add a striking session',
    shortDescription: 'A kickboxing training address to keep for a padwork or fitness session while staying in Vang Vieng.',
    bestFor: 'A kickboxing or striking workout',
    highlights: ['Kickboxing training', 'Class timetable to confirm', 'Equipment to confirm', 'Drop-in session to confirm']
  }
];

export const vangViengScooterRentals = toPlaces(
  scooterSeeds,
  'scooter-rental',
  'Vehicle rental',
  'Confirm pickup and return hours directly',
  'Confirm daily rate, deposit and fuel policy directly'
);

export const vangViengFitness = toPlaces(
  fitnessSeeds,
  'gyms-fitness',
  'Training & fitness',
  'Confirm the current class or gym schedule directly',
  'Confirm day-pass or class prices directly'
);
