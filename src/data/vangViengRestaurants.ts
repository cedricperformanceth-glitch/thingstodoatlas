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

// Names selected on 6 August 2026 from Tripadvisor's current Vang Vieng
// restaurant ranking. Tripadvisor is used only to identify establishment
// names. No Tripadvisor ratings, reviews, links or photos are stored here.
const restaurantSeeds: RestaurantSeed[] = [
  {
    slug: 'happy-mango-thai-restaurants',
    name: 'Happy Mango Thai Restaurants',
    subcategory: 'Thai restaurant',
    cuisine: 'Thai and casual Asian food',
    cardNote: 'a central Thai meal',
    shortDescription: 'A central Vang Vieng restaurant to keep for Thai dishes and an uncomplicated lunch or dinner.',
    whyWeRecommend: 'Save it as a practical first choice when the group wants familiar Thai flavours and a straightforward meal in town. Confirm the current menu and opening hours directly.',
    highlights: ['Thai restaurant', 'Lunch or dinner', 'Central option', 'Google Maps address saved'],
    bestFor: 'A relaxed Thai meal in central Vang Vieng'
  },
  {
    slug: 'restaurant-du-crabe-dor',
    name: 'Restaurant du Crabe d’Or',
    subcategory: 'Hotel restaurant',
    cuisine: 'Lao and international food',
    cardNote: 'a longer sit-down dinner',
    shortDescription: 'A polished sit-down restaurant option for travellers looking for a slower meal beyond the casual town-centre addresses.',
    whyWeRecommend: 'Keep it for an evening when setting, service and time at the table matter more than finding the quickest meal.',
    highlights: ['Sit-down restaurant', 'Lao and international menu', 'Dinner option', 'Hotel setting'],
    bestFor: 'A more considered dinner in Vang Vieng'
  },
  {
    slug: 'academy-training-hotel-restaurant',
    name: 'The Academy Training Hotel & Restaurant',
    subcategory: 'Training hotel restaurant',
    cuisine: 'Asian and international food',
    cardNote: 'eat at the training hotel',
    shortDescription: 'A hotel-and-restaurant address that combines a proper sit-down meal with the atmosphere of a hospitality training project.',
    whyWeRecommend: 'Save it as a distinctive restaurant choice when you want a calmer meal and an address with a different story from the main tourist strip.',
    highlights: ['Training hotel restaurant', 'Sit-down meal', 'Asian and international food', 'Calmer atmosphere'],
    bestFor: 'A quieter lunch or dinner away from the busiest streets'
  },
  {
    slug: 'garys-irish-bar',
    name: "Gary's Irish Bar",
    subcategory: 'Irish bar & restaurant',
    cuisine: 'Irish pub food and drinks',
    cardNote: 'pub food and an evening out',
    shortDescription: 'An established Irish bar and restaurant for pub-style food, drinks and a more social Vang Vieng evening.',
    whyWeRecommend: 'Keep it for groups, solo travellers or anyone wanting a familiar pub atmosphere with food and drinks in the same place.',
    highlights: ['Irish bar', 'Pub-style food', 'Drinks', 'Social evening'],
    bestFor: 'Dinner, drinks and a lively evening'
  },
  {
    slug: 'mittaphap-restaurant',
    name: 'Mittaphap Restaurant',
    subcategory: 'Local restaurant',
    cuisine: 'Lao and Asian food',
    cardNote: 'a local meal outside the main strip',
    shortDescription: 'A local-style restaurant to keep for a quieter meal and a break from the most tourist-oriented addresses in town.',
    whyWeRecommend: 'Save it when you want to compare a more local restaurant with the better-known central options. Check the location and current transport needs before leaving.',
    highlights: ['Local restaurant', 'Lao and Asian food', 'Quieter setting', 'Lunch or dinner'],
    bestFor: 'A local-style meal beyond the busiest centre'
  },
  {
    slug: 'green-restaurant-vang-vieng',
    name: 'Green Restaurant',
    subcategory: 'Casual restaurant',
    cuisine: 'Asian and Thai food',
    cardNote: 'an easy riverside-area meal',
    shortDescription: 'A casual restaurant option for an uncomplicated meal while moving between the town centre and the Nam Song area.',
    whyWeRecommend: 'Keep it as a flexible address when convenience, a broad menu and a relaxed meal matter more than a destination dinner.',
    highlights: ['Casual restaurant', 'Asian and Thai food', 'Lunch or dinner', 'Easy town stop'],
    bestFor: 'A simple meal during a day around Vang Vieng'
  },
  {
    slug: 'amd-restaurant-vang-vieng',
    name: 'A.M.D Restaurant',
    subcategory: 'Casual Asian restaurant',
    cuisine: 'Asian food',
    cardNote: 'a straightforward local dinner',
    shortDescription: 'A casual Asian restaurant to keep for a simple lunch or dinner without turning the meal into a major plan.',
    whyWeRecommend: 'Save it as a dependable-looking alternative when comparing several affordable restaurants around Vang Vieng.',
    highlights: ['Asian restaurant', 'Casual meal', 'Lunch or dinner', 'Google Maps address saved'],
    bestFor: 'An affordable and uncomplicated meal'
  },
  {
    slug: 'beats-bites-vangvieng',
    name: 'Beats & Bites Vangvieng',
    subcategory: 'Restaurant & evening venue',
    cuisine: 'European and grilled food',
    cardNote: 'dinner with an evening atmosphere',
    shortDescription: 'A restaurant-and-evening address to keep when the meal, music and atmosphere are meant to be part of the same plan.',
    whyWeRecommend: 'Choose it for a slower evening rather than a quick food stop, especially when the group wants a restaurant that continues naturally into drinks.',
    highlights: ['Dinner venue', 'European-style food', 'Evening atmosphere', 'Drinks'],
    bestFor: 'Dinner followed by a relaxed evening'
  },
  {
    slug: 'viman-vang-vieng-german-restaurant',
    name: 'Viman Vang Vieng - German Restaurant',
    subcategory: 'German restaurant',
    cuisine: 'German and European food',
    cardNote: 'a European comfort-food dinner',
    shortDescription: 'A long-running German restaurant option for travellers wanting a clear change from Lao and Asian menus.',
    whyWeRecommend: 'Keep it for a comfort-food evening during a longer stay or when the group wants a clearly European restaurant choice.',
    highlights: ['German restaurant', 'European food', 'Sit-down dinner', 'Longer-established address'],
    bestFor: 'A German or European-style dinner'
  },
  {
    slug: 'pizza-luka-vang-vieng',
    name: 'Pizza Luka',
    subcategory: 'Pizzeria',
    cuisine: 'Italian pizza',
    cardNote: 'a dedicated pizza night',
    shortDescription: 'A dedicated Vang Vieng pizzeria to keep for an easy pizza dinner or a familiar meal between outdoor days.',
    whyWeRecommend: 'Save it when the plan is specifically pizza rather than choosing from another broad international menu.',
    highlights: ['Pizzeria', 'Italian-style food', 'Dinner option', 'Group-friendly meal'],
    bestFor: 'A straightforward pizza evening'
  },
  {
    slug: 'kiwi-kitchen-laos',
    name: 'Kiwi Kitchen Laos',
    subcategory: 'European café & restaurant',
    cuisine: 'European and British-style food',
    cardNote: 'breakfast or a familiar daytime meal',
    shortDescription: 'A European-oriented kitchen to keep for breakfast, lunch or a familiar meal during a longer Vang Vieng stay.',
    whyWeRecommend: 'Save it as a useful daytime address when you want a break from local menus or need a comfortable breakfast-and-lunch option.',
    highlights: ['European kitchen', 'Breakfast or lunch', 'Casual restaurant', 'Daytime stop'],
    bestFor: 'Breakfast, lunch or familiar comfort food'
  },
  {
    slug: 'lao-valhalla-restaurant',
    name: 'Lao Valhalla Restaurant',
    subcategory: 'Guesthouse restaurant',
    cuisine: 'Lao and Asian food',
    cardNote: 'a quieter meal outside town',
    shortDescription: 'A guesthouse-style restaurant to keep for a slower meal in a quieter setting beyond the central restaurant streets.',
    whyWeRecommend: 'Save it when atmosphere and a calmer location matter, but check the distance and transport before making a special trip.',
    highlights: ['Guesthouse restaurant', 'Lao and Asian food', 'Quieter setting', 'Transport may be useful'],
    bestFor: 'A calm lunch or dinner outside the busy centre'
  },
  {
    slug: 'vela-cafe-and-restaurant',
    name: 'Vela cafe and restaurant',
    subcategory: 'Café & restaurant',
    cuisine: 'Asian and Thai food',
    cardNote: 'a flexible daytime stop',
    shortDescription: 'A café-and-restaurant option for breakfast, lunch, lighter dishes or a relaxed pause between activities.',
    whyWeRecommend: 'Keep it as a flexible address that works when the day needs coffee and food without committing to a formal dinner.',
    highlights: ['Café and restaurant', 'Asian and Thai food', 'Breakfast or lunch', 'Relaxed stop'],
    bestFor: 'A lighter meal or daytime café break'
  }
];

const vangViengImages = [
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nam_song_river_vang_vieng.jpg?width=1200',
    alt: 'The Nam Song River and limestone landscape at Vang Vieng, used as city context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nam_Song_River_Vang_Vieng_Laos.jpg?width=1200',
    alt: 'The Nam Song River with karst mountains at Vang Vieng, used as city context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Narrow_Wooden_Bridge_-_Vang_Vieng,_Laos.jpg?width=1200',
    alt: 'A narrow wooden bridge crossing the Nam Song in Vang Vieng, used as city context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/VientianeProvince_VangVieng1_tango7174.jpg?width=1200',
    alt: 'Karst mountains and the Nam Song at Vang Vieng, used as city context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/VangVieng.jpg?width=1200',
    alt: 'Limestone cliffs at Vang Vieng, used as city context imagery'
  }
];

export const vangViengRestaurants: Place[] = restaurantSeeds.map((restaurant, index) => {
  const image = vangViengImages[index % vangViengImages.length];

  return {
    ...restaurant,
    category: 'restaurants',
    city: 'Vang Vieng',
    country: 'Laos',
    image: image.src,
    imageAlt: image.alt,
    description: restaurant.shortDescription,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurant.name} Vang Vieng Laos`)}`,
    status: 'needs-review',
    lastChecked: 'August 2026',
    hours: 'Confirm current opening hours on Google Maps',
    price: 'Prices vary by order',
    address: 'Vang Vieng, Vientiane Province, Laos',
    imageIsGeneric: true
  };
});
