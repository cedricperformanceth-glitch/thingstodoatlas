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

const activitySeeds: PlaceSeed[] = [
  {
    slug: 'hot-air-balloon-paramotor-vang-vieng',
    name: 'Hot Air Balloon & Paramotor',
    subcategory: 'Aerial experience',
    cardNote: 'see the karst landscape from above',
    shortDescription: 'Weather-dependent balloon and paramotor experiences offering an aerial view of the Nam Song, rice fields and limestone mountains.',
    bestFor: 'A sunrise or sunset flight above Vang Vieng',
    highlights: ['Hot-air balloon', 'Paramotor flight', 'Weather dependent', 'Licensed operator essential']
  },
  {
    slug: 'num-bor-keo-cave',
    name: 'Num Bor Keo Cave',
    subcategory: 'Wild cave & natural pool',
    cardNote: 'a quieter cave route',
    shortDescription: 'A less-developed cave reached through the countryside, with dark passages and a natural pool near the entrance.',
    bestFor: 'A quieter cave visit with a headlamp',
    highlights: ['Dark cave', 'Natural pool', 'Headlamp required', 'Slippery ground']
  },
  {
    slug: 'blue-lagoon-1-vang-vieng',
    name: 'Blue Lagoon 1 · Vang Vieng',
    subcategory: 'Lagoon & cave stop',
    cardNote: 'the classic lagoon route',
    shortDescription: 'The best-known Vang Vieng lagoon, paired with Tham Phu Kham Cave and reached along the western countryside road.',
    bestFor: 'A first lagoon and cave day',
    highlights: ['Blue Lagoon 1', 'Tham Phu Kham Cave nearby', 'Swimming', 'Popular and often busy']
  },
  {
    slug: 'blue-lagoon-2-vang-vieng',
    name: 'Blue Lagoon 2',
    subcategory: 'Swimming lagoon',
    cardNote: 'a broader lagoon stop',
    shortDescription: 'A landscaped lagoon area with pools and space to pause during a scooter route west of town.',
    bestFor: 'Swimming and a longer countryside break',
    highlights: ['Swimming pools', 'Countryside route', 'Picnic-style stop', 'Road conditions to confirm']
  },
  {
    slug: 'vang-vieng-inter-park-lagoon-9',
    name: 'Vang Vieng Inter Park · Blue Lagoon 9',
    subcategory: 'Nature park & lagoon',
    cardNote: 'a lagoon east of town',
    shortDescription: 'A nature-oriented park also known as Blue Lagoon 9, combining clear water with a quieter outdoor setting.',
    bestFor: 'A relaxed lagoon stop away from the classic western route',
    highlights: ['Blue Lagoon 9', 'Nature park', 'Swimming to confirm', 'East-side route']
  },
  {
    slug: 'pha-ngern-silver-cliff-viewpoint',
    name: 'Pha Ngern Silver Cliff Viewpoint',
    subcategory: 'Karst viewpoint hike',
    cardNote: 'climb to the silver cliff',
    shortDescription: 'A steep viewpoint hike with a motorbike photo platform and wide views across rice fields and limestone peaks.',
    bestFor: 'A shorter but steep panoramic hike',
    highlights: ['Silver Cliff', 'Steep trail', 'Motorbike photo point', 'Good shoes recommended']
  },
  {
    slug: 'blue-lagoon-3-vang-vieng',
    name: 'Blue Lagoon 3',
    subcategory: 'Swimming lagoon',
    cardNote: 'continue deeper into the countryside',
    shortDescription: 'A popular countryside lagoon with swimming areas and simple activities reached by a longer, sometimes rougher road.',
    bestFor: 'A lagoon stop on a full scooter day',
    highlights: ['Swimming lagoon', 'Rougher access road', 'Rope swings to confirm', 'Full-day route option']
  },
  {
    slug: 'nam-xay-viewpoint',
    name: 'Nam Xay Viewpoint',
    subcategory: 'Iconic viewpoint hike',
    cardNote: 'reach the famous motorcycle summit',
    shortDescription: 'Vang Vieng’s most photographed viewpoint, reached by a short but steep climb above the western rice fields.',
    bestFor: 'Sunrise, sunset and the iconic summit view',
    highlights: ['Famous motorcycle summit', 'Steep hike', 'Panoramic karst view', 'Crowds at peak times']
  },
  {
    slug: 'phapoungkham-cave-viewpoint',
    name: 'Phapoungkham Cave & Viewpoint',
    subcategory: 'Cave & viewpoint hike',
    cardNote: 'combine a cave with two summits',
    shortDescription: 'A compact adventure area combining a cave with viewpoint routes known for unusual summit installations.',
    bestFor: 'An easier viewpoint-and-cave combination',
    highlights: ['Cave entrance', 'Multiple viewpoints', 'Short steep trail', 'Animal-welfare concerns reported']
  },
  {
    slug: 'phamone-waterfall',
    name: 'Phamone Waterfall',
    subcategory: 'Local waterfall route',
    cardNote: 'verify the seasonal waterfall road',
    shortDescription: 'A lesser-documented waterfall listing around the wider Vang Vieng area whose access and seasonal flow should be confirmed locally.',
    bestFor: 'A locally confirmed waterfall detour',
    highlights: ['Waterfall', 'Seasonal conditions', 'Route to confirm locally', 'Do not rely on offline directions alone']
  },
  {
    slug: 'adams-climbing-school',
    name: "Adam's Climbing School",
    subcategory: 'Rock-climbing school',
    cardNote: 'learn on the limestone walls',
    shortDescription: 'A climbing-school address for guided rock climbing and instruction on the limestone around Vang Vieng.',
    bestFor: 'A guided climbing session for beginners or experienced climbers',
    highlights: ['Rock climbing', 'Instruction', 'Equipment to confirm', 'Guide-led activity']
  },
  {
    slug: 'zipline-seven-travel',
    name: 'Zipline · Seven Travel',
    subcategory: 'Zipline operator',
    cardNote: 'cross the forest canopy',
    shortDescription: 'A local travel operator to check for zipline experiences around the caves, river and limestone landscape.',
    bestFor: 'Booking a guided zipline activity',
    highlights: ['Zipline', 'Operator-led activity', 'Safety briefing essential', 'Current route to confirm']
  },
  {
    slug: 'tham-khan-cave',
    name: 'Tham Khan Cave',
    subcategory: 'Cave excursion',
    cardNote: 'follow the quieter cave path',
    shortDescription: 'A smaller cave excursion reached through a rural route, often listed among Vang Vieng’s less-developed cave options.',
    bestFor: 'A quieter cave stop beyond the busiest attractions',
    highlights: ['Cave exploration', 'Rural access', 'Headlamp useful', 'Route conditions to confirm']
  },
  {
    slug: 'tham-none-cave',
    name: 'Tham None Cave',
    subcategory: 'Water cave experience',
    cardNote: 'enter the cave by water',
    shortDescription: 'A water-filled cave near the northern adventure zone, explored with a kayak or tube depending on conditions and operator.',
    bestFor: 'A guided water-cave experience',
    highlights: ['Water cave', 'Kayak or tube', 'Guide recommended', 'Water levels vary']
  },
  {
    slug: 'tham-chang-cave',
    name: 'Tham Chang Cave',
    subcategory: 'Developed cave & viewpoint',
    cardNote: 'the classic cave close to town',
    shortDescription: 'A developed cave southwest of town with stair access, chambers and a viewpoint over the Nam Song landscape.',
    bestFor: 'An accessible cave visit close to central Vang Vieng',
    highlights: ['Developed cave', 'Stair climb', 'Viewpoint', 'Close to town']
  },
  {
    slug: 'tham-nam-water-cave',
    name: 'Tham Nam Water Cave',
    subcategory: 'Cave tubing experience',
    cardNote: 'pull through the cave by rope',
    shortDescription: 'A well-known cave-tubing experience where visitors move through a water-filled passage using a tube and fixed rope.',
    bestFor: 'A guided cave-tubing excursion',
    highlights: ['Cave tubing', 'Water-filled passage', 'Guide-led visit', 'Water conditions vary']
  },
  {
    slug: 'phou-bia-from-vang-vieng',
    name: 'Phou Bia',
    subcategory: 'Remote mountain expedition',
    cardNote: 'the roof of Laos, not a casual day trip',
    shortDescription: 'Laos’s highest mountain in remote Xaysomboun, presented as a major expedition from Vang Vieng rather than a nearby attraction.',
    bestFor: 'A properly organised multi-day mountain expedition',
    highlights: ['Highest mountain in Laos', 'Remote Xaysomboun route', 'Access may be restricted', 'Official confirmation essential']
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

export const vangViengThingsToDo = toPlaces(
  activitySeeds,
  'things-to-do',
  'Experience',
  'Confirm current opening, weather and access conditions directly',
  'Entrance and activity prices vary; confirm directly'
);
