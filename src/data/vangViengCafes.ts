import type { Place } from './atlas';

type CafeSeed = {
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

// Tripadvisor is used only to identify establishment names for the Vang Vieng
// café shortlist. No Tripadvisor ratings, reviews, links or photos are stored.
const cafeSeeds: CafeSeed[] = [
  {
    slug: 'naked-espresso-vang-vieng',
    name: 'Naked Espresso Vang Vieng',
    subcategory: 'Specialty coffee shop',
    cuisine: 'Coffee and light café food',
    cardNote: 'start with a proper coffee',
    shortDescription: 'A coffee-focused address to keep for espresso drinks and a calm break in central Vang Vieng.',
    whyWeRecommend: 'Save it as a first café option when coffee quality matters more than choosing a full restaurant menu. Confirm the current opening hours before making a special trip.',
    highlights: ['Coffee-focused café', 'Espresso drinks', 'Central stop', 'Google Maps address saved'],
    bestFor: 'A dedicated coffee break in town'
  },
  {
    slug: 'vela-cafe-and-restaurant',
    name: 'Vela cafe and restaurant',
    subcategory: 'Café & restaurant',
    cuisine: 'Coffee, breakfast and Asian food',
    cardNote: 'coffee with a flexible meal',
    shortDescription: 'A café-and-restaurant option that works for coffee, breakfast, lunch or a longer daytime pause.',
    whyWeRecommend: 'Keep it in both the café and restaurant notebook when the group wants drinks and food without choosing two separate addresses.',
    highlights: ['Café and restaurant', 'Breakfast or lunch', 'Coffee and food', 'Relaxed daytime stop'],
    bestFor: 'Coffee combined with breakfast or lunch'
  },
  {
    slug: 'kiwi-kitchen-laos-cafe',
    name: 'Kiwi Kitchen Laos',
    subcategory: 'Café & casual kitchen',
    cuisine: 'Coffee, breakfast and European-style food',
    cardNote: 'a familiar breakfast stop',
    shortDescription: 'A daytime café-kitchen suited to breakfast, coffee and a familiar meal between outdoor activities.',
    whyWeRecommend: 'Save it when you need a comfortable breakfast-and-coffee option before leaving town for lagoons, caves or viewpoints.',
    highlights: ['Breakfast café', 'Coffee', 'European-style food', 'Daytime address'],
    bestFor: 'Breakfast and coffee before an excursion'
  },
  {
    slug: 'parisien-cafe-vang-vieng',
    name: 'Parisien Cafe',
    subcategory: 'Modern café',
    cuisine: 'Coffee, cold drinks and café snacks',
    cardNote: 'an air-conditioned town pause',
    shortDescription: 'A modern café address in Vang Vieng for coffee, cold drinks and time out of the midday heat.',
    whyWeRecommend: 'Keep it as a practical central pause when shade, seating and an easy meeting point matter as much as the drink itself.',
    highlights: ['Modern café', 'Air-conditioned seating', 'Coffee and cold drinks', 'Central meeting point'],
    bestFor: 'A comfortable break during the hottest hours'
  },
  {
    slug: 'luang-prabang-bakery-restaurant-vang-vieng',
    name: 'Luang Prabang Bakery & Restaurant',
    subcategory: 'Bakery & café',
    cuisine: 'Coffee, pastries and casual meals',
    cardNote: 'pastries and a quick café stop',
    shortDescription: 'A bakery-café option for pastries, coffee and a straightforward snack or meal in town.',
    whyWeRecommend: 'Save it when the priority is a bakery-style stop with seating and a broad enough menu for travellers who want different things.',
    highlights: ['Bakery and café', 'Pastries', 'Coffee', 'Quick meal option'],
    bestFor: 'A pastry, drink or simple daytime meal'
  },
  {
    slug: 'organic-mulberry-farm-cafe',
    name: 'Organic Mulberry Farm & Café',
    subcategory: 'Farm café',
    cuisine: 'Mulberry drinks, tea and farm food',
    cardNote: 'leave town for a farm pause',
    shortDescription: 'A countryside farm-and-café stop associated with mulberry products and a quieter setting beyond central Vang Vieng.',
    whyWeRecommend: 'Keep it for a café visit that becomes part of a countryside route rather than a quick coffee in town. Check transport and current opening before leaving.',
    highlights: ['Farm café', 'Mulberry products', 'Countryside setting', 'Transport useful'],
    bestFor: 'A slower café stop outside the town centre'
  },
  {
    slug: 'cafe-de-vang-vieng',
    name: 'Café de Vang Vieng',
    subcategory: 'Central café',
    cuisine: 'Coffee, drinks and casual food',
    cardNote: 'an easy town-centre stop',
    shortDescription: 'A central café-and-dining address to keep for coffee, refreshments and a relaxed pause close to the main town area.',
    whyWeRecommend: 'Save it as an easy meeting point when convenience matters and the day does not need a destination café outside town.',
    highlights: ['Central café', 'Coffee and drinks', 'Casual food', 'Easy meeting point'],
    bestFor: 'A convenient break in central Vang Vieng'
  },
  {
    slug: 'coffee-inn-vang-vieng',
    name: 'Coffee Inn',
    subcategory: 'Coffee shop',
    cuisine: 'Coffee and light snacks',
    cardNote: 'a straightforward coffee stop',
    shortDescription: 'A simple coffee-shop address for a drink, a light snack and a short pause during a day in town.',
    whyWeRecommend: 'Keep it as a practical alternative when you want coffee without planning a full breakfast or restaurant stop.',
    highlights: ['Coffee shop', 'Light snacks', 'Short daytime stop', 'Google Maps address saved'],
    bestFor: 'A quick coffee while moving around town'
  },
  {
    slug: 'cafe-eh-eh-vang-vieng',
    name: 'Cafe Eh Eh',
    subcategory: 'Small local café',
    cuisine: 'Coffee, drinks and light food',
    cardNote: 'a smaller café pause',
    shortDescription: 'A smaller Vang Vieng café to keep for coffee, drinks and a quieter daytime break.',
    whyWeRecommend: 'Save it as another compact option when you prefer a simple café atmosphere over a larger restaurant-style venue.',
    highlights: ['Small café', 'Coffee and drinks', 'Light food', 'Quieter stop'],
    bestFor: 'A calm and uncomplicated café break'
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

export const vangViengCafes: Place[] = cafeSeeds.map((cafe, index) => {
  const image = vangViengImages[index % vangViengImages.length];

  return {
    ...cafe,
    category: 'cafes',
    city: 'Vang Vieng',
    country: 'Laos',
    image: image.src,
    imageAlt: image.alt,
    description: cafe.shortDescription,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${cafe.name} Vang Vieng Laos`)}`,
    status: 'needs-review',
    lastChecked: 'August 2026',
    hours: 'Confirm current opening hours on Google Maps',
    price: 'Prices vary by order',
    address: 'Vang Vieng, Vientiane Province, Laos',
    imageIsGeneric: true
  };
});
