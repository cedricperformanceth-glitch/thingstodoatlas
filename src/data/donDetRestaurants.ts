import type { Place } from './atlas';

type RestaurantSeed = {
  slug: string;
  name: string;
  subcategory: string;
  cuisine: string;
  cardNote: string;
  shortDescription: string;
  whyWeRecommend: string;
  highlights: string[];
  bestFor: string;
};

// Names selected on 6 August 2026 from Tripadvisor's current Don Det
// restaurant ranking. Tripadvisor is used only to identify establishment
// names. No Tripadvisor ratings, reviews, links or photos are stored here.
const restaurantSeeds: RestaurantSeed[] = [
  {
    slug: 'mama-leuah-restaurant',
    name: 'Mama Leuah Restaurant',
    subcategory: 'Island restaurant',
    cuisine: 'Local and international food',
    cardNote: 'a relaxed island meal',
    shortDescription: 'A well-known Don Det restaurant to keep for an unhurried meal during a day on the island.',
    whyWeRecommend: 'Save it as one of the first restaurant addresses to compare when choosing where to eat on Don Det. Check the current menu and opening hours directly before making a special trip.',
    highlights: ['Island restaurant', 'Lunch or dinner stop', 'Casual atmosphere', 'Google Maps address saved'],
    bestFor: 'A relaxed lunch or dinner on Don Det'
  },
  {
    slug: '4000-island-bar',
    name: '4000 Island Bar',
    subcategory: 'Restaurant & bar',
    cuisine: 'Casual food and drinks',
    cardNote: 'food and drinks together',
    shortDescription: 'A casual restaurant-and-bar address for travellers who want food, drinks and an easy evening stop in one place.',
    whyWeRecommend: 'Keep it for a flexible evening when the group wants both a meal and a bar atmosphere without moving between several addresses.',
    highlights: ['Restaurant and bar', 'Evening stop', 'Casual food', 'Drinks available'],
    bestFor: 'Dinner followed by an easy island evening'
  },
  {
    slug: 'keas-backpackers-paradise-restaurant-bar',
    name: "Kea's Backpackers Paradise Restaurant & Bar",
    subcategory: 'Backpacker restaurant & bar',
    cuisine: 'Casual international food',
    cardNote: 'a social island dinner',
    shortDescription: 'A backpacker-friendly restaurant and bar suited to a casual meal, drinks and a more social evening.',
    whyWeRecommend: 'Save it when atmosphere matters as much as the meal and you want an address that works for groups or solo travellers meeting people.',
    highlights: ['Backpacker atmosphere', 'Restaurant and bar', 'Group-friendly stop', 'Casual evening'],
    bestFor: 'A social dinner and drinks'
  },
  {
    slug: 'the-boathouse-don-det',
    name: 'The Boathouse',
    subcategory: 'Riverside restaurant',
    cuisine: 'Local and international food',
    cardNote: 'eat beside the Mekong',
    shortDescription: 'A river-oriented restaurant address to keep for a slower meal close to the landscape that defines Don Det.',
    whyWeRecommend: 'Choose it when the setting is part of the meal and you want time to sit rather than make a quick food stop.',
    highlights: ['Riverside setting', 'Sit-down meal', 'Island atmosphere', 'Lunch or dinner'],
    bestFor: 'A longer meal beside the Mekong'
  },
  {
    slug: 'crazy-gecko-restaurant',
    name: 'Crazy Gecko',
    subcategory: 'Café & restaurant',
    cuisine: 'Breakfast, lighter meals and drinks',
    cardNote: 'a lighter daytime meal',
    shortDescription: 'A café-restaurant option for breakfast, lighter food or a longer daytime pause on Don Det.',
    whyWeRecommend: 'Keep it in both the café and restaurant notebook when the day calls for a flexible address rather than a formal dinner.',
    highlights: ['Café and restaurant', 'Daytime stop', 'Breakfast or lunch', 'Fresh drinks'],
    bestFor: 'Breakfast, lunch or a lighter meal'
  },
  {
    slug: 'street-view-restaurant-don-det',
    name: 'Street View Restaurant',
    subcategory: 'Casual restaurant',
    cuisine: 'Local and international food',
    cardNote: 'an easy central meal',
    shortDescription: 'A straightforward casual restaurant to keep for an uncomplicated lunch or dinner while moving around the island.',
    whyWeRecommend: 'Save it as an easy option when convenience and a broad casual meal matter more than planning a destination restaurant.',
    highlights: ['Casual restaurant', 'Lunch and dinner', 'Easy island stop', 'Broad meal option'],
    bestFor: 'An uncomplicated meal during the day'
  },
  {
    slug: 'reggae-bar-don-det',
    name: 'Reggae Bar',
    subcategory: 'Bar & casual food',
    cuisine: 'Drinks and casual dishes',
    cardNote: 'a late island stop',
    shortDescription: 'A bar-focused Don Det address to keep for drinks, casual food and a later, more relaxed evening.',
    whyWeRecommend: 'Use it as an evening option rather than a dedicated dining destination, especially when the atmosphere and drinks are the priority.',
    highlights: ['Bar atmosphere', 'Casual food', 'Evening stop', 'Drinks'],
    bestFor: 'A relaxed late evening on Don Det'
  },
  {
    slug: 'datta-bananaleaf-restaurant',
    name: 'Datta Bananaleaf Restaurant',
    subcategory: 'Island restaurant',
    cuisine: 'Asian and international food',
    cardNote: 'another dinner option',
    shortDescription: 'A Don Det restaurant address worth keeping as an alternative when comparing several places for dinner.',
    whyWeRecommend: 'Save it to widen the restaurant shortlist beyond the busiest central names and compare its current menu directly on the island.',
    highlights: ['Island restaurant', 'Dinner option', 'Casual setting', 'Google Maps address saved'],
    bestFor: 'Comparing several dinner choices'
  },
  {
    slug: 'hathim-indian-restaurant',
    name: 'Hathim Indian Restaurant',
    subcategory: 'Indian restaurant',
    cuisine: 'Indian food',
    cardNote: 'an Indian dinner',
    shortDescription: 'An Indian restaurant option for travellers wanting a change from the usual island restaurant menus.',
    whyWeRecommend: 'Keep it for a curry-focused meal or whenever the group wants a clearly different cuisine during a longer stay on Don Det.',
    highlights: ['Indian restaurant', 'Curry-focused meal', 'Dinner option', 'Vegetarian choices to confirm'],
    bestFor: 'An Indian meal on the island'
  },
  {
    slug: 'mama-tanon',
    name: 'Mama Tanon',
    subcategory: 'Small island restaurant',
    cuisine: 'Local and international food',
    cardNote: 'a smaller local stop',
    shortDescription: 'A smaller Don Det restaurant to keep for a casual meal away from the larger bar-style addresses.',
    whyWeRecommend: 'Save it when you prefer a more compact restaurant stop and want to compare current daily dishes directly.',
    highlights: ['Small restaurant', 'Casual meal', 'Lunch or dinner', 'Island address'],
    bestFor: 'A simple, quieter meal'
  },
  {
    slug: 'ois-place-don-det',
    name: "Oi 's Place",
    subcategory: 'Restaurant & bar',
    cuisine: 'Casual food and drinks',
    cardNote: 'food with an island view',
    shortDescription: 'A casual restaurant-and-bar address to keep for a meal, drinks and time to slow down on Don Det.',
    whyWeRecommend: 'Save it as another flexible evening option when the setting and relaxed pace matter as much as choosing a specific cuisine.',
    highlights: ['Restaurant and bar', 'Casual meal', 'Drinks', 'Relaxed atmosphere'],
    bestFor: 'A flexible meal and drinks'
  },
  {
    slug: 'banana-restaurant-bar',
    name: 'Banana restaurant & Bar',
    subcategory: 'Restaurant & bar',
    cuisine: 'Casual island food',
    cardNote: 'a laid-back dinner',
    shortDescription: 'A laid-back restaurant and bar for casual food, drinks and an easy Don Det evening.',
    whyWeRecommend: 'Keep it as a simple group-friendly option when nobody wants a formal meal or a complicated plan.',
    highlights: ['Restaurant and bar', 'Casual dinner', 'Group-friendly', 'Drinks'],
    bestFor: 'A relaxed meal with friends'
  },
  {
    slug: 'wrap-and-roll-don-det',
    name: 'Wrap and Roll',
    subcategory: 'Casual food stop',
    cuisine: 'Wraps and quick meals',
    cardNote: 'a quick food break',
    shortDescription: 'A casual food stop to keep for a quicker meal between island activities or before continuing the road south.',
    whyWeRecommend: 'Save it for days when a simple, quick meal is more useful than a long restaurant stop.',
    highlights: ['Quick meal', 'Casual food', 'Lunch stop', 'Easy takeaway option to confirm'],
    bestFor: 'A quick and uncomplicated meal'
  },
  {
    slug: 'mama-piang-guesthouse-restaurant',
    name: 'Mama Piang Guesthouse & Restaurant',
    subcategory: 'Guesthouse restaurant',
    cuisine: 'Local and Asian food',
    cardNote: 'a guesthouse kitchen',
    shortDescription: 'A guesthouse restaurant to keep for a home-style meal and a quieter alternative to the island bars.',
    whyWeRecommend: 'Save it when you want a guesthouse-style restaurant atmosphere and a meal that feels separate from the busier nightlife addresses.',
    highlights: ['Guesthouse restaurant', 'Home-style meal', 'Lunch or dinner', 'Quieter setting'],
    bestFor: 'A calmer guesthouse-style meal'
  }
];

const islandImages = [
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Don-det-laos.JPG?width=1200',
    alt: 'Calm Mekong scenery near Don Det, used as island context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Storm_in_Don_Det_tree_and_river_Laos.jpg?width=1200',
    alt: 'Evening light over the Mekong at Don Det, used as island context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sky_boat_water_don_det_4000_islands.jpg?width=1200',
    alt: 'A small boat on the Mekong near Don Det, used as island context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dwellings_on_the_Mekong_bank_of_Don_Det_at_sunrise_seen_from_the_bridge_to_Don_Khon_Laos.jpg?width=1200',
    alt: 'Sunrise over the Don Det riverbank, used as island context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Photo_laos_sky_river_tree_don_det_storm.jpg?width=1200',
    alt: 'Clouds and river scenery at Don Det, used as island context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Si-phan-don-4000-islands-laos.jpg?width=1200',
    alt: 'Riverside scenery in Si Phan Don, used as island context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Don-det-si-phan-don.JPG?width=1200',
    alt: 'A riverside view from Don Det, used as island context imagery'
  }
];

export const donDetRestaurants: Place[] = restaurantSeeds.map((restaurant, index) => {
  const image = islandImages[index % islandImages.length];

  return {
    ...restaurant,
    category: 'restaurants',
    city: 'Don Det',
    country: 'Laos',
    image: image.src,
    imageAlt: image.alt,
    description: restaurant.shortDescription,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurant.name} Don Det Laos`)}`,
    status: 'needs-review',
    lastChecked: 'August 2026',
    hours: 'Confirm current opening hours on Google Maps',
    price: 'Prices vary by order',
    address: 'Don Det, Khong District, Champasak Province, Laos',
    imageIsGeneric: true
  };
});
