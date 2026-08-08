import { laosLandmarks, type CityLandmark, type CityLandmarkContext, type LaosLandmark } from './laosLandmarks';

const requireLandmark = (slug: string): LaosLandmark => {
  const landmark = laosLandmarks.find((item) => item.slug === slug);
  if (!landmark) throw new Error(`Missing Laos landmark: ${slug}`);
  return landmark;
};

const forThakhek = (slug: string, cityContext: CityLandmarkContext): CityLandmark => ({
  ...requireLandmark(slug),
  cityContext
});

export const thamNangAenLandmark: LaosLandmark = {
  slug: 'tham-nang-aen-cave',
  modalId: 'tham-nang-aen-modal',
  name: 'Tham Nang Aen Cave',
  country: 'Laos',
  fieldCardNumber: '10',
  region: 'Thakhek District · Khammouane',
  description: 'A large developed river cave about 18 km from Thakhek on Route 12, with cool air, chambers reaching roughly 30 metres high, illuminated limestone formations, built stairways and an optional deeper boat journey when conditions and local operation allow.',
  mapsUrl: 'https://maps.app.goo.gl/UbvyD3oxhyWVjLyC6',
  gallery: [
    {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/10%20Nang%20Aen%20cane%20-%20panoramio.jpg?width=1800',
      alt: 'Illuminated limestone formations and visitor walkways inside Tham Nang Aen Cave near Thakhek',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:10_Nang_Aen_cane_-_panoramio.jpg',
      author: 'Adriaan Castermans',
      license: 'CC BY-SA 3.0'
    },
    {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/03%20Thakhek%20route%2016%20to%20caves%20-%20panoramio.jpg?width=1800',
      alt: 'Karst road landscape east of Thakhek on the route toward the cave area, used as approach context for Tham Nang Aen',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:03_Thakhek_route_16_to_caves_-_panoramio.jpg',
      author: 'Adriaan Castermans',
      license: 'CC BY-SA 3.0'
    },
    {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/02%20Tham%20Pha%20Bahn%20Tham%20cave%20-%20panoramio.jpg?width=1600',
      alt: 'Limestone cave landscape in the Thakhek cave corridor, used as regional cave-country context for Tham Nang Aen',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:02_Tham_Pha_Bahn_Tham_cave_-_panoramio.jpg',
      author: 'Adriaan Castermans',
      license: 'CC BY-SA 3.0'
    }
  ],
  facts: [
    { label: 'Getting there', value: 'Tourism Laos places Tham Nang Aen about 18 km northeast of Thakhek on Route 12. Turn from the signed junction and continue roughly 700 m along the access road; after heavy rain, local water levels can affect the final approach.' },
    { label: 'Best time', value: 'The walking section is an all-year developed visit, but the optional boat section depends more on water and current operation. Weekdays and earlier hours are usually calmer than popular Lao and Thai weekend periods.' },
    { label: 'What to wear', value: 'Light clothing and footwear with grip. The cave has a strong naturally cool airflow, while steps and damp surfaces can still be slippery. Carry a torch or headlamp if you plan the deeper boat option.' },
    { label: 'Price', value: 'Prices are inconsistent across current references. Late-2025 visitor reports commonly mention about 50,000 kip for the walking visit and around 150,000 kip for the optional boat; other 2026 listings still show 30,000 kip. Confirm at the counter.' },
    { label: 'Duration', value: 'The main developed chamber can be seen in roughly 30–60 minutes at an easy pace. If the deeper boat route is operating, keep around two hours or more for the complete visit.' },
    { label: 'Difficulty', value: 'Easy to moderate. The main cave is developed with stairways, railings and lighting, but it includes many steps and is not a step-free attraction. The boat route adds wet surfaces, darker passages and more time underground.' }
  ]
};

export const thakhekLandmarks: CityLandmark[] = [
  forThakhek('kong-lor-cave', {
    order: 1,
    kicker: 'RIVER CAVE · BOAT · LOOP',
    summary: 'The defining journey of the Thakhek Loop: a longtail boat through a vast underground river beneath the limestone mountain.',
    duration: 'Full day or loop stop',
    route: '145–150 km from Thakhek'
  }),
  forThakhek('xe-bang-fai-cave', {
    order: 2,
    kicker: 'EXPEDITION · HIN NAM NO · REMOTE',
    summary: 'A remote river-cave expedition toward the Lao–Vietnamese border, requiring local planning, safe water levels and a guide.',
    duration: 'Full day or multi-day',
    route: 'East of Thakhek via Route 12'
  }),
  {
    ...thamNangAenLandmark,
    cityContext: {
      order: 3,
      kicker: 'SHOW CAVE · ROUTE 12 · CLOSE TO TOWN',
      summary: 'A large, highly developed first cave from Thakhek: illuminated chambers and stairways for the short visit, with a deeper river-and-boat option when it is operating.',
      duration: '1 hour · 2+ hours with boat',
      route: '18 km from Thakhek on Route 12'
    }
  }
];
