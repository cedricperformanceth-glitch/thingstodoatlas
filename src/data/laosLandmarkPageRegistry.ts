import type { CityLandmark, LaosLandmark } from './laosLandmarks';
import { getLandmarksForCity } from './laosLandmarks';
import { donDetLandmarks } from './donDetLandmarks';
import { luangPrabangExploreLandmarks } from './luangPrabangLandmarks';
import { thakhekLandmarks } from './thakhekLandmarks';
import { vangViengLandmarks } from './vangViengLandmarks';
import { tadLoExplorePageLandmarks } from './tadLoExploreLandmarks';
import { laosLandmarkGuides, type LandmarkVisitGuide } from './laosLandmarkGuides';

export type LaosLandmarkPageEntry = {
  slug: string;
  citySlug: string;
  cityName: string;
  route: string;
  sourceRoute: string;
  landmark: CityLandmark;
  guide: LandmarkVisitGuide;
  editorialAngle: string;
  fieldNote: string;
  relatedSlugs: string[];
};

const pakseLandmarks = getLandmarksForCity('pakse');

const requireCityLandmark = (list: CityLandmark[], slug: string) => {
  const landmark = list.find((item) => item.slug === slug);
  if (!landmark) throw new Error(`Missing city landmark: ${slug}`);
  return landmark;
};

const fact = (landmark: LaosLandmark, labels: string[]) => {
  for (const label of labels) {
    const value = landmark.facts.find((item) => item.label.toLowerCase() === label.toLowerCase())?.value;
    if (value) return value;
  }
  return '';
};

const buildFallbackGuide = (landmark: CityLandmark, fieldNote: string): LandmarkVisitGuide => {
  const gettingThere = fact(landmark, ['Getting there', 'Route']);
  const duration = fact(landmark, ['Duration', 'Time on board']) || landmark.cityContext.duration;
  const bestTime = fact(landmark, ['Best time']);
  const whatToWear = fact(landmark, ['What to wear', 'What to bring']);
  const difficulty = fact(landmark, ['Difficulty']);
  const price = fact(landmark, ['Price', 'Opening hours', 'Border planning']);

  return {
    eyebrow: landmark.cityContext.kicker,
    intro: `${landmark.description} ${landmark.cityContext.summary}`,
    budget: price || 'Check current local costs before leaving',
    duration,
    bestFor: landmark.cityContext.kicker.toLowerCase().replaceAll(' · ', ', '),
    sections: [
      { label: '01 · THE PLACE', title: 'What this stop really is', text: landmark.description, note: landmark.cityContext.summary },
      { label: '02 · ROUTE', title: 'How to get there', text: gettingThere || landmark.cityContext.route },
      { label: '03 · TIME', title: 'How long to keep', text: duration },
      { label: '04 · ON THE GROUND', title: 'How to approach it', text: [bestTime, whatToWear, difficulty].filter(Boolean).join(' ') }
    ],
    fieldNote
  };
};

const page = (
  landmark: CityLandmark,
  citySlug: string,
  cityName: string,
  editorialAngle: string,
  fieldNote: string,
  relatedSlugs: string[]
): LaosLandmarkPageEntry => ({
  slug: landmark.slug,
  citySlug,
  cityName,
  route: `/laos/${citySlug}/things-to-do/${landmark.slug}`,
  sourceRoute: `/laos/${citySlug}`,
  landmark,
  guide: laosLandmarkGuides[landmark.slug] || buildFallbackGuide(landmark, fieldNote),
  editorialAngle,
  fieldNote,
  relatedSlugs
});

export const laosLandmarkPages: LaosLandmarkPageEntry[] = [
  page(requireCityLandmark(pakseLandmarks, 'bolaven-plateau'), 'pakse', 'Pakse',
    'Treat the plateau as a road journey rather than a waterfall checklist: the change in altitude, coffee country and time between stops are part of the experience.',
    'The loop is the experience. Follow the road, not the number of pins.',
    ['wat-phou', 'tad-lo-waterfall', 'khone-phapheng-falls', 'don-khon-railway-bridge']),
  page(requireCityLandmark(pakseLandmarks, 'wat-phou'), 'pakse', 'Pakse',
    'Read Wat Phou as a landscape: the ceremonial axis, old stone, water and mountain make more sense together than as separate photo stops.',
    'Do not race the stairs. The landscape is part of the temple.',
    ['bolaven-plateau', 'khone-phapheng-falls', 'pha-pa-tou', 'kuang-si-waterfall']),

  page(requireCityLandmark(tadLoExplorePageLandmarks, 'tad-lo-waterfall'), 'tad-lo', 'Tad Lo',
    'Tad Lo Waterfall works best as part of village life rather than a single photo stop: walk there slowly, stay by the river and let the light and water level decide how long you remain.',
    'The waterfall belongs to the village day, not to a checklist.',
    ['bolaven-plateau', 'cooking-class-nyay', 'vat-paa-ancient-forest', 'wat-phou']),
  page(requireCityLandmark(tadLoExplorePageLandmarks, 'cooking-class-nyay'), 'tad-lo', 'Tad Lo',
    'The cooking class turns one meal into a local half-day: preparation, conversation and eating together matter more than collecting recipes quickly.',
    'Prepare it, understand it, then share the meal.',
    ['tad-lo-waterfall', 'vat-paa-ancient-forest', 'bolaven-plateau', 'wat-phou']),
  page(requireCityLandmark(tadLoExplorePageLandmarks, 'vat-paa-ancient-forest'), 'tad-lo', 'Tad Lo',
    'Vat Paa is the quiet counterpoint to the waterfalls: old trees, a Buddha and a cave entrance that should be observed without turning an unassessed underground route into a casual attraction.',
    'Stay with the forest. The cave does not need to be entered.',
    ['tad-lo-waterfall', 'cooking-class-nyay', 'bolaven-plateau', 'pha-pa-tou']),

  page(requireCityLandmark(donDetLandmarks, 'khone-phapheng-falls'), 'don-det', 'Don Det',
    'Khone Phapheng is about scale. The river does not need a long activity list; it needs enough time to move between viewpoints and understand how violently the Mekong changes here.',
    'Give the river space. This stop is about scale, sound and distance.',
    ['don-khon-railway-bridge', 'cambodia-from-don-det', 'wat-phou', 'bolaven-plateau']),
  page(requireCityLandmark(donDetLandmarks, 'don-khon-railway-bridge'), 'don-det', 'Don Det',
    'The bridge matters because it changes the island day: cross it slowly, continue onto Don Khon and let the old railway traces connect the history with the bicycle route.',
    'Cross the bridge, then keep going. The island route begins after the obvious landmark.',
    ['khone-phapheng-falls', 'cambodia-from-don-det', 'bolaven-plateau', 'wat-phou']),
  page(requireCityLandmark(donDetLandmarks, 'cambodia-from-don-det'), 'don-det', 'Don Det',
    'This is a travel-day guide rather than a sightseeing stop. The useful content is the sequence: island departure, Nakasang, road transfer, border formalities and enough time margin for the onward journey.',
    'Treat the border as the whole day, not as a gap between two bookings.',
    ['don-khon-railway-bridge', 'khone-phapheng-falls', 'wat-phou', 'bolaven-plateau']),

  page(requireCityLandmark(luangPrabangExploreLandmarks, 'pha-pa-tou'), 'luang-prabang', 'Luang Prabang',
    'Pha Pa Tou is a small expedition: river crossing, forest climb and a very simple mountain stay. The sunrise only makes sense when the approach is treated as part of the experience.',
    'Sunrise is earned on foot. Organise the crossing before the climb.',
    ['kuang-si-waterfall', 'slow-boat-luang-prabang-huay-xai', 'phou-bia-from-vang-vieng', 'kong-lor-cave']),
  page(requireCityLandmark(luangPrabangExploreLandmarks, 'kuang-si-waterfall'), 'luang-prabang', 'Luang Prabang',
    'Kuang Si is easy to reach but still benefits from an early start. Move beyond the first busy pools, keep time for the forest and let the waterfall unfold in stages.',
    'Arrive early, then keep walking. The first pool is not the whole waterfall.',
    ['pha-pa-tou', 'slow-boat-luang-prabang-huay-xai', 'hot-air-balloon-paramotor-vang-vieng', 'kong-lor-cave']),
  page(requireCityLandmark(luangPrabangExploreLandmarks, 'slow-boat-luang-prabang-huay-xai'), 'luang-prabang', 'Luang Prabang',
    'The slow boat is transport stripped back to its rhythm: two long river days, a night in Pakbeng and a moving view of northern Laos that cannot be compressed into a quick transfer.',
    'Bring patience before comfort. The hours on the Mekong are the point.',
    ['pha-pa-tou', 'kuang-si-waterfall', 'hot-air-balloon-paramotor-vang-vieng', 'phou-bia-from-vang-vieng']),

  page(requireCityLandmark(thakhekLandmarks, 'kong-lor-cave'), 'thakhek', 'Thakhek',
    'Kong Lor is both a cave and a journey through the mountain. The boat, darkness, shallow sections and hidden valley beyond belong to one continuous experience.',
    'The mountain opens into darkness. Keep time for the return journey.',
    ['xe-bang-fai-cave', 'tham-nang-aen-cave', 'bolaven-plateau', 'pha-pa-tou']),
  page(requireCityLandmark(thakhekLandmarks, 'xe-bang-fai-cave'), 'thakhek', 'Thakhek',
    'Xe Bang Fai is the remote end of the cave spectrum: rougher access, local coordination and river conditions matter as much as the underground chamber itself.',
    'The road is part of the expedition. Confirm the river before leaving.',
    ['kong-lor-cave', 'tham-nang-aen-cave', 'pha-pa-tou', 'phou-bia-from-vang-vieng']),
  page(requireCityLandmark(thakhekLandmarks, 'tham-nang-aen-cave'), 'thakhek', 'Thakhek',
    'Tham Nang Aen is the accessible introduction to Khammouane cave country: close to Thakhek, developed enough to visit simply, but still cool, damp and dramatically different from the road outside.',
    'Use it as the first cave, not the last word on Khammouane.',
    ['kong-lor-cave', 'xe-bang-fai-cave', 'bolaven-plateau', 'hot-air-balloon-paramotor-vang-vieng']),

  page(requireCityLandmark(vangViengLandmarks, 'hot-air-balloon-paramotor-vang-vieng'), 'vang-vieng', 'Vang Vieng',
    'The appeal is perspective: river, rice fields and limestone towers suddenly become one landscape. Weather and operator judgement matter more than a fixed departure promise.',
    'Book the view, but let the weather make the final decision.',
    ['phou-bia-from-vang-vieng', 'pha-pa-tou', 'kuang-si-waterfall', 'slow-boat-luang-prabang-huay-xai']),
  page(requireCityLandmark(vangViengLandmarks, 'phou-bia-from-vang-vieng'), 'vang-vieng', 'Vang Vieng',
    'Phou Bia belongs in the expedition notebook rather than the normal day-trip list. Current access, local permissions, road conditions and UXO risk have to shape the plan before the mountain does.',
    'Do not turn the highest peak into an improvised scooter mission.',
    ['hot-air-balloon-paramotor-vang-vieng', 'pha-pa-tou', 'kong-lor-cave', 'xe-bang-fai-cave'])
];

export const laosLandmarkPageBySlug = Object.fromEntries(
  laosLandmarkPages.map((entry) => [entry.slug, entry])
) as Record<string, LaosLandmarkPageEntry>;

export const laosLandmarkPageByModalId = Object.fromEntries(
  laosLandmarkPages.map((entry) => [entry.landmark.modalId, entry])
) as Record<string, LaosLandmarkPageEntry>;

export const getRelatedLandmarkPages = (entry: LaosLandmarkPageEntry) =>
  entry.relatedSlugs
    .map((slug) => laosLandmarkPageBySlug[slug])
    .filter((item): item is LaosLandmarkPageEntry => Boolean(item));
