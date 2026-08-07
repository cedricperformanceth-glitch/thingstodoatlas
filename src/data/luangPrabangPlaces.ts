import type { Place } from './atlas';
import { resolvePlaceImages } from './placeImageResolver';

type LuangPrabangSeed = {
  slug: string;
  name: string;
  category: 'restaurants' | 'cafes' | 'accommodation';
  city: 'Luang Prabang';
  country: 'Laos';
  subcategory: string;
  cuisine: string;
};

const fallbackImages = {
  restaurants: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=84',
  cafes: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=84',
  accommodation: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=84'
} as const;

// Names selected on 7 August 2026 from Booking.com's current Luang Prabang
// guest-house listings. Booking is used only to identify establishment names.
// No Booking ratings, reviews, links, prices or photos are stored here.
const guesthouseSeeds: LuangPrabangSeed[] = [
  { slug: "midnight-blue-guesthouse-stay", name: "Midnight Blue Guesthouse", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "baan-pila-stay", name: "Baan Pila", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Independent accommodation", cuisine: "Accommodation" },
  { slug: "villa-merry-lao-ban-aphay-stay", name: "Villa Merry Lao Ban Aphay", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Villa or guesthouse", cuisine: "Accommodation" },
  { slug: "view-khemkhong-guesthouse-stay", name: "View Khemkhong Guesthouse", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "pongkham-residence-stay", name: "Pongkham Residence", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Residence", cuisine: "Accommodation" },
  { slug: "thongbay-guesthouse-stay", name: "Thongbay Guesthouse", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "luang-prabang-nagara-villa-river-view-stay", name: "Luang Prabang Nagara Villa River View", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Villa or guesthouse", cuisine: "Accommodation" },
  { slug: "indigo-house-hotel-stay", name: "Indigo House Hotel", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Hotel", cuisine: "Accommodation" },
  { slug: "ban-loom-guesthouse-and-weaving-workshop-stay", name: "Ban Loom Guesthouse & Weaving Workshop", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "oudomsin-guesthouse-stay", name: "Oudomsin Guesthouse", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "golden-sun-boutique-hotel-stay", name: "Golden Sun Boutique Hotel", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Hotel", cuisine: "Accommodation" },
  { slug: "luang-prabang-manichan-villa-stay", name: "Luang Prabang Manichan Villa", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Villa or guesthouse", cuisine: "Accommodation" },
  { slug: "villa-namkhan-river-stay", name: "Villa Namkhan River", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Villa or guesthouse", cuisine: "Accommodation" },
  { slug: "phanh-tha-sone-guest-house-stay", name: "Phanh Tha Sone Guest House", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "villa-phathana-royal-view-hotel-stay", name: "Villa Phathana Royal View Hotel", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Hotel", cuisine: "Accommodation" },
  { slug: "colonial-house-mekong-river-view-stay", name: "Colonial House Mekong River View", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "liberty-place-stay", name: "Liberty Place", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Independent accommodation", cuisine: "Accommodation" },
  { slug: "atsalin-guesthouse-stay", name: "Atsalin Guesthouse", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "nirasim-villa-stay", name: "Nirasim Villa", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Villa or guesthouse", cuisine: "Accommodation" },
  { slug: "chalern-guesthouse-stay", name: "Chalern Guesthouse", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "ban-vivanh-chambres-d-hotes-stay", name: "Ban Vivanh chambres d'hotes", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Independent accommodation", cuisine: "Accommodation" },
  { slug: "villa-threed-xaydara-stay", name: "Villa ThreeD Xaydara", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Villa or guesthouse", cuisine: "Accommodation" },
  { slug: "luang-prabang-champa-villa-hotel-stay", name: "Luang Prabang Champa Villa Hotel", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Hotel", cuisine: "Accommodation" },
  { slug: "luang-prabang-oudomlith-villa-and-travel-stay", name: "Luang Prabang Oudomlith Villa & Travel", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Villa or guesthouse", cuisine: "Accommodation" },
  { slug: "golden-lotus-place-luang-prabang-stay", name: "Golden Lotus Place Luang Prabang", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Independent accommodation", cuisine: "Accommodation" },
  { slug: "little-friendly-guest-house-with-pool-stay", name: "Little Friendly Guest House with pool", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "rattana-guesthouse-stay", name: "Rattana Guesthouse", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "phai-guesthouse-stay", name: "PHAI GUESTHOUSE", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "duang-champa-2-guest-house-stay", name: "Duang Champa 2 Guest house", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "luangaloun-guesthouse-stay", name: "Luangaloun Guesthouse", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "ireenkevin-guesthouse-stay", name: "Ireenkevin guesthouse", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "nocknoy-lanexang-guest-house-stay", name: "Nocknoy Lanexang Guest House", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "y-not-lao-villa-stay", name: "Y Not Lao Villa", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Villa or guesthouse", cuisine: "Accommodation" },
  { slug: "phonepraseuth-guesthouse-stay", name: "Phonepraseuth Guesthouse", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" },
  { slug: "thepphavong-guesthouse-stay", name: "Thepphavong guesthouse", category: "accommodation", city: 'Luang Prabang', country: 'Laos', subcategory: "Guesthouse", cuisine: "Accommodation" }
];

// Names selected on 7 August 2026 from Tripadvisor's current Luang Prabang
// restaurant listings. Tripadvisor is used only to identify establishment names.
// No Tripadvisor ratings, reviews, links or photos are stored here.
const restaurantSeeds: LuangPrabangSeed[] = [
  { slug: "manda-de-laos-restaurant", name: "Manda de Laos", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Local and international dining" },
  { slug: "bamboo-garden-restaurant-restaurant", name: "Bamboo Garden Restaurant", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Lao and Asian cuisine" },
  { slug: "bouang-restaurant", name: "Bouang", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Local and international dining" },
  { slug: "3-nagas-restaurant-restaurant", name: "3 Nagas Restaurant", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Lao and Asian cuisine" },
  { slug: "red-rose-luang-prabang-restaurant", name: "Red Rose Luang Prabang", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Local and international dining" },
  { slug: "main-street-bar-and-grill-restaurant", name: "Main Street Bar and Grill", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Grill restaurant", cuisine: "Local and international dining" },
  { slug: "khaiphaen-restaurant", name: "Khaiphaen", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Lao and Asian cuisine" },
  { slug: "alamea-restaurant-restaurant", name: "Alamea Restaurant", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Lao and Asian cuisine" },
  { slug: "cafe-toui-restaurant", name: "Cafe Toui", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant & café", cuisine: "Lao and Asian cuisine" },
  { slug: "bamboo-tree-lao-cooking-school-and-restaurant-restaurant", name: "Bamboo Tree Lao Cooking School and Restaurant", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Lao and Asian cuisine" },
  { slug: "dyen-sabai-restaurant-restaurant", name: "Dyen Sabai Restaurant", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Lao and Asian cuisine" },
  { slug: "tamarind-restaurant", name: "Tamarind", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Lao and Asian cuisine" },
  { slug: "popolo-restaurant", name: "Popolo", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Pizzeria or Italian restaurant", cuisine: "Italian and pizza" },
  { slug: "phonheuang-cafe-restaurant", name: "Phonheuang Cafe", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant & café", cuisine: "Lao and Asian cuisine" },
  { slug: "tangor-restaurant", name: "Tangor", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "French and European cuisine" },
  { slug: "il-tavolo-luang-phrabang-restaurant", name: "Il Tavolo Luang Phrabang", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Pizzeria or Italian restaurant", cuisine: "Italian and pizza" },
  { slug: "carpe-diem-restaurant-restaurant", name: "Carpe Diem Restaurant", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "French and European cuisine" },
  { slug: "governor-s-grill-at-sofitel-luang-prabang-restaurant", name: "Governor's Grill at Sofitel Luang Prabang", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Grill restaurant", cuisine: "Local and international dining" },
  { slug: "l-isola-dei-nuraghi-restaurant", name: "L' Isola Dei Nuraghi", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Pizzeria or Italian restaurant", cuisine: "Italian and pizza" },
  { slug: "the-belle-rive-terrace-restaurant", name: "The Belle Rive Terrace", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Local and international dining" },
  { slug: "viewpoint-restaurant-restaurant", name: "Viewpoint Restaurant", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Local and international dining" },
  { slug: "gaspard-artisan-cuisine-restaurant", name: "Gaspard Artisan Cuisine", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "French and European cuisine" },
  { slug: "la-belle-epoque-at-the-luang-say-residence-restaurant", name: "La Belle Epoque at The Luang Say Residence", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "French and European cuisine" },
  { slug: "bistro-1960-restaurant", name: "Bistro 1960", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "French and European cuisine" },
  { slug: "l-elephant-restaurant-restaurant", name: "L'Elephant Restaurant", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "French and European cuisine" },
  { slug: "the-great-house-restaurant", name: "The Great House", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Local and international dining" },
  { slug: "satri-house-restaurant", name: "Satri House", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Local and international dining" },
  { slug: "xiengthong-palace-restaurant", name: "Xiengthong Palace", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Local and international dining" },
  { slug: "secret-pizza-restaurant", name: "Secret Pizza", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Pizzeria or Italian restaurant", cuisine: "Italian and pizza" },
  { slug: "mookata-asian-grill-restaurant", name: "Mookata Asian Grill", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Grill restaurant", cuisine: "Asian grill" },
  { slug: "rainforest-bistro-and-bar-restaurant", name: "Rainforest Bistro And Bar", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant & bar", cuisine: "Local and international dining" },
  { slug: "atsalin-restaurant-restaurant", name: "Atsalin Restaurant", category: "restaurants", city: 'Luang Prabang', country: 'Laos', subcategory: "Restaurant", cuisine: "Lao and Asian cuisine" }
];

// Names selected on 7 August 2026 from Tripadvisor's current Luang Prabang
// café listings. The two Joma entries are retained as separate city branches.
// No Tripadvisor ratings, reviews, links or photos are stored here.
const cafeSeeds: LuangPrabangSeed[] = [
  { slug: "saffron-coffee-cafe", name: "Saffron Coffee", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Coffee shop", cuisine: "Coffee, breakfast and café food" },
  { slug: "joma-bakery-cafe-old-town-cafe", name: "Joma Bakery Cafe · Old Town", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Bakery & café", cuisine: "Coffee, breakfast and café food" },
  { slug: "two-little-birds-cafe-cafe", name: "Two Little Birds Cafe", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Café", cuisine: "Coffee, breakfast and café food" },
  { slug: "joma-bakery-cafe-chao-fa-ngum-cafe", name: "Joma Bakery Cafe · Chao Fa Ngum", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Bakery & café", cuisine: "Coffee, breakfast and café food" },
  { slug: "zurich-bread-factory-and-cafe-cafe", name: "Zurich Bread Factory and Café", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Bakery & café", cuisine: "Coffee, breakfast and café food" },
  { slug: "silk-road-kitchen-cafe", name: "Silk Road Kitchen", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Café", cuisine: "Coffee, breakfast and café food" },
  { slug: "t56-cafe-and-bar-cafe", name: "T56 Cafe & Bar", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Café & bar", cuisine: "Coffee, breakfast and café food" },
  { slug: "big-tree-cafe-cafe", name: "Big Tree Cafe", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Café", cuisine: "Coffee, breakfast and café food" },
  { slug: "dada-cafe-cafe", name: "Dada Cafe", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Café", cuisine: "Coffee, breakfast and café food" },
  { slug: "formula-b-cafe", name: "Formula B", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Café", cuisine: "Coffee, breakfast and café food" },
  { slug: "saffron-coffee-alley-cafe", name: "Saffron Coffee Alley", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Coffee shop", cuisine: "Coffee, breakfast and café food" },
  { slug: "le-petit-prince-cafe-cafe", name: "Le Petit Prince Cafe", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Café", cuisine: "Coffee, breakfast and café food" },
  { slug: "luang-prabang-artisans-cafe-cafe", name: "Luang Prabang Artisans Cafe", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Café", cuisine: "Coffee, breakfast and café food" },
  { slug: "dao-coffee-luang-prabang-cafe", name: "Dao Coffee Luang Prabang", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Coffee shop", cuisine: "Coffee, breakfast and café food" },
  { slug: "comma-coffee-luangprabang-cafe", name: "Comma Coffee Luangprabang", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Coffee shop", cuisine: "Coffee, breakfast and café food" },
  { slug: "the-tea-house-luang-prabang-cafe", name: "The Tea House Luang Prabang", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Tea house", cuisine: "Coffee, breakfast and café food" },
  { slug: "the-tea-house-cafe", name: "The Tea House", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Tea house", cuisine: "Coffee, breakfast and café food" },
  { slug: "cafe-1960-cafe", name: "Cafe 1960", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Café", cuisine: "Coffee, breakfast and café food" },
  { slug: "changkham-bakery-and-cafe-cafe", name: "Changkham Bakery & Cafe", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Bakery & café", cuisine: "Coffee, breakfast and café food" },
  { slug: "kk-coffee-house-cafe", name: "KK Coffee House", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Coffee shop", cuisine: "Coffee, breakfast and café food" },
  { slug: "cafe-le-petit-prince2-poke-and-kimbap-cafe", name: "Café \"Le Petit Prince2\" Poke&Kimbap", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Café", cuisine: "Coffee, breakfast and café food" },
  { slug: "touk-touk-coffee-cafe", name: "Touk Touk Coffee", category: "cafes", city: 'Luang Prabang', country: 'Laos', subcategory: "Coffee shop", cuisine: "Coffee, breakfast and café food" }
];

const categoryCopy = {
  restaurants: {
    cardNote: 'save it for a meal in Luang Prabang',
    shortDescription: 'A Luang Prabang restaurant name selected for the city notebook and ready to verify on the map.',
    description: 'This restaurant is included as an independent Luang Prabang address. Check the current menu, exact location and opening hours before visiting.',
    whyWeRecommend: 'It gives the city guide a broader mix of established dining names without copying ratings or editorial claims from a booking platform.',
    highlights: ['Luang Prabang dining', 'Independent map check', 'Menu varies', 'Current details to confirm'],
    bestFor: 'Travellers comparing places to eat around Luang Prabang',
    hours: 'Confirm current opening hours on Google Maps',
    price: 'Prices vary by order'
  },
  cafes: {
    cardNote: 'keep it for a coffee break',
    shortDescription: 'A café address for coffee, breakfast or a slower pause while exploring Luang Prabang.',
    description: 'This café is included as an independent Luang Prabang address. Confirm the branch, current menu and opening hours on the map before going.',
    whyWeRecommend: 'It adds another practical pause between the old town, river streets and the wider Luang Prabang route.',
    highlights: ['Coffee or tea', 'Breakfast or snack', 'City pause', 'Current details to confirm'],
    bestFor: 'Coffee breaks and unhurried mornings in Luang Prabang',
    hours: 'Confirm current opening hours on Google Maps',
    price: 'Prices vary by order'
  },
  accommodation: {
    cardNote: 'compare the real location before booking',
    shortDescription: 'A Luang Prabang stay selected from current accommodation listings and prepared as an independent map card.',
    description: 'This accommodation is included as a neutral Luang Prabang address. Check the exact room type, cancellation terms, access and current facilities directly before booking.',
    whyWeRecommend: 'It broadens the city shortlist across guesthouses, villas and small hotels without reproducing Booking rankings or review language.',
    highlights: ['Luang Prabang stay', 'Location to verify', 'Facilities vary', 'Booking terms to confirm'],
    bestFor: 'Travellers comparing places to stay in Luang Prabang',
    hours: 'Confirm current reception and check-in hours',
    price: 'Rates vary by date and room'
  }
} as const;

const createPlace = (seed: LuangPrabangSeed): Place => {
  const copy = categoryCopy[seed.category];

  return {
    slug: seed.slug,
    name: seed.name,
    category: seed.category,
    subcategory: seed.subcategory,
    cuisine: seed.cuisine,
    city: seed.city,
    country: seed.country,
    image: fallbackImages[seed.category],
    imageAlt: `Contextual ${seed.category === 'accommodation' ? 'accommodation' : seed.category === 'cafes' ? 'café' : 'restaurant'} image for ${seed.name} in Luang Prabang`,
    cardNote: copy.cardNote,
    shortDescription: copy.shortDescription,
    description: copy.description,
    whyWeRecommend: copy.whyWeRecommend,
    highlights: [...copy.highlights],
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${seed.name} Luang Prabang Laos`)}`,
    status: 'needs-review',
    lastChecked: 'August 2026',
    hours: copy.hours,
    price: copy.price,
    address: 'Luang Prabang, Luang Prabang Province, Laos',
    bestFor: copy.bestFor,
    imageIsGeneric: true
  };
};

export const luangPrabangGuesthouses = resolvePlaceImages(guesthouseSeeds.map(createPlace));
export const luangPrabangRestaurants = resolvePlaceImages(restaurantSeeds.map(createPlace));
export const luangPrabangCafes = resolvePlaceImages(cafeSeeds.map(createPlace));

// Explicit registry fields keep the automatic image-research workflow aware of
// every Luang Prabang address even though the final Place objects are generated.
export const luangPrabangPlaceResearchRegistry = [
  ...guesthouseSeeds,
  ...restaurantSeeds,
  ...cafeSeeds
];
