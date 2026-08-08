import type { EditorialGuideData } from './editorialGuides';
import { laosEditorialGuide } from './editorialGuides';
import { pakseEditorialGuide } from './pakseEditorialGuide';
import { tadLoEditorialGuide } from './tadLoEditorialGuide';
import { thakhekEditorialGuide } from './thakhekEditorialGuide';
import { vangViengEditorialGuide } from './vangViengEditorialGuide';
import { vientianeEditorialGuide } from './vientianeEditorialGuide';
import { donDetEditorialGuide } from './donDetEditorialGuide';

export interface EditorialGuidePageImage {
  src: string;
  alt: string;
  caption: string;
  sourceHref: string;
  license: string;
}

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
  galleryImages?: EditorialGuidePageImage[];
}

const commonsImage = (filename: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(filename)}?width=1600`;
const commonsSource = (filename: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;

export const laosCountryEditorialPage: EditorialGuidePageMeta = {
  slug: 'laos',
  guide: laosEditorialGuide,
  variant: 'country',
  route: '/laos/field-guide',
  sourceRoute: '/laos',
  backLabel: 'Back to the Laos map',
  heroSrc: '/images/hand-drawn/laos-map.webp',
  heroAlt: 'Hand-drawn map of Laos used throughout the Things To Do Atlas country chapter',
  contextLine: 'Regions · heritage · roads & river',
  focusLabel: 'Understanding the country before fixing the route',
  regionLabel: 'North · Central · South',
  galleryImages: [
    {
      src: commonsImage('Vang_vieng.jpeg'),
      alt: 'Limestone mountains and countryside around Vang Vieng in Laos',
      caption: 'North-central Laos · limestone country around Vang Vieng',
      sourceHref: commonsSource('Vang_vieng.jpeg'),
      license: 'Public domain'
    },
    {
      src: commonsImage('Don-det-laos.JPG'),
      alt: 'Mekong river landscape around Don Det in southern Laos',
      caption: 'Southern Laos · the Mekong opens into Si Phan Don',
      sourceHref: commonsSource('Don-det-laos.JPG'),
      license: 'CC0'
    }
  ]
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
    contextLine: 'Mekong confluence · Bolaven · Champasak',
    focusLabel: 'Southern base, heritage & road trips',
    regionLabel: 'Champasak · Southern Laos',
    galleryImages: [
      {
        src: commonsImage('Champasak_Palace.jpg'),
        alt: 'Champasak Palace building in Pakse, Laos',
        caption: 'Pakse · the unfinished royal palace became part of the modern city story',
        sourceHref: commonsSource('Champasak_Palace.jpg'),
        license: 'Public domain'
      },
      {
        src: commonsImage('Weaving.jpg'),
        alt: 'Woman weaving in a village outside Pakse in southern Laos',
        caption: 'Outside Pakse · a working landscape beyond the city roads',
        sourceHref: commonsSource('Weaving.jpg'),
        license: 'Public domain'
      }
    ]
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
    focusLabel: 'Village rhythm, water & local routes',
    regionLabel: 'Salavan · Eastern Bolaven',
    galleryImages: [
      {
        src: commonsImage('Tad_Fane_Waterfall.JPG'),
        alt: 'Tad Fane waterfall in the wider Bolaven Plateau landscape of southern Laos',
        caption: 'The wider Bolaven · water, altitude and forest shape the road around Tad Lo',
        sourceHref: commonsSource('Tad_Fane_Waterfall.JPG'),
        license: 'Public domain'
      }
    ]
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
    contextLine: 'Mekong · limestone · Hin Nam No',
    focusLabel: 'Old town, loop & cave country',
    regionLabel: 'Khammouane Province',
    galleryImages: [
      {
        src: commonsImage('Mekong_Thakhek.jpg'),
        alt: 'Street along the Mekong river in Thakhek, Laos',
        caption: 'Thakhek · a Mekong town before the road turns into the loop',
        sourceHref: commonsSource('Mekong_Thakhek.jpg'),
        license: 'Public domain'
      },
      {
        src: commonsImage('Lao_house.jpg'),
        alt: 'Traditional Lao-style house on stilts outside Thakhek',
        caption: 'Beyond town · village architecture on the Khammouane road',
        sourceHref: commonsSource('Lao_house.jpg'),
        license: 'Public domain'
      }
    ]
  },
  {
    slug: 'vang-vieng',
    guide: vangViengEditorialGuide,
    variant: 'city',
    route: '/laos/vang-vieng/field-guide',
    sourceRoute: '/laos/vang-vieng',
    backLabel: 'Back to Vang Vieng',
    heroSrc: commonsImage('Nam_song_river_vang_vieng.jpg'),
    heroAlt: 'Nam Song River and limestone mountains at Vang Vieng, Laos',
    contextLine: 'Nam Song · karst · outdoor valley',
    focusLabel: 'River, limestone & countryside days',
    regionLabel: 'Vientiane Province',
    galleryImages: [
      {
        src: commonsImage('Vang_vieng.jpeg'),
        alt: 'Karst mountains and open landscape in Vang Vieng, Laos',
        caption: 'Vang Vieng · the valley has become larger than the old party-town story',
        sourceHref: commonsSource('Vang_vieng.jpeg'),
        license: 'Public domain'
      },
      {
        src: commonsImage('Narrow_Wooden_Bridge_-_Vang_Vieng,_Laos.jpg'),
        alt: 'Narrow wooden bridge in the countryside around Vang Vieng, Laos',
        caption: 'Across the river · small roads and bridges lead into the karst countryside',
        sourceHref: commonsSource('Narrow_Wooden_Bridge_-_Vang_Vieng,_Laos.jpg'),
        license: 'CC0'
      }
    ]
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
    contextLine: 'Mekong · Lan Xang · national capital',
    focusLabel: 'History, monuments & practical arrival',
    regionLabel: 'Vientiane Capital',
    galleryImages: [
      {
        src: commonsImage('Ong_Tu_Temple_1.jpg'),
        alt: 'Wat Ong Teu temple in central Vientiane, Laos',
        caption: 'Central Vientiane · temple courtyards remain part of everyday city life',
        sourceHref: commonsSource('Ong_Tu_Temple_1.jpg'),
        license: 'CC0'
      },
      {
        src: commonsImage('That_Luang_West_Temple.jpg'),
        alt: 'Temple beside the That Luang complex in Vientiane, Laos',
        caption: 'That Luang · national symbolism reaches beyond the central stupa',
        sourceHref: commonsSource('That_Luang_West_Temple.jpg'),
        license: 'Public domain'
      }
    ]
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
    contextLine: 'Si Phan Don · Mekong · old railway',
    focusLabel: 'Island rhythm, river & Don Khon',
    regionLabel: 'Champasak · Southern Laos',
    galleryImages: [
      {
        src: commonsImage('Don-det-laos.JPG'),
        alt: 'Mekong river landscape near Don Det, Laos',
        caption: 'Don Det · boats and river channels are part of the everyday map',
        sourceHref: commonsSource('Don-det-laos.JPG'),
        license: 'CC0'
      },
      {
        src: commonsImage('Laos_ricefields.JPG'),
        alt: 'Rice fields on Don Det in southern Laos',
        caption: 'Inside the island · rice fields replace the idea of Don Det as only a riverfront strip',
        sourceHref: commonsSource('Laos_ricefields.JPG'),
        license: 'Public domain'
      }
    ]
  }
];

export const laosCityEditorialPageBySlug = Object.fromEntries(
  laosCityEditorialPages.map((entry) => [entry.slug, entry])
) as Record<string, EditorialGuidePageMeta>;
