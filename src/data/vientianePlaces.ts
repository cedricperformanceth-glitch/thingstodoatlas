import type { Place } from './atlas';
import { resolvePlaceImages } from './placeImageResolver';

type VientianeSeed = {
  slug: string;
  name: string;
  category: 'restaurants' | 'cafes' | 'accommodation';
  city: 'Vientiane';
  country: 'Laos';
  subcategory: string;
  cuisine: string;
};

const fallbackImages = {
  restaurants: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=84',
  cafes: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=84',
  accommodation: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=84'
} as const;

const guesthouseSeeds: VientianeSeed[] = [
  { slug: 'bluehome-vientiane-stay', name: 'BlueHome Vientiane', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Independent accommodation', cuisine: 'Accommodation' },
  { slug: 'lucky-hostel-stay', name: 'Lucky Hostel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'aroma-hostel-stay', name: 'Aroma Hostel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'mabuhay-guest-house-thai-embassy-vientiane-stay', name: 'Mabuhay Guest House, Thai Embassy Vientiane', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Guesthouse', cuisine: 'Accommodation' },
  { slug: 'mekong-riverside-stay', name: 'Mekong Riverside', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Riverside accommodation', cuisine: 'Accommodation' },
  { slug: 'intouch-guest-house-stay', name: 'Intouch Guest House', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Guesthouse', cuisine: 'Accommodation' },
  { slug: 'villa-sisavad-guesthouse-stay', name: 'Villa Sisavad Guesthouse', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Guesthouse', cuisine: 'Accommodation' },
  { slug: 'souKchalern-guesthouse-stay', name: 'SOUKCHALERN guesthouse', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Guesthouse', cuisine: 'Accommodation' },
  { slug: 'syri-boutique-guesthouse-restaurant-and-cafe-stay', name: 'SYRI Boutique Guesthouse Restaurant & Cafe', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Guesthouse, restaurant & café', cuisine: 'Accommodation' },
  { slug: 'syri-guesthouse-vientiane-hostel-and-cafe-stay', name: 'SYRI Guesthouse Vientiane Hostel & Cafe', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel & café', cuisine: 'Accommodation' },
  { slug: 'house-of-jars-stay', name: 'House Of Jars', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Independent accommodation', cuisine: 'Accommodation' },
  { slug: 'demi-cafe-and-hostel-stay', name: 'Demi Cafe and Hostel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel & café', cuisine: 'Accommodation' },
  { slug: 'vientiane-ruby-backpackers-hostel-stay', name: 'Vientiane Ruby Backpackers Hostel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'lunar-hostel-stay', name: 'Lunar Hostel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'muulao-hostel-stay', name: 'Muulao Hostel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'barn-laos-hostel-stay', name: 'Barn Laos Hostel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'barn1920s-hostel-stay', name: 'Barn1920s Hostel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'venn-hostel-stay', name: 'Venn Hostel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'vientiane-star-hotel-stay', name: 'Vientiane Star Hotel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hotel', cuisine: 'Accommodation' },
  { slug: 'tt-hostel-stay', name: 'TT Hostel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'tt-premium-hostel-vientiane-stay', name: 'TT Premium Hostel Vientiane', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'hideseek-hostel-vientiane-thai-embassy-stay', name: 'HideSeek Hostel Vientiane Thai embassy', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'sailomyen-hostel-stay', name: 'Sailomyen Hostel', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hostel', cuisine: 'Accommodation' },
  { slug: 'khampiane-hotel-vientiane-stay', name: 'Khampiane Hotel Vientiane', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hotel', cuisine: 'Accommodation' },
  { slug: 'the-green-hotel-vientiane-stay', name: 'The Green Hotel Vientiane', category: 'accommodation', city: 'Vientiane', country: 'Laos', subcategory: 'Hotel', cuisine: 'Accommodation' }
];

const restaurantSeeds: VientianeSeed[] = [
  { slug: '3-merchants-restaurant', name: '3 Merchants', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant', cuisine: 'International and local dining' },
  { slug: 'selene-sky-bar-restaurant', name: 'Selene Sky Bar', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant & bar', cuisine: 'Drinks and international food' },
  { slug: 'arom-pakse-restaurant-vientiane-restaurant', name: 'Arom Pakse Restaurant', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant', cuisine: 'International and local dining' },
  { slug: 'mosaic-restaurant', name: 'Mosaic', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant', cuisine: 'International and local dining' },
  { slug: 'pdr-pizza-da-roby-restaurant', name: 'PDR - Pizza Da Roby', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Pizzeria', cuisine: 'Pizza and Italian food' },
  { slug: 'noys-fruit-heaven-restaurant', name: "Noy's Fruit Heaven", category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant', cuisine: 'International and local dining' },
  { slug: 'tyson-kitchen-restaurant', name: 'Tyson Kitchen', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant', cuisine: 'International and local dining' },
  { slug: 'pomodoro-pizzeria-restaurant', name: 'Pomodoro Pizzeria', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Pizzeria', cuisine: 'Pizza and Italian food' },
  { slug: 'flavours-and-spices-restaurant', name: 'Flavours & Spices', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Indian restaurant', cuisine: 'Indian and South Asian cuisine' },
  { slug: 'kualao-restaurant-vientiane-restaurant', name: 'Kualao Restaurant', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Lao restaurant', cuisine: 'Lao cuisine' },
  { slug: 'pvo-restaurant', name: 'PVO', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Lao restaurant', cuisine: 'Lao cuisine' },
  { slug: 'jamil-zahid-punjabi-restaurant-vientiane-restaurant', name: 'Jamil Zahid Punjabi Restaurant', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Indian restaurant', cuisine: 'Indian and South Asian cuisine' },
  { slug: 'khop-chai-deu-restaurant', name: 'Khop Chai Deu', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant', cuisine: 'International and local dining' },
  { slug: 'pimenton-restaurant', name: 'Pimenton', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant', cuisine: 'Latin and international food' },
  { slug: 'bacan-cafe-restaurant', name: 'Bacán Café', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant & café', cuisine: 'Latin and international food' },
  { slug: 'kungs-cafe-lao-restaurant', name: "Kung's Cafe Lao", category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant & café', cuisine: 'International and local dining' },
  { slug: 'makphet-restaurant', name: 'Makphet', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Lao restaurant', cuisine: 'Lao cuisine' },
  { slug: 'rosella-restaurant-vientiane-restaurant', name: 'Rosella Restaurant', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Lao restaurant', cuisine: 'Lao cuisine' },
  { slug: 'phakhao-lao-restaurant-vientiane-restaurant', name: 'Phakhao Lao Restaurant', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Lao restaurant', cuisine: 'Lao cuisine' },
  { slug: 'chokdee-cafe-and-belgian-beer-bar-restaurant', name: 'Chokdee Cafe & Belgian Beer Bar', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant & bar', cuisine: 'Drinks and international food' },
  { slug: 'tango-bar-pub-restaurant-vientiane-restaurant', name: 'Tango Bar Pub Restaurant', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant & bar', cuisine: 'Drinks and international food' },
  { slug: 'tipsy-elephant-restaurant', name: 'Tipsy Elephant', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant', cuisine: 'International and local dining' },
  { slug: 'hard-rock-cafe-vientiane-restaurant', name: 'Hard Rock Cafe Vientiane', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant & café', cuisine: 'International and local dining' },
  { slug: 'isshin-vientiane-japanese-cuisine-restaurant', name: 'Isshin Vientiane - Japanese Cuisine', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Japanese restaurant', cuisine: 'Japanese cuisine' },
  { slug: 'la-terrasse-bakery-and-cafe-restaurant', name: 'La Terrasse Bakery & Café', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant & café', cuisine: 'French and European food' },
  { slug: 'pho-zap-restaurant', name: 'Pho Zap', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant', cuisine: 'International and local dining' },
  { slug: 'la-cage-du-coq-restaurant', name: 'La Cage du Coq', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant', cuisine: 'French and European food' },
  { slug: 'cafe-ango-restaurant', name: 'cafe ango', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant & café', cuisine: 'International and local dining' },
  { slug: 'central-lake-restaurant-and-cafe-vientiane-restaurant', name: 'Central Lake Restaurant & Cafe', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant & café', cuisine: 'International and local dining' },
  { slug: 'royal-kitchen-restaurant', name: 'Royal Kitchen', category: 'restaurants', city: 'Vientiane', country: 'Laos', subcategory: 'Restaurant', cuisine: 'International and local dining' }
];

const cafeSeeds: VientianeSeed[] = [
  { slug: 'common-grounds-cafe-and-bakery-vientiane-cafe', name: 'Common Grounds Cafe and Bakery', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Bakery & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'joma-bakery-cafe-setthathirat-vientiane-cafe', name: 'Joma Bakery Cafe · Setthathirat', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Bakery & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'le-banneton-vientiane-cafe', name: 'Le Banneton', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Bakery & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'see-you-coffee-vientiane-cafe', name: 'See You Coffee', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'noys-fruit-heaven-vientiane-cafe', name: "Noy's Fruit Heaven", category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Juice bar & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'comma-coffee-reading-room-vientiane-cafe', name: 'Comma Coffee Reading Room', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & reading room', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'naked-espresso-vientiane-cafe', name: 'Naked Espresso', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'joma-bakery-cafe-23-singha-road-vientiane-cafe', name: 'Joma Bakery Cafe · 23 Singha Road', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Bakery & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'bacan-cafe-vientiane-cafe', name: 'Bacán Café', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'la-terrasse-bakery-and-cafe-vientiane-cafe', name: 'La Terrasse Bakery & Café', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Bakery & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'cafe-ango-vientiane-cafe', name: 'cafe ango', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'central-lake-restaurant-and-cafe-vientiane-cafe', name: 'Central Lake Restaurant & Cafe', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Lakeside café & restaurant', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'kungs-cafe-lao-vientiane-cafe', name: "Kung's Cafe Lao", category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'chokdee-cafe-and-belgian-beer-bar-vientiane-cafe', name: 'Chokdee Cafe & Belgian Beer Bar', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Café, restaurant & bar', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'dada-cafe-vientiane-cafe', name: 'DaDa Cafe', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'kaogee-cafe-phonsavanh-vientiane-cafe', name: 'Kaogee Cafe Phonsavanh', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'kaogee-cafe-vientiane-cafe', name: 'Kaogee Cafe', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'cafe-france-vientiane-cafe', name: 'Cafe France', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'indigo-cafe-vientiane-cafe', name: 'Indigo Cafe Vientiane', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'maison-coffee-vientiane-cafe', name: 'Maison Coffee', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'hard-rock-cafe-vientiane-cafe', name: 'Hard Rock Cafe Vientiane', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Café, restaurant & bar', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'nunee-kaogee-pate-vientiane-cafe', name: 'Nunee Kaogee Pâté', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Bakery & café', cuisine: 'Coffee, breakfast and café food' },
  { slug: 'maner-cafe-vientiane-cafe', name: 'Maner Cafe', category: 'cafes', city: 'Vientiane', country: 'Laos', subcategory: 'Coffee shop & café', cuisine: 'Coffee, breakfast and café food' }
];

const placeCopy = (seed: VientianeSeed) => {
  if (seed.category === 'accommodation') {
    return {
      cardNote: 'compare the location before booking',
      shortDescription: `A Vientiane ${seed.subcategory.toLowerCase()} option saved for comparing location, room type and access before booking.`,
      whyWeRecommend: `Keep ${seed.name} in the capital notebook as an independent accommodation option. Open the Google Maps search, compare its real position with the riverfront, city centre and transport connections, then confirm the room and current rate directly.`,
      highlights: [seed.subcategory, 'Vientiane accommodation', 'Google Maps search saved', 'Booking details to confirm'],
      hours: 'Confirm reception and check-in hours directly',
      price: 'Check current room rates directly',
      bestFor: 'Comparing a practical stay in Vientiane'
    };
  }

  if (seed.category === 'cafes') {
    return {
      cardNote: 'save it for a city pause',
      shortDescription: `A Vientiane ${seed.subcategory.toLowerCase()} address for coffee, breakfast or a slower pause during a day in the capital.`,
      whyWeRecommend: `Keep ${seed.name} as an independent café option. Open the Google Maps search to confirm the exact branch, current hours and whether the food or coffee offer matches the stop you need.`,
      highlights: [seed.subcategory, 'Coffee or daytime stop', 'Google Maps search saved', 'Current hours to confirm'],
      hours: 'Confirm current opening hours on Google Maps',
      price: 'Prices vary by order',
      bestFor: 'Coffee, breakfast or a daytime break'
    };
  }

  return {
    cardNote: 'keep another table in the notebook',
    shortDescription: `A Vientiane ${seed.subcategory.toLowerCase()} address to compare for lunch, dinner or an evening in the capital.`,
    whyWeRecommend: `Save ${seed.name} as an independent restaurant option. Use the Google Maps search to confirm the exact location, current menu and opening hours before making a special trip.`,
    highlights: [seed.subcategory, seed.cuisine, 'Google Maps search saved', 'Current menu to confirm'],
    hours: 'Confirm current opening hours on Google Maps',
    price: 'Prices vary by order',
    bestFor: 'Comparing lunch or dinner options in Vientiane'
  };
};

const toPlaces = (seeds: VientianeSeed[]): Place[] => seeds.map((seed) => {
  const copy = placeCopy(seed);
  return {
    ...seed,
    image: fallbackImages[seed.category],
    imageAlt: `${seed.name} in Vientiane, Laos`,
    cardNote: copy.cardNote,
    shortDescription: copy.shortDescription,
    description: copy.shortDescription,
    whyWeRecommend: copy.whyWeRecommend,
    highlights: copy.highlights,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${seed.name} Vientiane Laos`)}`,
    status: 'needs-review',
    lastChecked: 'August 2026',
    hours: copy.hours,
    price: copy.price,
    address: 'Vientiane Capital, Laos',
    bestFor: copy.bestFor,
    imageIsGeneric: true
  };
});

// Booking.com and Tripadvisor were used only to identify establishment names.
// No platform ratings, reviews, rankings, prices, links or photos are stored.
export const vientianeGuesthouses = resolvePlaceImages(toPlaces(guesthouseSeeds));
export const vientianeRestaurants = resolvePlaceImages(toPlaces(restaurantSeeds));
export const vientianeCafes = resolvePlaceImages(toPlaces(cafeSeeds));
