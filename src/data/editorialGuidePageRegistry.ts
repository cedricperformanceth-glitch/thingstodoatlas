import type { EditorialGuideData } from './editorialGuides';
import { laosEditorialGuide } from './editorialGuides';
import { pakseEditorialGuide } from './pakseEditorialGuide';
import { tadLoEditorialGuide } from './tadLoEditorialGuide';
import { thakhekEditorialGuide } from './thakhekEditorialGuide';
import { vangViengEditorialGuide } from './vangViengEditorialGuide';
import { vientianeEditorialGuide } from './vientianeEditorialGuide';
import { donDetEditorialGuide } from './donDetEditorialGuide';

export interface EditorialGuidePageMeta {
  slug: string;
  guide: EditorialGuideData;
  variant: 'country' | 'city';
  route: string;
  sourceRoute: string;
  backLabel: string;
  heroSrc: string;
  heroAlt: string;
  contextLine: string;
  focusLabel: string;
  regionLabel: string;
}

export const laosCountryEditorialPage: EditorialGuidePageMeta = {
  slug: 'laos',
  guide: laosEditorialGuide,
  variant: 'country',
  route: '/laos/field-guide',
  sourceRoute: '/laos',
  backLabel: 'Back to the Laos map',
  heroSrc: '/images/hand-drawn/laos-map.webp',
  heroAlt: 'Hand-drawn map of Laos used throughout the Things To Do Atlas country chapter',
  contextLine: 'Routes · transport · everyday travel',
  focusLabel: 'Building a route that fits Laos',
  regionLabel: 'North · Central · South'
};

export const laosCityEditorialPages: EditorialGuidePageMeta[] = [
  {
    slug: 'pakse',
    guide: pakseEditorialGuide,
    variant: 'city',
    route: '/laos/pakse/field-guide',
    sourceRoute: '/laos/pakse',
    backLabel: 'Back to Pakse',
    heroSrc: '/images/laos/pakse.webp',
    heroAlt: 'Pakse in southern Laos beside the Mekong',
    contextLine: 'Mekong · Bolaven gateway · Southern base',
    focusLabel: 'Base, transport & road trips',
    regionLabel: 'Champasak · Southern Laos'
  },
  {
    slug: 'tad-lo',
    guide: tadLoEditorialGuide,
    variant: 'city',
    route: '/laos/tad-lo/field-guide',
    sourceRoute: '/laos/tad-lo',
    backLabel: 'Back to Tad Lo',
    heroSrc: '/images/laos/tad-lo.webp',
    heroAlt: 'Tad Lo in southern Laos on the Bolaven Plateau',
    contextLine: 'Waterfalls · village life · Bolaven Plateau',
    focusLabel: 'Slow stays & local routes',
    regionLabel: 'Salavan Province'
  },
  {
    slug: 'thakhek',
    guide: thakhekEditorialGuide,
    variant: 'city',
    route: '/laos/thakhek/field-guide',
    sourceRoute: '/laos/thakhek',
    backLabel: 'Back to Thakhek',
    heroSrc: '/images/places/thakhek-01.webp',
    heroAlt: 'Historic streets of Thakhek in central Laos',
    contextLine: 'Mekong · limestone · Thakhek Loop',
    focusLabel: 'Caves, loop & road planning',
    regionLabel: 'Khammouane Province'
  },
  {
    slug: 'vang-vieng',
    guide: vangViengEditorialGuide,
    variant: 'city',
    route: '/laos/vang-vieng/field-guide',
    sourceRoute: '/laos/vang-vieng',
    backLabel: 'Back to Vang Vieng',
    heroSrc: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nam_song_river_vang_vieng.jpg?width=1600',
    heroAlt: 'Nam Song River and limestone mountains at Vang Vieng, Laos',
    contextLine: 'Nam Song · karst · caves & viewpoints',
    focusLabel: 'River, limestone & day trips',
    regionLabel: 'Vientiane Province'
  },
  {
    slug: 'vientiane',
    guide: vientianeEditorialGuide,
    variant: 'city',
    route: '/laos/vientiane/field-guide',
    sourceRoute: '/laos/vientiane',
    backLabel: 'Back to Vientiane',
    heroSrc: '/images/laos/vientiane.webp',
    heroAlt: 'Vientiane, the capital of Laos on the Mekong',
    contextLine: 'Capital · Mekong · practical arrival',
    focusLabel: 'Arrival, neighbourhoods & city rhythm',
    regionLabel: 'Vientiane Capital'
  },
  {
    slug: 'don-det',
    guide: donDetEditorialGuide,
    variant: 'city',
    route: '/laos/don-det/field-guide',
    sourceRoute: '/laos/don-det',
    backLabel: 'Back to Don Det',
    heroSrc: '/images/laos/don-det.webp',
    heroAlt: 'Don Det in the Si Phan Don islands of southern Laos',
    contextLine: 'Si Phan Don · Mekong · island rhythm',
    focusLabel: 'Island stay & onward travel',
    regionLabel: 'Champasak · Southern Laos'
  }
];

export const laosCityEditorialPageBySlug = Object.fromEntries(
  laosCityEditorialPages.map((entry) => [entry.slug, entry])
) as Record<string, EditorialGuidePageMeta>;
