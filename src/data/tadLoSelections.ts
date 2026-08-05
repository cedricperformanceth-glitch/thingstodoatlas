import { tadLoExperiences, type TadLoPartnerPlace } from './tadLoPlaces';
import { tadLoTreasureHunt } from './tadLoTreasureHunt';

export type TadLoSelectionPlace = TadLoPartnerPlace & {
  cardStyle: 'selection';
  selectionLabel: string;
  officialUrl: string;
  sourceUrl?: string;
  galleryImages?: Array<{
    src: string;
    alt: string;
  }>;
};

const requireTadLoExperience = (slug: string): TadLoPartnerPlace => {
  const place = tadLoExperiences.find((item) => item.slug === slug);
  if (!place) throw new Error(`Missing Tad Lo experience: ${slug}`);
  return place;
};

const fandeeGallery = [
  {
    src: '/images/tad-lo/iFandeeisland 01.webp',
    alt: 'Fandee Island nature stay in Tad Lo, southern Laos'
  },
  {
    src: '/images/tad-lo/Fandee Island 02.webp',
    alt: 'Fandee Island accommodation and garden setting'
  },
  {
    src: '/images/tad-lo/Fandee Island03.webp',
    alt: 'Fandee Island lakeside atmosphere in Tad Lo'
  }
];

export const fandeeIslandSelection: TadLoSelectionPlace = {
  slug: 'fandee-island',
  name: 'Fandee Island',
  category: 'accommodation',
  subcategory: 'Eco stay · Tree houses · Lake houses',
  cuisine: 'Lao, Asian and Western food',
  city: 'Tad Lo',
  country: 'Laos',
  image: fandeeGallery[0].src,
  imageAlt: fandeeGallery[0].alt,
  galleryImages: fandeeGallery,
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

export const tadLoTreasureHuntSelection: TadLoSelectionPlace = {
  ...tadLoTreasureHunt,
  cardStyle: 'selection',
  selectionLabel: 'My selection',
  officialUrl: tadLoTreasureHunt.partnerUrl,
  sourceUrl: tadLoTreasureHunt.partnerUrl,
  whyWeRecommend: 'The hunt turns the whole village into the experience. It encourages travellers to walk slowly, notice details and discover thirteen local places and stories without needing a guide, vehicle or app download.'
};

const vatPaaForest = requireTadLoExperience('vat-paa-ancient-forest');

export const vatPaaForestSelection: TadLoSelectionPlace = {
  ...vatPaaForest,
  name: 'Vat Paa Forest',
  subcategory: 'Ancient forest · Buddha · Cave',
  cardStyle: 'selection',
  selectionLabel: 'My selection',
  officialUrl: vatPaaForest.partnerUrl,
  sourceUrl: vatPaaForest.partnerUrl,
  whyWeRecommend: 'Vat Paa is in My Selection because it offers a quiet contrast to the waterfalls and workshops. The old trees, Buddha and forest atmosphere reward a slow surface visit without turning the unassessed cave into a casual attraction.'
};