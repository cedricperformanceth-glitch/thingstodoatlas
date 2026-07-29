import type { TadLoPartnerPlace } from './tadLoPlaces';

export type TadLoSelectionPlace = TadLoPartnerPlace & {
  cardStyle: 'selection';
  selectionLabel: string;
  officialUrl: string;
  sourceUrl?: string;
};

export const fandeeIslandSelection: TadLoSelectionPlace = {
  slug: 'fandee-island',
  name: 'Fandee Island',
  category: 'accommodation',
  subcategory: 'Eco stay · Tree houses · Lake houses',
  cuisine: 'Lao, Asian and Western food',
  city: 'Tad Lo',
  country: 'Laos',
  image: 'https://www.fandee-island.com/media/site/0c335541-c2a9-43c2-a4b8-239c80cb0b89-214958230_338768834594602_4219948812012573377_n.jpg',
  imageAlt: 'Fandee Island nature accommodation beside the water in Tad Lo',
  cardNote: 'an island stay that feels apart from the road',
  shortDescription: 'Tree houses, lake houses and nature stays gathered around a quiet island in the heart of Tad Lo.',
  description: 'Fandee Island is an eco-minded resort inside Tad Lo village, with unusual accommodation ranging from tree houses and lake houses to the Stars Dome, Mountain House and Hilltop House. A lakeside restaurant and nearby activities make it possible to stay, eat and slow down in one place.',
  whyWeRecommend: 'This is an Atlas selection for travellers who want the accommodation itself to become part of the Tad Lo experience. The island setting, varied rooms and walkable access to the village make it more than a practical overnight stop.',
  highlights: ['Tree houses and lake houses', 'Stars Dome', 'Lakeside restaurant', 'Walkable Tad Lo location'],
  mapsUrl: 'https://maps.app.goo.gl/L6uvqFPbGw7W6wWt7',
  mapLabel: 'Open Fandee Island in Google Maps',
  partnerUrl: 'https://www.fandee-island.com/',
  partnerName: 'Fandee Island',
  officialUrl: 'https://www.fandee-island.com/',
  sourceUrl: 'https://visit-tadlo.com/en/stay-eat/fandee-island',
  cardStyle: 'selection',
  selectionLabel: 'My selection',
  status: 'verified',
  lastChecked: 'Official website · July 2026',
  hours: 'Accommodation by booking · Restaurant 07:00–21:00',
  price: 'Stays from 350,000 Kip per night · confirm current availability',
  address: 'Tad Lo Village · Ban Khuaset · Salavan Province',
  bestFor: 'An unusual nature stay close to Tad Lo village'
};
