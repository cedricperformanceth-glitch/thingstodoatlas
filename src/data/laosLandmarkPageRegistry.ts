import type { CityLandmark, LaosLandmark } from './laosLandmarks';
import { getLandmarksForCity } from './laosLandmarks';
import { donDetLandmarks } from './donDetLandmarks';
import { luangPrabangExploreLandmarks } from './luangPrabangLandmarks';
import { thakhekLandmarks } from './thakhekLandmarks';
import { vangViengLandmarks } from './vangViengLandmarks';
import { tadLoExplorePageLandmarks } from './tadLoExploreLandmarks';
import { laosLandmarkGuides, type LandmarkVisitGuide } from './laosLandmarkGuides';
import { khonePhaphengLandmarkGuide } from './khonePhaphengLandmarkGuide';
import { kongLorLandmarkGuide } from './kongLorLandmarkGuide';
import { tadLoAdditionalActivityGuides } from './tadLoAdditionalActivityGuides';
import { thakhekAdditionalActivityGuides } from './thakhekAdditionalActivityGuides';
import { donDetAdditionalActivityGuides } from './donDetAdditionalActivityGuides';

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

const researchedGuides: Record<string, LandmarkVisitGuide> = {
  'khone-phapheng-falls': khonePhaphengLandmarkGuide,
  'kong-lor-cave': kongLorLandmarkGuide,
  ...tadLoAdditionalActivityGuides,
  ...thakhekAdditionalActivityGuides,
  ...donDetAdditionalActivityGuides
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
  guide: researchedGuides[landmark.slug] || laosLandmarkGuides[landmark.slug] || buildFallbackGuide(landmark, fieldNote),
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

  page(requireCityLandmark(tadLoExplorePageLandmarks, 'tad-hang-waterfall'), 'tad-lo', 'Tad Lo',
    'Tad Hang is the easiest waterfall to make part of ordinary village time: walk there, read the river conditions and let the short distance be an advantage rather than a reason to rush.',
    'Walk there first. Decide what the river allows when you arrive.',
    ['tad-lo-waterfall', 'tad-soung-waterfall', 'cooking-class-nyay', 'fandee-adventure-park']),
  page(requireCityLandmark(tadLoExplorePageLandmarks, 'tad-lo-waterfall'), 'tad-lo', 'Tad Lo',
    'Tad Lo Waterfall works best as part of village life rather than a single photo stop: walk there slowly, stay by the river and let the light and water level decide how long you remain.',
    'The waterfall belongs to the village day, not to a checklist.',
    ['tad-hang-waterfall', 'tad-soung-waterfall', 'cooking-class-nyay', 'vat-paa-ancient-forest']),
  page(requireCityLandmark(tadLoExplorePageLandmarks, 'tad-soung-waterfall'), 'tad-lo', 'Tad Lo',
    'Tad Soung is the longer waterfall chapter: rural approach, lower falls, a moderate climb or road route to the top, and an escarpment whose view remains part of the reward even when controlled flow is low.',
    'Tad Soung is the half day. Let the road, climb and escarpment count as part of it.',
    ['tad-hang-waterfall', 'tad-lo-waterfall', 'mr-hook-coffee-culture', 'bolaven-plateau']),
  page(requireCityLandmark(tadLoExplorePageLandmarks, 'katu-weaving-workshop'), 'tad-lo', 'Tad Lo',
    'The weaving workshop makes the time inside a Katu textile visible: posture, backstrap tension, repeated movements and patient instruction matter more than producing a souvenir quickly.',
    'Four hours at the loom can explain more than four minutes in front of a textile stall.',
    ['cooking-class-nyay', 'mr-hook-coffee-culture', 'mr-vieng-coffee-experience', 'tad-lo-waterfall']),
  page(requireCityLandmark(tadLoExplorePageLandmarks, 'cooking-class-nyay'), 'tad-lo', 'Tad Lo',
    'The cooking class turns one meal into a local half-day: preparation, conversation and eating together matter more than collecting recipes quickly.',
    'Prepare it, understand it, then share the meal.',
    ['katu-weaving-workshop', 'tad-lo-waterfall', 'fandee-adventure-park', 'vat-paa-ancient-forest']),
  page(requireCityLandmark(tadLoExplorePageLandmarks, 'fandee-adventure-park'), 'tad-lo', 'Tad Lo',
    'Fandee Adventure Park is a controlled burst of height inside an otherwise slow village stay: the value is the complete guided forest circuit, not one isolated zipline.',
    'Close to the village does not mean casual about the harness. Follow the staff briefing exactly.',
    ['tad-hang-waterfall', 'tad-lo-waterfall', 'cooking-class-nyay', 'vat-paa-ancient-forest']),
  page(requireCityLandmark(tadLoExplorePageLandmarks, 'mr-hook-coffee-culture'), 'tad-lo', 'Tad Lo',
    'Mr Hook uses coffee as a doorway into plants, questions and Katou cultural perspectives. The visit works best when the traveller listens long enough to separate one host’s explanations from easy generalisations about an entire people.',
    'Listen for three hours before trying to summarise the village in three sentences.',
    ['mr-vieng-coffee-experience', 'katu-weaving-workshop', 'tad-soung-waterfall', 'bolaven-plateau']),
  page(requireCityLandmark(tadLoExplorePageLandmarks, 'mr-vieng-coffee-experience'), 'tad-lo', 'Tad Lo',
    'Mr Vieng is the compact producer visit: follow the coffee chain from plant to processing and cup, then read whatever stage of the agricultural season the farm is actually showing that day.',
    'The useful question is not only how the coffee is roasted, but what stage the farm is in today.',
    ['mr-hook-coffee-culture', 'katu-weaving-workshop', 'bolaven-plateau', 'tad-lo-waterfall']),
  page(requireCityLandmark(tadLoExplorePageLandmarks, 'vat-paa-ancient-forest'), 'tad-lo', 'Tad Lo',
    'Vat Paa is the quiet counterpoint to the waterfalls: old trees, a Buddha and a cave entrance that should be observed without turning an unassessed underground route into a casual attraction.',
    'Stay with the forest. The cave does not need to be entered.',
    ['tad-lo-waterfall', 'cooking-class-nyay', 'katu-weaving-workshop', 'fandee-adventure-park']),

  page(requireCityLandmark(donDetLandmarks, 'khone-phapheng-falls'), 'don-det', 'Don Det',
    'Khone Phapheng is the breaking point of the Mekong: a vast multi-channel cataract whose scale shaped the ecology of Si Phan Don, blocked continuous navigation and eventually forced the French railway bypass across Don Khon and Don Det.',
    'Give the river space. Read the waterfall, the islands and the old railway as one connected Mekong story.',
    ['don-khon-railway-bridge', 'li-phi-somphamit-waterfalls', 'si-phan-don-boat-exploration', 'cambodia-from-don-det']),
  page(requireCityLandmark(donDetLandmarks, 'don-khon-railway-bridge'), 'don-det', 'Don Det',
    'The bridge matters because it changes the island day: cross it slowly, continue onto Don Khon and let the old railway traces connect the history with the bicycle route.',
    'Cross the bridge, then keep going. The island route begins after the obvious landmark.',
    ['li-phi-somphamit-waterfalls', 'xai-kong-nyai-beach', 'khone-pa-soi-waterfall', 'khone-phapheng-falls']),
  page(requireCityLandmark(donDetLandmarks, 'cambodia-from-don-det'), 'don-det', 'Don Det',
    'This is a travel-day guide rather than a sightseeing stop. The useful content is the sequence: island departure, Nakasang, road transfer, border formalities and enough time margin for the onward journey.',
    'Treat the border as the whole day, not as a gap between two bookings.',
    ['khone-phapheng-falls', 'si-phan-don-boat-exploration', 'don-khon-railway-bridge', 'don-som-island']),
  page(requireCityLandmark(donDetLandmarks, 'e-toud-waterfall'), 'don-det', 'Don Det',
    'E-Toud is a river-day stop rather than an independent waterfall mission: the guided kayak route, changing current and overland transfers matter more than the few minutes spent at the cataract itself.',
    'E-Toud is earned from the river. Follow the guide, protect your gear and let the Mekong set the route.',
    ['si-phan-don-boat-exploration', 'don-som-island', 'khone-phapheng-falls', 'hidden-waterfall-boat-trip']),
  page(requireCityLandmark(donDetLandmarks, 'don-som-island'), 'don-det', 'Don Det',
    'Don Som is the anti-attraction: a nearby agricultural island where the boat crossing, bicycle roads, villages and ordinary river life are the reason to go.',
    'Don Som is not a sightseeing checklist. Cross the river, arrange the way back, then let the island stay ordinary.',
    ['si-phan-don-boat-exploration', 'e-toud-waterfall', 'don-khon-railway-bridge', 'hidden-waterfall-boat-trip']),
  page(requireCityLandmark(donDetLandmarks, 'khone-pa-soi-waterfall'), 'don-det', 'Don Det',
    'Khone Pa Soi is the quieter waterfall route on Don Khon: rougher tracks, a suspension bridge and the old Teak Way give the stop a completely different character from the developed Somphamit park.',
    'Take the quieter road, check the bridge and remember that “smaller” does not make the Mekong gentle.',
    ['don-khon-railway-bridge', 'li-phi-somphamit-waterfalls', 'xai-kong-nyai-beach', 'mekong-fly-zipline']),
  page(requireCityLandmark(donDetLandmarks, 'hidden-waterfall-boat-trip'), 'don-det', 'Don Det',
    'The hidden-waterfall trip stays deliberately imprecise: recent local guest reports verify the excursion, but not one stable official attraction name or public route. The page therefore teaches the traveller how to arrange it without inventing certainty.',
    'No fake pin, no fake timetable. Ask locally what the hidden-waterfall trip means today.',
    ['si-phan-don-boat-exploration', 'e-toud-waterfall', 'don-som-island', 'xai-kong-nyai-beach']),
  page(requireCityLandmark(donDetLandmarks, 'xai-kong-nyai-beach'), 'don-det', 'Don Det',
    'Xai Kong Nyai is the slow part of a Don Khon bicycle day: a sandy bank, simple food and cautious swimming close to shore after the louder waterfall stops.',
    'Stay near the bank, eat slowly and let this be the quiet part of the Don Khon loop.',
    ['li-phi-somphamit-waterfalls', 'don-khon-railway-bridge', 'khone-pa-soi-waterfall', 'mekong-fly-zipline']),
  page(requireCityLandmark(donDetLandmarks, 'si-phan-don-boat-exploration'), 'don-det', 'Don Det',
    'A long-tail boat turns Si Phan Don back into an archipelago: inhabited islands, farming islets and working channels matter more than one fixed tour itinerary.',
    'Choose the river, not a checklist. Let the boatman connect the islands that make sense that day.',
    ['don-som-island', 'hidden-waterfall-boat-trip', 'e-toud-waterfall', 'khone-phapheng-falls']),
  page(requireCityLandmark(donDetLandmarks, 'li-phi-somphamit-waterfalls'), 'don-det', 'Don Det',
    'Somphamit is the defining Don Khon waterfall visit: cycle across the railway bridge, follow the developed viewpoints and read a section of Mekong whose force made navigation and swimming fundamentally dangerous.',
    'Cycle there for the river, not the add-ons. The strongest experience is simply watching the Mekong refuse to be a normal channel.',
    ['mekong-fly-zipline', 'xai-kong-nyai-beach', 'khone-pa-soi-waterfall', 'don-khon-railway-bridge']),
  page(requireCityLandmark(donDetLandmarks, 'mekong-fly-zipline'), 'don-det', 'Don Det',
    'The Mekong Fly adds a guided aerial layer to Somphamit: seven lines, suspended bridges and the rapids directly below, with operator judgement and harness discipline more important than the photograph.',
    'Book the height only after you have read the water below it. The operator controls the course; the Mekong controls the atmosphere.',
    ['li-phi-somphamit-waterfalls', 'xai-kong-nyai-beach', 'khone-pa-soi-waterfall', 'don-khon-railway-bridge']),

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
    'Kong Lor is a river crossing through a limestone mountain: about seven kilometres of darkness, shallow water, huge chambers and a second valley on the far side make the boat journey one continuous piece of the Thakhek Loop rather than a normal in-and-out cave stop.',
    'Follow the Hin Boun through the mountain. The darkness, the shallow water and the far valley are one journey.',
    ['xe-bang-fai-cave', 'tham-nang-aen-cave', 'thafalang-thakhek', 'kuan-cow-cave-thakhek']),
  page(requireCityLandmark(thakhekLandmarks, 'xe-bang-fai-cave'), 'thakhek', 'Thakhek',
    'Xe Bang Fai is the remote end of the cave spectrum: rougher access, local coordination and river conditions matter as much as the underground chamber itself.',
    'The road is part of the expedition. Confirm the river before leaving.',
    ['kong-lor-cave', 'tham-nang-aen-cave', 'thafalang-thakhek', 'kuan-cow-cave-thakhek']),
  page(requireCityLandmark(thakhekLandmarks, 'tham-nang-aen-cave'), 'thakhek', 'Thakhek',
    'Tham Nang Aen is the accessible introduction to Khammouane cave country: close to Thakhek, developed enough to visit simply, but still cool, damp and dramatically different from the road outside.',
    'Use it as the first cave, not the last word on Khammouane.',
    ['thafalang-thakhek', 'kuan-cow-cave-thakhek', 'kong-lor-cave', 'xe-bang-fai-cave']),
  page(requireCityLandmark(thakhekLandmarks, 'kuan-cow-cave-thakhek'), 'thakhek', 'Thakhek',
    'Kuan Cow is the intentionally small Thakhek field note: a lightly documented cave embedded in a scenic village mini-loop near the beginning of Route 12, where the quality of the detour matters more than pretending the cave is a major attraction.',
    'Keep the claim smaller than the evidence. The quiet road is as important as the cave.',
    ['thafalang-thakhek', 'tham-nang-aen-cave', 'kong-lor-cave', 'xe-bang-fai-cave']),
  page(requireCityLandmark(thakhekLandmarks, 'thafalang-thakhek'), 'thakhek', 'Thakhek',
    'Tha Falang is the first Loop day’s reset button: clear river water under limestone cliffs, local leisure culture, food and kayaking make it a place to stop moving for a while rather than another attraction to photograph from the bike.',
    'Swim, eat, watch the limestone and let the Route 12 schedule wait.',
    ['kuan-cow-cave-thakhek', 'tham-nang-aen-cave', 'kong-lor-cave', 'xe-bang-fai-cave']),

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
