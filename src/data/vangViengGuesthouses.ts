import type { Place } from './atlas';

type GuesthouseSeed = {
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

// Booking.com is used only to identify accommodation names for this Vang Vieng
// shortlist. No Booking.com ratings, reviews, links, prices or photos are stored.
const guesthouseSeeds: GuesthouseSeed[] = [
  {
    slug: 'local-guesthouse-vang-vieng',
    name: 'Local Guesthouse',
    subcategory: 'Central guesthouse',
    cuisine: 'Guesthouse accommodation',
    cardNote: 'a central and practical base',
    shortDescription: 'A central Vang Vieng guesthouse to keep for a straightforward stay within easy reach of the town centre.',
    whyWeRecommend: 'Save it as a practical base when walkability and simple access to restaurants, cafés and transport matter. Confirm the current room types and facilities directly before booking.',
    highlights: ['Central location', 'Private rooms', 'Town access', 'Google Maps address saved'],
    bestFor: 'A practical stay close to central Vang Vieng'
  },
  {
    slug: 'vang-vieng-guesthouse',
    name: 'Vang vieng guesthouse',
    subcategory: 'Guesthouse with pool',
    cuisine: 'Guesthouse accommodation',
    cardNote: 'a simple stay with a pool',
    shortDescription: 'A guesthouse option in central Vang Vieng for travellers wanting private rooms and an easy place to cool down between excursions.',
    whyWeRecommend: 'Keep it for a stay where a pool and central access are useful, while checking the exact room type and current atmosphere before booking.',
    highlights: ['Swimming pool', 'Private rooms', 'Central stay', 'Breakfast to confirm'],
    bestFor: 'A central guesthouse with a pool'
  },
  {
    slug: 'vang-vieng-global-hostel',
    name: 'Vang Vieng Global Hostel',
    subcategory: 'Hostel & private rooms',
    cuisine: 'Hostel accommodation',
    cardNote: 'a social central stay',
    shortDescription: 'A social accommodation option with hostel energy and private-room possibilities in central Vang Vieng.',
    whyWeRecommend: 'Save it when meeting other travellers and having shared facilities matters as much as the room itself. Confirm whether the chosen room is private or shared.',
    highlights: ['Social atmosphere', 'Hostel facilities', 'Private rooms to confirm', 'Central location'],
    bestFor: 'A more social stay in Vang Vieng'
  },
  {
    slug: 'vang-vieng-victory-guesthouse',
    name: 'Vang Vieng Victory Guesthouse',
    subcategory: 'Town guesthouse',
    cuisine: 'Guesthouse accommodation',
    cardNote: 'a comfortable town base',
    shortDescription: 'A Vang Vieng guesthouse to keep for a comfortable private-room base close to the main town area.',
    whyWeRecommend: 'Use it as another central option to compare on room size, balcony, view and current price before confirming a stay.',
    highlights: ['Private rooms', 'Town location', 'Balcony rooms to confirm', 'Mountain views to confirm'],
    bestFor: 'A private room near the town centre'
  },
  {
    slug: 'vang-vieng-sck-guesthouse',
    name: 'VANG VIENG SCK guesthouse',
    subcategory: 'Guesthouse outside the busiest centre',
    cuisine: 'Guesthouse accommodation',
    cardNote: 'a quieter room away from the strip',
    shortDescription: 'A smaller guesthouse option to keep when a quieter location is more important than staying directly on the busiest streets.',
    whyWeRecommend: 'Save it as a quieter alternative and check the current distance to town, transport options and room facilities before booking.',
    highlights: ['Smaller guesthouse', 'Quieter setting', 'Private rooms', 'Transport to confirm'],
    bestFor: 'A quieter stay outside the busiest streets'
  },
  {
    slug: 'dd-guesthouse-vang-vieng',
    name: 'DD guesthouse',
    subcategory: 'Countryside guesthouse',
    cuisine: 'Guesthouse accommodation',
    cardNote: 'mountain views beyond town',
    shortDescription: 'A guesthouse set farther from central Vang Vieng, suited to travellers who value countryside views and a calmer atmosphere.',
    whyWeRecommend: 'Keep it for a stay that feels closer to the landscape, but confirm the distance, transport and exact location before reserving.',
    highlights: ['Countryside setting', 'Mountain views', 'Private rooms', 'Transport useful'],
    bestFor: 'A quieter stay closer to the countryside'
  },
  {
    slug: 'vang-vieng-nature-guest-house',
    name: 'Vang Vieng Nature Guest House',
    subcategory: 'Nature-oriented guesthouse',
    cuisine: 'Guesthouse accommodation',
    cardNote: 'a stay facing the landscape',
    shortDescription: 'A nature-oriented guesthouse option with a setting that looks toward the fields and limestone landscape around Vang Vieng.',
    whyWeRecommend: 'Save it when views and a calmer edge-of-town location matter, while confirming current access and transport needs.',
    highlights: ['Landscape setting', 'Mountain views', 'Family rooms to confirm', 'Edge-of-town stay'],
    bestFor: 'A calmer stay with countryside views'
  },
  {
    slug: 'ban-laos-guesthouse',
    name: 'Ban Laos Guesthouse',
    subcategory: 'Garden guesthouse',
    cuisine: 'Guesthouse accommodation',
    cardNote: 'a garden-style stay',
    shortDescription: 'A garden-style guesthouse in Vang Vieng offering another simple private-room option away from larger hotels.',
    whyWeRecommend: 'Keep it as a traditional guesthouse alternative and compare the available room or bungalow types directly before booking.',
    highlights: ['Garden setting', 'Private rooms', 'Bungalows to confirm', 'Pool to confirm'],
    bestFor: 'A simple guesthouse or bungalow-style stay'
  },
  {
    slug: 'inthavong-hotel-guest-house',
    name: 'Inthavong Hotel/Guest House',
    subcategory: 'Hotel & guesthouse',
    cuisine: 'Guesthouse accommodation',
    cardNote: 'a straightforward room near Route 13',
    shortDescription: 'A straightforward hotel-and-guesthouse option to keep when road access and a simple private room are the priority.',
    whyWeRecommend: 'Save it as a practical comparison option, especially when arriving by road. Confirm the current room condition, exact location and transport links directly.',
    highlights: ['Private rooms', 'Road access', 'Simple accommodation', 'Location to confirm'],
    bestFor: 'A practical stop with easy road access'
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

export const vangViengGuesthouses: Place[] = guesthouseSeeds.map((guesthouse, index) => {
  const image = vangViengImages[index % vangViengImages.length];

  return {
    ...guesthouse,
    category: 'accommodation',
    city: 'Vang Vieng',
    country: 'Laos',
    image: image.src,
    imageAlt: image.alt,
    description: guesthouse.shortDescription,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${guesthouse.name} Vang Vieng Laos`)}`,
    status: 'needs-review',
    lastChecked: 'August 2026',
    hours: 'Confirm current check-in details directly',
    price: 'Rates vary by date and room type',
    address: 'Vang Vieng, Vientiane Province, Laos',
    imageIsGeneric: true
  };
});
