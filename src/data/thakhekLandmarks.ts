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
  description: 'A large developed show cave on Route 12, known for its cool air, illuminated limestone chambers, built walkways and a small underground lake. It is one of the easiest cave stops to combine with a stay in Thakhek.',
  mapsUrl: 'https://maps.app.goo.gl/UbvyD3oxhyWVjLyC6',
  gallery: [
    {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/10_Nang_Aen_cane_-_panoramio.jpg?width=1600',
      alt: 'Interior of Tham Nang Aen Cave near Thakhek in Khammouane Province',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:10_Nang_Aen_cane_-_panoramio.jpg',
      author: 'Adriaan Castermans',
      license: 'Wikimedia Commons'
    }
  ],
  facts: [
    { label: 'Getting there', value: 'The cave is roughly 18 kilometres northeast of Thakhek on Route 12, followed by a short access road from the signed turn.' },
    { label: 'Best time', value: 'Visit in daylight and confirm current opening conditions locally, especially after heavy rain.' },
    { label: 'What to wear', value: 'Light clothing and shoes with grip. The cave stays noticeably cooler than the road outside.' },
    { label: 'Price', value: 'Paid entrance. Boat trips or other on-site activities may cost extra, so confirm the current options at the entrance.' },
    { label: 'Duration', value: 'Allow around one to two hours for the walkways, chambers and any optional activity.' },
    { label: 'Difficulty', value: 'Easy to moderate. The main route uses developed steps and walkways, but surfaces may still be damp.' }
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
      summary: 'A practical first cave from Thakhek, with illuminated formations, built walkways and cool chambers close to the beginning of the loop.',
      duration: '1–2 hours',
      route: '18 km from Thakhek'
    }
  }
];
