import type { CityLandmark, LandmarkGalleryItem } from './laosLandmarks';

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const commons = (
  fileName: string,
  alt: string,
  author: string,
  license: string,
  width = 1600
): LandmarkGalleryItem => ({
  src: `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}?width=${width}`,
  alt,
  sourcePage: `https://commons.wikimedia.org/wiki/File:${fileName.replaceAll(' ', '_')}`,
  author,
  license
});

const namSong = commons(
  'Nam song river vang vieng.jpg',
  'Nam Song River and limestone mountains around Vang Vieng, used as regional landscape context',
  'James Shannon',
  'Public domain',
  1800
);
const vangViengKarst = commons(
  'VientianeProvince VangVieng1 tango7174.jpg',
  'Karst landscape around Vang Vieng, used as regional countryside context',
  'Tango7174',
  'CC BY-SA 4.0',
  1800
);
const woodenBridge = commons(
  'Narrow Wooden Bridge - Vang Vieng, Laos.jpg',
  'A narrow wooden bridge in the Vang Vieng countryside, used as regional access context',
  'Mcmorrl',
  'CC0 1.0',
  1800
);
const vangViengCliffs = commons(
  'VangVieng.jpg',
  'Limestone cliffs around Vang Vieng, used as regional karst context',
  'Jean-Marie Hullot',
  'CC BY-SA 3.0',
  1800
);

const contextualGallery = (primary: LandmarkGalleryItem): LandmarkGalleryItem[] => [
  primary,
  primary === namSong ? vangViengKarst : namSong,
  primary === woodenBridge ? vangViengCliffs : woodenBridge
];

const makeLandmark = ({
  slug,
  name,
  number,
  region,
  description,
  mapsQuery,
  image,
  facts,
  kicker,
  summary,
  duration,
  route,
  country = 'Laos'
}: {
  slug: string;
  name: string;
  number: string;
  region: string;
  description: string;
  mapsQuery: string;
  image: LandmarkGalleryItem;
  facts: Array<{ label: string; value: string }>;
  kicker: string;
  summary: string;
  duration: string;
  route: string;
  country?: string;
}): CityLandmark => ({
  slug,
  modalId: `${slug}-modal`,
  name,
  country,
  fieldCardNumber: number,
  region,
  description,
  mapsUrl: mapsSearch(mapsQuery),
  gallery: contextualGallery(image),
  facts,
  cityContext: {
    order: Number(number),
    kicker,
    summary,
    duration,
    route
  }
});

export const vangViengLandmarks: CityLandmark[] = [
  {
    slug: 'hot-air-balloon-paramotor-vang-vieng',
    modalId: 'hot-air-balloon-paramotor-vang-vieng-modal',
    name: 'Hot Air Balloon & Paramotor',
    country: 'Laos',
    fieldCardNumber: '01',
    region: 'Vang Vieng · Nam Song valley',
    description: 'Balloon and tandem paramotor flights reveal the Nam Song, rice fields and limestone towers from above, with the actual departure controlled by wind, visibility and the operator’s safety decision.',
    mapsUrl: mapsSearch('Hot Air Balloon Paramotor Vang Vieng Laos'),
    gallery: [
      commons(
        'Vang Vieng - Hot Air Balloon (23871079683).jpg',
        'A hot-air balloon flying above Vang Vieng in Laos',
        'Visions of Domino',
        'CC BY 2.0',
        1800
      ),
      namSong,
      vangViengKarst
    ],
    facts: [
      { label: 'Balloon or paramotor', value: 'Balloon flights are slower and wind-led; tandem paramotors are shorter, powered and more directional. Compare the airborne time before comparing prices.' },
      { label: 'Best time', value: 'Flights normally target sunrise or late afternoon, but wind and visibility decide whether the aircraft launches. Keep a backup weather window if the flight matters to you.' },
      { label: 'What to wear', value: 'Closed shoes and comfortable layers. Stay exactly where the crew directs around balloon burners, wing lines, launch fields and paramotor propellers.' },
      { label: 'Price', value: 'Prices vary by operator, aircraft and flight time. Confirm pickup, actual flight duration, cancellation or rescheduling terms and any insurance before paying.' },
      { label: 'Duration', value: 'Allow about 1–2 hours including pickup or meeting, briefing, setup, flight and landing or return transport.' },
      { label: 'Safety', value: 'Use a current reputable operator and treat a weather cancellation as a safety decision, not a service failure.' }
    ],
    cityContext: {
      order: 1,
      kicker: 'SUNRISE · AIR · KARST VALLEY',
      summary: 'Read the Nam Song valley from above in a slow balloon or a shorter tandem paramotor flight.',
      duration: '1–2 hours',
      route: 'Book with a current Vang Vieng operator'
    }
  },
  makeLandmark({
    slug: 'num-bor-keo-cave',
    name: 'Num Bor Keo Cave',
    number: '02',
    region: 'Vang Vieng countryside · Vientiane Province',
    description: 'A quieter, lightly developed cave reached through rice-field countryside, with a genuinely dark interior, slippery natural ground and a small pool near the entrance.',
    mapsQuery: 'Num Bor Keo Cave Vang Vieng Laos',
    image: woodenBridge,
    facts: [
      { label: 'Getting there', value: 'Save the current pin offline and follow local signs through the countryside. Recent visitors describe a rice-field approach with simple bridges rather than a major paved attraction entrance.' },
      { label: 'Best time', value: 'Visit in daylight and avoid rushing the access after heavy rain, when paths, bridges and the cave floor can be muddy or slippery.' },
      { label: 'What to bring', value: 'Bring your own reliable headlamp, shoes with grip, water and a waterproof way to protect electronics. Do not rely only on a phone light.' },
      { label: 'Price', value: 'Recent 2026 visitors have reported roughly 20,000 kip, sometimes with a basic light supplied. Treat that as a reference and reconfirm on arrival.' },
      { label: 'Duration', value: 'Allow about 1–2 hours for the approach, a cautious cave visit and time at the natural pool.' },
      { label: 'Difficulty', value: 'Moderate for a casual visitor: dark, humid and slippery. Stay on the obvious visitor route and turn around when navigation becomes uncertain.' }
    ],
    kicker: 'WILD CAVE · HEADLAMP · QUIET',
    summary: 'A darker, less-developed cave for travellers who want a quieter route and are comfortable on natural ground.',
    duration: '1–2 hours',
    route: 'Countryside route from Vang Vieng'
  }),
  makeLandmark({
    slug: 'blue-lagoon-1-vang-vieng',
    name: 'Blue Lagoon 1 · Tham Phu Kham',
    number: '03',
    region: 'West of Vang Vieng · Tham Phu Kham',
    description: 'The original and busiest Vang Vieng lagoon, paired with Tham Phu Kham Cave so the outing combines swimming, a steep cave approach and one of the area’s best-known underground chambers.',
    mapsQuery: 'Blue Lagoon 1 Tham Phu Kham Vang Vieng Laos',
    image: vangViengKarst,
    facts: [
      { label: 'Getting there', value: 'Blue Lagoon 1 is roughly 7 km west of town and is straightforward by scooter, tuk-tuk or organised transport.' },
      { label: 'Best time', value: 'Arrive early if you want calmer water and a quieter cave. Peak tour hours can make the compact lagoon very crowded.' },
      { label: 'What to bring', value: 'Swimwear, towel, sun protection, water and real shoes plus a torch or headlamp if you climb into Tham Phu Kham.' },
      { label: 'Price', value: 'Recent 2026 references commonly place entry around 20,000–30,000 kip. Reconfirm whether cave and lagoon access are bundled.' },
      { label: 'Duration', value: 'Allow 2–4 hours when combining the lagoon with Tham Phu Kham Cave.' },
      { label: 'Safety', value: 'Check the landing zone and depth before using jumping trees or platforms. In the cave, stay on the obvious visitor route and keep wet shoes off slick limestone when possible.' }
    ],
    kicker: 'LAGOON · CAVE · CLASSIC',
    summary: 'The classic lagoon-and-cave combination: busy, easy to reach and more complete when Tham Phu Kham gets as much time as the swim.',
    duration: '2–4 hours',
    route: 'About 7 km west of town'
  }),
  makeLandmark({
    slug: 'blue-lagoon-2-vang-vieng',
    name: 'Blue Lagoon 2',
    number: '04',
    region: 'Western Vang Vieng countryside',
    description: 'A broader developed swimming stop with several pools and more room than Lagoon 1, useful for travellers who want an uncomplicated afternoon of water, shade and simple activities.',
    mapsQuery: 'Blue Lagoon 2 Vang Vieng Laos',
    image: namSong,
    facts: [
      { label: 'Getting there', value: 'Current guides place Blue Lagoon 2 roughly 12 km west of Vang Vieng. The route fits naturally into a western countryside scooter or tuk-tuk day.' },
      { label: 'Best time', value: 'Late morning through afternoon works well; arrive earlier if you want the jumping areas before larger groups arrive.' },
      { label: 'What to bring', value: 'Swimwear, towel, cash, sun protection and water. Use secure footwear around wet platforms and banks.' },
      { label: 'Price', value: 'Recent 2026 references list roughly 20,000 kip. Reconfirm locally because access and individual activities can change.' },
      { label: 'Duration', value: 'Allow 2–4 hours, especially if you plan to eat or spend time across several pools.' },
      { label: 'Difficulty', value: 'Easy. The practical risks are wet surfaces, crowded jump zones and road conditions rather than a demanding walk.' }
    ],
    kicker: 'LAGOON · SWIM · SPACE',
    summary: 'More space and several pools make Lagoon 2 an easy all-round swimming stop west of town.',
    duration: '2–4 hours',
    route: 'About 12 km west of town'
  }),
  makeLandmark({
    slug: 'vang-vieng-inter-park-lagoon-9',
    name: 'Vang Vieng Inter Park · Blue Lagoon 9',
    number: '05',
    region: 'Western Vang Vieng countryside · Inter Park',
    description: 'A large lagoon-and-nature park roughly 20 km west of Vang Vieng, with several water holes, broad limestone scenery, food facilities and a noticeably different rhythm from the classic lagoon cluster.',
    mapsQuery: 'Vang Vieng Inter Park Blue Lagoon 9 Laos',
    image: vangViengCliffs,
    facts: [
      { label: 'Getting there', value: 'Blue Lagoon 9 is west of Vang Vieng, not east as the old Atlas seed stated. Current 2026 guides place Inter Park roughly 20 km from town.' },
      { label: 'Best time', value: 'Keep at least half a day so the longer countryside ride and the park both have enough time. Road conditions matter after rain.' },
      { label: 'What to bring', value: 'Swimwear, towel, cash, water and sun protection. Keep an offline route because the farther western roads are less useful to navigate by memory alone.' },
      { label: 'Price', value: 'Recent 2026 references list around 20,000 kip, with food and other services extra. Reconfirm at the entrance.' },
      { label: 'Duration', value: 'Half a day is more coherent than treating it as a quick roadside swim.' },
      { label: 'Visit style', value: 'Choose it for space, several water areas and a more local atmosphere rather than for a single iconic lagoon photograph.' }
    ],
    kicker: 'INTER PARK · LAGOON · FARTHER WEST',
    summary: 'Ride farther west for a larger park, several water holes and more breathing room than the classic lagoon stops.',
    duration: 'Half day',
    route: 'About 20 km west of town'
  }),
  makeLandmark({
    slug: 'pha-ngern-silver-cliff-viewpoint',
    name: 'Pha Ngern · Silver Cliff Viewpoint',
    number: '06',
    region: 'West of Vang Vieng · Silver Cliff',
    description: 'A steeper and more sustained viewpoint hike than Nam Xay, with multiple levels: a lower Silver Cliff viewpoint associated with a buggy and Lao flag, then higher viewpoints farther up the mountain.',
    mapsQuery: 'Pha Ngern Silver Cliff Viewpoint Vang Vieng Laos',
    image: vangViengKarst,
    facts: [
      { label: 'Trail', value: 'Recent reports put the lower viewpoint at roughly 30–45 minutes of steep climbing, with another substantial ascent if continuing to higher Pha Ngern viewpoints.' },
      { label: 'Best time', value: 'Early morning is cooler. Sunset is possible but requires a headlamp and enough margin to descend the roughest sections before complete darkness.' },
      { label: 'What to bring', value: 'Shoes with grip, water, sun protection and a headlamp. The trail can remain muddy after rain and uses steep rock, dirt and ropes.' },
      { label: 'Price', value: 'Recent 2025–2026 reports commonly place entry around 20,000 kip. Treat this as a current reference, not a permanent tariff.' },
      { label: 'Duration', value: 'Allow 2–4 hours depending on whether you stop at Silver Cliff or continue to the higher summit.' },
      { label: 'Photo landmark', value: 'Pha Ngern’s current lower-viewpoint prop is a buggy with Lao flag. The famous old motorcycle belongs to Nam Xay, not Pha Ngern.' }
    ],
    kicker: 'VIEWPOINT · STEEP · MULTI-LEVEL',
    summary: 'A harder multi-level karst hike with fewer crowds and more climbing than the famous Nam Xay summit.',
    duration: '2–4 hours',
    route: 'West of Vang Vieng'
  }),
  makeLandmark({
    slug: 'blue-lagoon-3-vang-vieng',
    name: 'Blue Lagoon 3',
    number: '07',
    region: 'Farther west of Vang Vieng',
    description: 'A popular but looser countryside lagoon reached farther west, combining clear water, simple food, rope swings and jumping features with a longer, sometimes rougher ride from town.',
    mapsQuery: 'Blue Lagoon 3 Vang Vieng Laos',
    image: namSong,
    facts: [
      { label: 'Getting there', value: 'Current 2026 guides place Lagoon 3 roughly 16 km west of town. Expect rougher or unpaved sections and slow down after rain.' },
      { label: 'Best time', value: 'Keep it inside a longer western scooter or tuk-tuk day rather than rushing out and back only for the swim.' },
      { label: 'What to bring', value: 'Swimwear, towel, cash, water and sun protection. Secure footwear helps on wet banks and around jumping areas.' },
      { label: 'Price', value: 'Recent 2026 references commonly list around 30,000 kip. Reconfirm at the site.' },
      { label: 'Duration', value: 'Allow 2–4 hours at the lagoon, longer when combined with the countryside road.' },
      { label: 'Safety', value: 'Check depth and landing zones before using rope swings or platforms, and do not let a planned arrival time encourage fast riding on poor roads.' }
    ],
    kicker: 'LAGOON · ROPE SWING · LONGER ROAD',
    summary: 'A farther-west swimming stop where the countryside road is almost as important as the lagoon.',
    duration: '2–4 hours',
    route: 'About 16 km west of town'
  }),
  makeLandmark({
    slug: 'nam-xay-viewpoint',
    name: 'Nam Xay Viewpoint',
    number: '08',
    region: 'Western rice fields · Vang Vieng',
    description: 'Vang Vieng’s iconic short-and-steep viewpoint hike, famous for the old motorcycle at the summit and a 360-degree view over rice fields and limestone towers.',
    mapsQuery: 'Nam Xay Viewpoint Vang Vieng Laos',
    image: vangViengKarst,
    facts: [
      { label: 'Climb', value: 'Recent 2026 guides consistently describe roughly 30–40 minutes of steep climbing for a fit visitor, using roots, rocks and rough steps.' },
      { label: 'Best time', value: 'Sunrise is cooler and often quieter; sunset gives warmer light but more crowds and a darker descent.' },
      { label: 'What to bring', value: 'Shoes with grip, water and a headlamp if visiting near sunrise or sunset. Flip-flops are a poor choice for the steep descent.' },
      { label: 'Price', value: 'Recent 2026 reports range around 20,000–30,000 kip. Reconfirm at the trailhead.' },
      { label: 'Duration', value: 'Allow roughly 1.5–2.5 hours including the climb, summit time and descent.' },
      { label: 'Summit', value: 'The old motorcycle belongs here. Expect a queue for the same photograph at peak light; the panorama is much larger than the prop.' }
    ],
    kicker: 'VIEWPOINT · MOTORBIKE · ICONIC',
    summary: 'A short, hard climb to the famous motorcycle summit and one of Vang Vieng’s broadest valley views.',
    duration: '1.5–2.5 hours',
    route: 'Western countryside trailhead'
  }),
  makeLandmark({
    slug: 'phapoungkham-cave-viewpoint',
    name: 'Phapoungkham Cave & Viewpoints',
    number: '09',
    region: 'Western Vang Vieng countryside',
    description: 'A compact cave-and-viewpoint stop with two short summit branches, one associated with an airplane installation and the other with a white Pegasus, generally quieter than Nam Xay.',
    mapsQuery: 'Phapoungkham Cave Viewpoint Vang Vieng Laos',
    image: vangViengCliffs,
    facts: [
      { label: 'Two viewpoints', value: 'Recent 2026 guides describe a shared trail splitting toward an airplane viewpoint and a Pegasus viewpoint. Many visitors reach the first in roughly 20–25 minutes and the second shortly after.' },
      { label: 'Best time', value: 'Morning is cooler; sunset can work with a headlamp and an early enough descent. Rain makes the steep ground and ladders more serious.' },
      { label: 'What to bring', value: 'Shoes with grip, water, a headlamp for the cave or late descent and enough time to visit both summits without rushing.' },
      { label: 'Price', value: 'Recent 2026 reports range around 20,000–30,000 kip. Reconfirm locally.' },
      { label: 'Duration', value: 'Allow about 1.5–3 hours for the cave and both viewpoints.' },
      { label: 'Animal welfare', value: 'Recent visitor guides have reported a chained monkey near the site. If present, avoid paid handling or photo interactions; the trail and landscape are the attraction.' }
    ],
    kicker: 'CAVE · AIRPLANE · PEGASUS',
    summary: 'One trailhead, a small cave and two short summit branches with distinctive installations and fewer crowds.',
    duration: '1.5–3 hours',
    route: 'West of Vang Vieng'
  }),
  makeLandmark({
    slug: 'kaeng-nyui-waterfall',
    name: 'Kaeng Nyui Waterfall',
    number: '10',
    region: 'Ban Naduang · east of Vang Vieng',
    description: 'A village-managed forest and stream walk east of Vang Vieng, building through smaller cascades and swimming pools toward a main waterfall of roughly 30 metres.',
    mapsQuery: 'Kaeng Nyui Waterfall Vang Vieng Laos',
    image: woodenBridge,
    facts: [
      { label: 'Getting there', value: 'Kaeng Nyui is the documented waterfall east of Vang Vieng near Ban Naduang. The old Atlas “Phamone Waterfall” seed was not sufficiently verifiable and has been replaced.' },
      { label: 'Best time', value: 'Flow is strongest in wetter months. Around the driest part of April and May the main waterfall can reduce dramatically, so ask locally if water volume is the priority.' },
      { label: 'What to bring', value: 'Shoes with grip, water, swimwear if using the pools, insect protection and a light rain layer in wetter weather.' },
      { label: 'Price', value: 'Community access and parking arrangements can change. Carry small Lao kip and confirm the current contribution at the entrance.' },
      { label: 'Duration', value: 'Allow half a day for the stream walk, smaller cascades, main waterfall and a swim without rushing.' },
      { label: 'Community site', value: 'Ban Naduang villagers traditionally manage paths, bridges, swimming areas, parking and local food services. Spend and behave as a guest at a community-run site.' }
    ],
    kicker: 'WATERFALL · FOREST · COMMUNITY',
    summary: 'Follow a community-managed stream route through smaller falls and pools to the main Kaeng Nyui cascade.',
    duration: 'Half day',
    route: 'East of town via Ban Naduang'
  }),
  makeLandmark({
    slug: 'adams-climbing-school',
    name: "Adam's Climbing School",
    number: '11',
    region: 'Vang Vieng limestone climbing areas',
    description: 'A current climbing-school option for learning or refining outdoor limestone skills with instruction rather than treating Vang Vieng’s cliffs as an improvised climbing playground.',
    mapsQuery: "Adam's Climbing School Vang Vieng Laos",
    image: vangViengCliffs,
    facts: [
      { label: 'Who it suits', value: 'Current 2026 listings describe beginner instruction as well as guided climbing for people with experience. Tell the instructor your real level before choosing routes.' },
      { label: 'Best time', value: 'Climbing depends on heat, rain and rock condition. Let the instructor change sector or cancel when wet rock, lightning or weather makes the plan unsuitable.' },
      { label: 'What to bring', value: 'Comfortable climbing clothing, water and sun protection. Confirm whether helmet, harness, shoes, ropes and transport are included.' },
      { label: 'Price', value: 'Confirm the current half-day, full-day or multi-day course price directly; equipment and group size can change the package.' },
      { label: 'Duration', value: 'Half day to full day, with longer instruction available for travellers who want more than a one-off climb.' },
      { label: 'Safety', value: 'Use the school’s briefing for knots, belaying, clipping, lowering and abseiling. The value is competent instruction, not only reaching the top of a route.' }
    ],
    kicker: 'CLIMBING · INSTRUCTION · LIMESTONE',
    summary: 'Learn on Vang Vieng limestone with a current climbing school instead of improvising on unfamiliar outdoor routes.',
    duration: 'Half day to full day',
    route: 'Book with the climbing school'
  }),
  makeLandmark({
    slug: 'vang-vieng-zipline',
    name: 'Vang Vieng Zipline',
    number: '12',
    region: 'Vang Vieng adventure areas',
    description: 'A current operator-led aerial activity that can be booked as a standalone course or bundled with caves, kayaking and lagoons. The old Atlas “Seven Travel” attribution has been removed because it could not be reliably verified.',
    mapsQuery: 'Zipline Vang Vieng Laos',
    image: vangViengCliffs,
    facts: [
      { label: 'Choose the course', value: 'Current operators sell very different products: shorter zipline circuits and 6–8 hour combination days with caves, kayaking or lagoons. Compare the actual itinerary before the price.' },
      { label: 'Best time', value: 'Weather and operator judgement control the course. High wind, lightning, heavy rain or wet platforms can change or cancel the activity.' },
      { label: 'What to wear', value: 'Closed shoes and comfortable clothes suitable under a harness. Remove or secure loose items before entering the course.' },
      { label: 'Price', value: 'Packages vary widely by course, transfers, lunch and bundled activities. Confirm exactly what is included with the current operator.' },
      { label: 'Duration', value: 'From a shorter standalone course to a full 6–8 hour adventure package.' },
      { label: 'Safety', value: 'Let staff fit and check helmet and harness, follow their clipping sequence and confirm age, height or weight rules when relevant to your group.' }
    ],
    kicker: 'ZIPLINE · GUIDED · ADVENTURE',
    summary: 'Choose a current zipline operator by course, equipment and briefing rather than an unverified old business name.',
    duration: 'Short course to full day',
    route: 'Book with a current Vang Vieng operator'
  }),
  makeLandmark({
    slug: 'tham-khan-cave',
    name: 'Tham Khan Cave',
    number: '13',
    region: 'Western Vang Vieng countryside',
    description: 'A smaller cave with a seated Buddha at the entrance and a local archaeological story tied to prehistoric tools and a khan, or silver bow, found inside the cavern.',
    mapsQuery: 'Tham Khan Cave Vang Vieng Laos',
    image: woodenBridge,
    facts: [
      { label: 'What makes it different', value: 'Historical tourism documentation describes prehistoric tools and a khan, or silver bow, found in the cave, along with a seated Buddha around 1.9 m high at the entrance.' },
      { label: 'Getting there', value: 'Use the current map pin and western countryside signs. Old written directions rely on bridges and local landmarks that have changed over time.' },
      { label: 'What to bring', value: 'A proper headlamp, shoes with grip, water and an offline map. Do not rely on a phone light in the unlit interior.' },
      { label: 'Price', value: 'No dependable current entrance fee could be verified. Carry small cash and confirm locally.' },
      { label: 'Duration', value: 'Allow around 1–2 hours for the approach and visitor section of the cave.' },
      { label: 'Difficulty', value: 'Moderate. Older sources describe a roughly 200 m cavern, but current maintenance is not well documented; stay on the obvious route and do not search for side exits.' }
    ],
    kicker: 'CAVE · BUDDHA · LOCAL HISTORY',
    summary: 'A quieter cave whose silver-bow story and entrance Buddha give the stop more context than a generic dark passage.',
    duration: '1–2 hours',
    route: 'Western countryside route'
  }),
  makeLandmark({
    slug: 'tham-non-nang-fa-cave',
    name: 'Tham Non–Tham Nang Fa',
    number: '14',
    region: 'Vang Vieng · community eco-tourism cave',
    description: 'A distinct developed cave attraction with a suspension-bridge approach, cool chambers, installed lighting and an active community-linked conservation model documented by Lao state media in 2026.',
    mapsQuery: 'Tham Non Tham Nang Fa Vang Vieng Laos',
    image: woodenBridge,
    facts: [
      { label: 'Not Tham Nam', value: 'Tham Non–Tham Nang Fa is a distinct attraction. The old Atlas “Tham None” seed wrongly blurred it with water-cave tubing and has been corrected.' },
      { label: 'Development', value: 'KPL reported in July 2026 that development began in 2014 and the attraction opened to visitors in 2016.' },
      { label: 'What to expect', value: 'Visitors cross a suspension bridge before entering naturally cool chambers with stalactites, stalagmites and carefully installed lighting.' },
      { label: 'Price', value: 'Confirm the current entrance and any bundled activities at the site; current public reporting does not justify freezing one universal fee.' },
      { label: 'Duration', value: 'Allow roughly 1–2 hours for the bridge approach and developed cave route.' },
      { label: 'Conservation', value: 'Stay on the maintained route, do not touch formations and follow any current closures. The site is promoted as a model linking tourism, environmental protection and local development.' }
    ],
    kicker: 'CAVE · SUSPENSION BRIDGE · COMMUNITY',
    summary: 'A developed and community-linked cave experience that should not be confused with the tubing route at Tham Nam.',
    duration: '1–2 hours',
    route: 'Vang Vieng cave area'
  }),
  makeLandmark({
    slug: 'tham-chang-cave',
    name: 'Tham Chang Cave',
    number: '15',
    region: 'Southwest Vang Vieng · Nam Song',
    description: 'The easiest major cave from town: a bridge crossing, a long stair climb, a developed interior, an elevated view across the Nam Song valley and a spring at the base of the cliff.',
    mapsQuery: 'Tham Chang Cave Vang Vieng Laos',
    image: namSong,
    facts: [
      { label: 'Getting there', value: 'Tham Chang sits on the southern edge of Vang Vieng and can be reached without committing to a long countryside scooter route.' },
      { label: 'Stairs', value: 'Recent visitor reports count roughly 150 steps to the cave entrance. The elevated viewpoint is part of the reward before entering the chambers.' },
      { label: 'What to bring', value: 'Water and shoes with grip for the stairs and damp surfaces. The main route is developed and lit, but a small personal light is still sensible.' },
      { label: 'Price', value: 'Entrance and bridge arrangements have varied between reports. Carry cash and confirm the current total before entering.' },
      { label: 'Duration', value: 'Allow about 1.5–3 hours from central Vang Vieng including the walk, stairs, cave, viewpoint and spring.' },
      { label: 'Local memory', value: 'Tourism Laos records the cave as a place villagers used for refuge during periods of conflict. Treat the history as part of the site rather than only a geological stop.' }
    ],
    kicker: 'CAVE · STAIRS · CLOSE TO TOWN',
    summary: 'The simplest major cave outing from town, combining developed chambers, a cliff viewpoint and local historical memory.',
    duration: '1.5–3 hours',
    route: 'South edge of Vang Vieng'
  }),
  makeLandmark({
    slug: 'tham-nam-water-cave',
    name: 'Tham Nam Water Cave',
    number: '16',
    region: 'Northern Vang Vieng cave area',
    description: 'The classic cave-tubing experience north of Vang Vieng, where visitors sit in inner tubes and use fixed ropes and headlamps to move through a water-filled underground passage.',
    mapsQuery: 'Tham Nam Water Cave Vang Vieng Laos',
    image: namSong,
    facts: [
      { label: 'How it works', value: 'Current 2026 reports describe roughly 400 m of water-filled passage. Visitors pull themselves along fixed ropes in tubes, with some shallower wading sections.' },
      { label: 'Best time', value: 'Water level changes the experience. Follow the current site or operator decision rather than assuming a dry-season video represents today’s cave.' },
      { label: 'What to bring', value: 'Clothes that can stay wet, secure footwear and a dry bag for valuables. A functioning headlamp is essential once daylight disappears.' },
      { label: 'Price', value: 'A May 2026 visitor report put cave entry around 40,000 kip. Tour packages cost more and may bundle kayaking, zipline, lunch and transfers.' },
      { label: 'Duration', value: 'About 1 hour in the cave, or half to full day when combined with other northern adventure activities.' },
      { label: 'Safety', value: 'Use the supplied life jacket when required, keep both hands available for the rope and tell the guide before entering if you are not confident in water.' }
    ],
    kicker: 'WATER CAVE · TUBE · ROPE',
    summary: 'Float and pull through a dark water cave using tubes, fixed ropes and headlamps on a guided northern excursion.',
    duration: '1 hour cave · longer as tour',
    route: 'North of Vang Vieng'
  }),
  {
    slug: 'phou-bia-from-vang-vieng',
    modalId: 'phou-bia-from-vang-vieng-modal',
    name: 'Phou Bia',
    country: 'Laos',
    fieldCardNumber: '17',
    region: 'Xaysomboun Province · Central Laos',
    description: 'Laos’s highest mountain, roughly 2,820 metres, belongs in a remote Xaysomboun expedition rather than a normal Vang Vieng day trip. Current official guidance still requires travellers to confirm which areas are open before attempting any route.',
    mapsUrl: mapsSearch('Phou Bia Xaysomboun Laos'),
    gallery: [
      commons(
        'Phou Bia seen from Xaysomboun.jpg',
        'Phou Bia mountain seen from Xaysomboun in Laos',
        'Boroli',
        'CC BY-SA 4.0',
        1800
      ),
      vangViengKarst,
      namSong
    ],
    facts: [
      { label: 'What it is', value: 'Tourism Laos lists Phou Bia at roughly 2,820 m in Anouvong District, making it the highest mountain in Laos.' },
      { label: 'Access first', value: 'Current Laos ecotourism guidance says some parts of Xaysomboun remain off limits. Ask the provincial tourism office or a licensed organiser what is actually open before leaving Vang Vieng.' },
      { label: 'What to bring', value: 'Remote-mountain layers, strong footwear, water, cash, communication backup and equipment chosen with the current organiser and route.' },
      { label: 'Price', value: 'There is no standard visitor fee. Licensed transport, guides, permissions and overnight logistics can dominate the cost.' },
      { label: 'Duration', value: 'Treat the highlands as a multi-day expedition. A current 2026 enduro product uses six days from Vang Vieng through Xaysomboun, but that does not prove a summit hike is open.' },
      { label: 'Difficulty', value: 'High and logistically complex. Distinguish a permitted journey through the Phou Bia highlands from an actual authorised summit ascent.' }
    ],
    cityContext: {
      order: 17,
      kicker: 'HIGHEST PEAK · REMOTE · XAYSOMBOUN',
      summary: 'The roof of Laos belongs in the wider journey notebook only after current access, roads and permissions have been confirmed.',
      duration: 'Multi-day expedition',
      route: 'Remote Xaysomboun route'
    }
  }
];
