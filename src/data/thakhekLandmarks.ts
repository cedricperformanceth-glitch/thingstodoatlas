import { laosLandmarks, type CityLandmark, type CityLandmarkContext, type LaosLandmark } from './laosLandmarks';
import { thakhekThingsToDo } from './thakhekPlaces';

const requireLandmark = (slug: string): LaosLandmark => {
  const landmark = laosLandmarks.find((item) => item.slug === slug);
  if (!landmark) throw new Error(`Missing Laos landmark: ${slug}`);
  return landmark;
};

const requireThakhekThing = (slug: string) => {
  const place = thakhekThingsToDo.find((item) => item.slug === slug);
  if (!place) throw new Error(`Missing Thakhek activity: ${slug}`);
  return place;
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

const kuanCowPlace = requireThakhekThing('kuan-cow-cave-thakhek');
const thaFalangPlace = requireThakhekThing('thafalang-thakhek');

export const kuanCowLandmark: CityLandmark = {
  slug: kuanCowPlace.slug,
  modalId: 'kuan-cow-cave-modal',
  name: kuanCowPlace.name,
  country: 'Laos',
  fieldCardNumber: '14',
  region: kuanCowPlace.address,
  description: 'A small, lightly documented cave detour east of Thakhek, best understood as part of a quiet mini-loop through villages, rice fields and limestone scenery after Elephant Cave rather than as a major developed cave attraction.',
  mapsUrl: kuanCowPlace.mapsUrl,
  gallery: [{ src: kuanCowPlace.image, alt: kuanCowPlace.imageAlt }],
  facts: [
    { label: 'Getting there', value: 'The current map pin places Kuan Cow Cave east of Thakhek near the early Route 12 cave corridor. Recent Loop travellers reach it on a short mini-loop after Elephant Cave using village roads and compacted dirt tracks before reconnecting with the main road.' },
    { label: 'How long', value: 'Keep the cave itself as a short stop. Allow roughly 1–2 hours for the complete detour, including the quieter village road, photos and any time spent checking local access.' },
    { label: 'Road conditions', value: 'Recent dry-season accounts describe mostly compacted dirt with a short gravel or dusty section. Rain can change these small roads quickly, so do not treat an old dry-season route description as a permanent surface guarantee.' },
    { label: 'Cave access', value: 'No dependable current source confirms fixed opening hours, a maintained interior route or a permanent guide system. Check local access on arrival and do not push farther underground when the route is unclear.' },
    { label: 'What to bring', value: 'Carry a proper torch or headlamp, shoes with grip, water and an offline map. A phone light is not enough for an unlit cave beyond the daylight zone.' },
    { label: 'Price', value: 'No reliable current entrance price could be verified. Carry small Lao kip in case a local parking or access contribution is requested, and treat any amount as local and changeable.' }
  ],
  cityContext: {
    order: 4,
    kicker: 'CAVE DETOUR · VILLAGES · QUIET ROAD',
    summary: 'A lesser-known cave stop inside a scenic village mini-loop near the beginning of Route 12, with intentionally cautious guidance because the cave itself is only lightly documented.',
    duration: '1–2 hours including detour',
    route: 'East of Thakhek · near early Cave Alley'
  }
};

export const thaFalangLandmark: CityLandmark = {
  slug: thaFalangPlace.slug,
  modalId: 'thafalang-modal',
  name: 'Tha Falang',
  country: 'Laos',
  fieldCardNumber: '15',
  region: thaFalangPlace.address,
  description: 'A popular clear-water river stop on the first section of the Thakhek Loop, combining swimming and limestone scenery with riverside food, huts, kayaking, camping and accommodation.',
  mapsUrl: thaFalangPlace.mapsUrl,
  gallery: [{ src: thaFalangPlace.image, alt: thaFalangPlace.imageAlt }],
  facts: [
    { label: 'From Thakhek', value: 'Current sources place Tha Falang roughly 12–16 km east or northeast of central Thakhek along the Route 12 cave corridor. Follow the signed turn from the main road and continue on the short local access road to the river.' },
    { label: 'Hours & access', value: 'Khammouane Tourism currently lists daily hours around 08:00–17:00 and free entrance to the natural site. Other current tourism listings extend the closing time to 18:00, so reconfirm locally if arriving late.' },
    { label: 'Swimming season', value: 'November to April generally brings clearer, lower water and the easiest swimming conditions. Rainy-season levels can rise significantly and the access road can become more difficult; always read the current before entering.' },
    { label: 'What is available', value: 'Recent reporting documents swimming, riverside meals, fish feeding, camping and kayaking, including a calm stretch of river used for longer paddling. Accommodation and bamboo or floating seating are also available around the developed riverbank.' },
    { label: 'Budget', value: 'Keep free natural-site access separate from paid services. Food, a riverside hut, kayak, camping or accommodation may cost extra even when there is no general entrance fee.' },
    { label: 'What to bring', value: 'Keep swimwear and a towel accessible, bring cash, drinking water and sun protection, and use sandals or water shoes around rocky banks. Weekdays and mornings are better if you prefer a quieter stop.' }
  ],
  cityContext: {
    order: 5,
    kicker: 'RIVER · SWIM · CAVE ALLEY',
    summary: 'The first Loop day’s reset button: clear river water beneath limestone cliffs, with food and activities that can turn a quick swim into a long pause.',
    duration: '2–4 hours',
    route: 'Route 12 · roughly 12–16 km from Thakhek'
  }
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
  },
  kuanCowLandmark,
  thaFalangLandmark
];
