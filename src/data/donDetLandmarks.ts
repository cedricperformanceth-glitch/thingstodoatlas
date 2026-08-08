import type { CityLandmark, LaosLandmark } from './laosLandmarks';
import { laosLandmarks } from './laosLandmarks';

const requireLandmark = (slug: string): LaosLandmark => {
  const landmark = laosLandmarks.find((item) => item.slug === slug);
  if (!landmark) throw new Error(`Missing Laos landmark: ${slug}`);
  return landmark;
};

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const commons = (fileName: string, alt: string, author: string, license: string, width = 1600) => ({
  src: `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}?width=${width}`,
  alt,
  sourcePage: `https://commons.wikimedia.org/wiki/File:${fileName.replaceAll(' ', '_')}`,
  author,
  license
});

const donDetRiver = commons(
  'Don-det-laos.JPG',
  'Calm Mekong water and a small boat near Don Det, used as Si Phan Don river context',
  'Robin Selima',
  'CC0 1.0',
  1800
);
const donKhonBeach = commons(
  'Main beach of Don Khon in Laos.jpg',
  'Sandy Mekong beach on Don Khon, used as Don Khon beach context',
  'Basile Morin',
  'CC BY-SA 4.0',
  1800
);
const liPhiPhoto = commons(
  'Li Phi Falls.jpg',
  'Li Phi and Somphamit rapids on Don Khon in Si Phan Don',
  'Basile Morin',
  'CC BY-SA 4.0',
  1800
);
const liPhiPublicDomain = commons(
  'Mekong dondet.JPG',
  'Tad Somphamit rapids on the Mekong at Don Khon',
  'Gorgo',
  'Public domain',
  1600
);
const ziplinePhoto = commons(
  'Zip line over the falls of Li Phi at sunrise in Don Khon Laos.jpg',
  'Mekong Fly zipline crossing the Li Phi and Somphamit waterfall landscape at sunrise',
  'Basile Morin',
  'CC BY-SA 4.0',
  1800
);

const khonePhapheng = requireLandmark('khone-phapheng-falls');

export const donDetLandmarks: CityLandmark[] = [
  {
    slug: 'don-khon-railway-bridge',
    modalId: 'don-khon-railway-bridge-modal',
    name: 'Don Khon & Old Railway Bridge',
    country: 'Laos',
    fieldCardNumber: '01',
    region: 'Don Det–Don Khon · Si Phan Don',
    description: 'The old railway bridge links Don Det with Don Khon and opens a slower island route of bicycles, village paths and traces of the former portage railway built to bypass the Mekong rapids.',
    mapsUrl: mapsSearch('Old French Railway Bridge Don Det Don Khon Laos'),
    gallery: [
      commons(
        'Si Phan Don - bridge from Don Det to Don Khone - Aug 2024.jpg',
        'The historic bridge connecting Don Det and Don Khon in Si Phan Don',
        'Dominic Nelson',
        'CC BY-SA 4.0',
        1600
      )
    ],
    facts: [
      { label: 'Getting there', value: 'Follow the island path south from Don Det by bicycle or on foot until the bridge crossing to Don Khon.' },
      { label: 'Best time', value: 'Early morning and late afternoon are cooler and give the island roads a slower rhythm.' },
      { label: 'What to wear', value: 'Light clothing, sun protection and comfortable shoes or sandals suitable for cycling and uneven paths.' },
      { label: 'Price', value: 'There is no single route ticket; individual sights or local services on Don Khon may charge separately.' },
      { label: 'Duration', value: 'Allow half a day for the bridge, village paths and a relaxed loop across Don Khon.' },
      { label: 'Difficulty', value: 'Easy, with mostly flat island travel and occasional rough or muddy sections after rain.' }
    ],
    cityContext: {
      order: 1,
      kicker: 'BICYCLE · BRIDGE · ISLAND ROAD',
      summary: 'Cross the old railway bridge into Don Khon and follow the island paths beyond the busier edge of Don Det.',
      duration: 'Half day',
      route: 'Cycle or walk from Don Det'
    }
  },
  {
    ...khonePhapheng,
    fieldCardNumber: '02',
    cityContext: {
      order: 2,
      kicker: 'WATERFALL · SCALE · SOUTH',
      summary: 'Leave the island for the immense Khone Phapheng cataracts, where the Mekong breaks apart close to the Cambodian border.',
      duration: 'Half day',
      route: 'Boat to Nakasang, then road transfer'
    }
  },
  {
    slug: 'cambodia-from-don-det',
    modalId: 'cambodia-from-don-det-modal',
    name: 'Cambodia',
    country: 'Laos → Cambodia',
    fieldCardNumber: '03',
    region: 'Nong Nok Khiene · Trapaing Kreal · Stung Treng',
    description: 'Don Det can be the final island chapter before travelling overland into Cambodia. The route normally continues through Nakasang to the international checkpoint and onward toward Stung Treng, but transport, visa acceptance and border procedures must be confirmed before departure.',
    mapsUrl: mapsSearch('Nong Nok Khiene Trapaing Kreal border crossing'),
    gallery: [
      commons(
        'Border control Laos-Cambodia (2).jpg',
        'The international border crossing between southern Laos and Stung Treng Province in Cambodia',
        'Pierre André',
        'CC BY-SA 4.0',
        1600
      )
    ],
    facts: [
      { label: 'Getting there', value: 'Travel from Don Det to Nakasang, then continue south by arranged minivan or road transport to the Nong Nok Khiene–Trapaing Kreal checkpoint.' },
      { label: 'Best time', value: 'Cross during daylight and leave a generous time buffer. Border and transport schedules can change.' },
      { label: 'What to wear', value: 'Light travel clothing, with passport, visa documents, cash and electronics protected from rain and boat spray.' },
      { label: 'Price', value: 'Transport and visa costs depend on nationality, visa type and the operator used. Confirm the complete price before leaving Don Det.' },
      { label: 'Duration', value: 'Treat this as a transfer day rather than a short excursion, especially when continuing beyond Stung Treng.' },
      { label: 'Difficulty', value: 'Logistically moderate. Check that your visa is accepted at this land checkpoint and reconfirm the route shortly before travel.' }
    ],
    cityContext: {
      order: 3,
      kicker: 'BORDER · STUNG TRENG · ONWARD',
      summary: 'Use Don Det as the final Lao stop before the overland route south to the Cambodian border and Stung Treng.',
      duration: 'Transfer day',
      route: 'Via Nakasang and the land border'
    }
  },
  {
    slug: 'e-toud-waterfall',
    modalId: 'e-toud-waterfall-modal',
    name: 'E-Toud Waterfall',
    country: 'Laos',
    fieldCardNumber: '04',
    region: 'Southern Si Phan Don · kayak route from Don Det',
    description: 'A small Mekong cataract normally visited inside the guided full-day kayak route from Don Det rather than as an independent road or walking attraction.',
    mapsUrl: mapsSearch('E Toud Waterfall Si Phan Don Laos'),
    gallery: [donDetRiver],
    facts: [
      { label: 'Getting there', value: 'Use an organised kayak tour from Don Det. Recent route descriptions place E-Toud after paddling toward Don Som and an overland transfer; it is not a normal bicycle stop.' },
      { label: 'Best time', value: 'Daylight only, with the operator choosing the route according to river level and current. Do not demand a fixed line through the river when conditions change.' },
      { label: 'What to bring', value: 'Life jacket, sun protection, clothes and footwear that can get wet, optional dry clothes and a genuinely sealed bag for electronics.' },
      { label: 'Price', value: 'Usually included in a guided full-day kayak package. Confirm the complete tour price, lunch, dry bag and return transport before booking.' },
      { label: 'Duration', value: 'The waterfall is a short stop inside a full-day river excursion rather than a standalone half-day attraction.' },
      { label: 'Difficulty', value: 'Moderate and current-dependent. Strong sections and capsizes are documented on the wider route, so follow the guide and keep the life jacket on.' }
    ],
    cityContext: {
      order: 4,
      kicker: 'KAYAK · CATARACT · RIVER DAY',
      summary: 'A small waterfall stop reached from the Mekong during the guided kayak route through the southern islands.',
      duration: 'Full-day kayak route',
      route: 'Guided kayak from Don Det'
    }
  },
  {
    slug: 'don-som-island',
    modalId: 'don-som-island-modal',
    name: 'Don Som',
    country: 'Laos',
    fieldCardNumber: '05',
    region: 'Don Som · Si Phan Don · Khong District',
    description: 'The second-largest island of Si Phan Don and a much quieter agricultural neighbour north of Don Det, reached by local boat and explored slowly by bicycle or on foot.',
    mapsUrl: mapsSearch('Don Som Si Phan Don Laos'),
    gallery: [donDetRiver],
    facts: [
      { label: 'Getting there', value: 'Ask the boat drivers at the central Don Det pier for Don Som. Current local information describes a short inexpensive crossing, with a little extra when taking a bicycle.' },
      { label: 'Return boat', value: 'Arrange a pickup time before the driver leaves. Finding an immediate return from Don Som can be less predictable than crossing from Don Det.' },
      { label: 'What to bring', value: 'Water, sun protection, cash, an offline map and a bicycle if you want to cover more of the flat rural island roads.' },
      { label: 'Price', value: 'Local boat fares are inexpensive but change. Agree on passenger, bicycle and return prices before crossing.' },
      { label: 'Duration', value: 'Half day works for a short village ride; a full day gives the island enough time without turning it into a checklist.' },
      { label: 'Visit style', value: 'Don Som is an inhabited farming island, not a packaged attraction. Stay on public routes, ask before photographing people and respect private fields and homes.' }
    ],
    cityContext: {
      order: 5,
      kicker: 'LOCAL BOAT · RURAL ISLAND · SLOW',
      summary: 'Cross north from Don Det to a quieter farming island where the roads, villages and Mekong banks are the experience.',
      duration: 'Half day to full day',
      route: 'Local boat from Don Det pier'
    }
  },
  {
    slug: 'khone-pa-soi-waterfall',
    modalId: 'khone-pa-soi-waterfall-modal',
    name: 'Khone Pa Soi Waterfall',
    country: 'Laos',
    fieldCardNumber: '06',
    region: 'Eastern Don Khon · Don Pa Soi · Si Phan Don',
    description: 'A smaller, quieter waterfall route on the eastern side of Don Khon, associated with rough island tracks, a wooden suspension bridge and traces of the old river channel known as the Teak Way.',
    mapsUrl: mapsSearch('Khone Pa Soi Waterfall Don Khon Laos'),
    gallery: [donKhonBeach],
    facts: [
      { label: 'Getting there', value: 'Cycle across the Don Det–Don Khon bridge and continue toward the eastern side of Don Khon. Older detailed guides describe rougher dirt tracks than the route to Somphamit.' },
      { label: 'Bridge condition', value: 'The suspension bridge is part of the classic route, but timber structures and paths can change after floods or repairs. Check locally before setting out.' },
      { label: 'What to bring', value: 'Water, sun protection and shoes with grip. A bicycle is usually more practical than a heavy motorbike on the rougher island tracks.' },
      { label: 'Price', value: 'No dependable current entrance price could be verified. Carry small cash for any local parking or access contribution.' },
      { label: 'Duration', value: 'Allow around 1–2 hours for the waterfall area, or longer when it is part of a wider Don Khon cycling loop.' },
      { label: 'Water safety', value: 'Do not treat old low-water swimming reports as a permanent recommendation. Ask locally and stay away from strong channels and wet rock near the falls.' }
    ],
    cityContext: {
      order: 6,
      kicker: 'WATERFALL · SUSPENSION BRIDGE · QUIET',
      summary: 'Take the rougher eastern Don Khon route to a smaller waterfall and suspension-bridge landscape away from the main park.',
      duration: '1–2 hours',
      route: 'Cycle across Don Khon'
    }
  },
  {
    slug: 'hidden-waterfall-boat-trip',
    modalId: 'hidden-waterfall-boat-trip-modal',
    name: 'Hidden Waterfall Boat Trip',
    country: 'Laos',
    fieldCardNumber: '07',
    region: 'Si Phan Don · locally arranged from the Don Det area',
    description: 'A lightly documented local boat excursion to a small hidden waterfall in the Si Phan Don channels. The experience is verified in recent 2026 guest reports, but the exact waterfall identity and route are not stable enough to publish as a fixed attraction pin.',
    mapsUrl: mapsSearch('Don Det Laos'),
    gallery: [donDetRiver],
    facts: [
      { label: 'How to arrange it', value: 'Ask a trusted Don Det or nearby island host or boat driver what hidden-waterfall route they currently offer. The organiser matters more than a generic map search.' },
      { label: 'Exact location', value: 'No dependable public source confirms one official attraction called Hidden Waterfall Sanctuary. Atlas intentionally does not publish a fake precise pin.' },
      { label: 'What to bring', value: 'Life jacket, water, sun protection, wet footwear and a waterproof bag for valuables. Ask whether walking or swimming is part of the route.' },
      { label: 'Price', value: 'Negotiate the complete boat price, number of passengers and return before departure.' },
      { label: 'Duration', value: 'Variable. Confirm the full route and expected return time with the local organiser.' },
      { label: 'Safety', value: 'Small channels change with river level. Follow the boat driver’s judgement and do not force access or swimming when current or weather is unsuitable.' }
    ],
    cityContext: {
      order: 7,
      kicker: 'LOCAL BOAT · FIELD LEAD · WATERFALL',
      summary: 'A locally arranged boat trip that stays deliberately flexible because the exact hidden-waterfall route is not a standardised attraction.',
      duration: 'Variable boat trip',
      route: 'Arrange locally from Don Det'
    }
  },
  {
    slug: 'xai-kong-nyai-beach',
    modalId: 'xai-kong-nyai-beach-modal',
    name: 'Xai Kong Nyai Beach',
    country: 'Laos',
    fieldCardNumber: '08',
    region: 'Don Khon · Si Phan Don',
    description: 'A sandy Mekong beach on Don Khon with simple food stops and local long-tail boats, useful as the slower pause after Somphamit during a bicycle day from Don Det.',
    mapsUrl: mapsSearch('Xai Kong Nyai Beach Don Khon Laos'),
    gallery: [donKhonBeach],
    facts: [
      { label: 'Getting there', value: 'Reach Don Khon by the old railway bridge and continue downstream from the Somphamit area. Long-running island guides place the beach about a kilometre beyond the waterfall zone.' },
      { label: 'Swimming', value: 'Swimming can be possible close to shore, but fast Mekong current exists farther out. Ask locally and remain near the bank.' },
      { label: 'What is there', value: 'Simple restaurants, drinks and local long-tail boats are commonly available; these are informal services rather than a standardised beach club.' },
      { label: 'Price', value: 'Beach access is generally free. Food and boat trips cost extra and boat prices should be agreed before boarding.' },
      { label: 'Duration', value: 'Keep 1–3 hours for a swim, food and rest, or use it as the final slow stop on a Don Khon cycling loop.' },
      { label: 'What to bring', value: 'Swimwear, towel, sun protection, cash and water shoes or sandals for the riverbank.' }
    ],
    cityContext: {
      order: 8,
      kicker: 'BEACH · SWIM · DON KHON',
      summary: 'A sandy riverbank for food, a cautious swim and a slower pause after the Don Khon waterfalls.',
      duration: '1–3 hours',
      route: 'Cycle through Don Khon'
    }
  },
  {
    slug: 'si-phan-don-boat-exploration',
    modalId: 'si-phan-don-boat-exploration-modal',
    name: 'Si Phan Don by Boat',
    country: 'Laos',
    fieldCardNumber: '09',
    region: 'Si Phan Don · Four Thousand Islands',
    description: 'A flexible long-tail boat journey through the channels, inhabited islands, farming islets and working river landscape beyond Don Det and Don Khon.',
    mapsUrl: mapsSearch('Si Phan Don Four Thousand Islands Laos'),
    gallery: [donDetRiver],
    facts: [
      { label: 'How to book', value: 'Charter a local boat from Don Det and agree on the route, duration, price and return before departure. Current 2026 local information describes flexible private routes.' },
      { label: 'Possible islands', value: 'Don Som is an easy nearby crossing; Don Khon and northern islands can be combined. Don Khong is much farther upstream and may take hours against the current.' },
      { label: 'What to bring', value: 'Life jackets for everyone, sun protection, drinking water and waterproof protection for phones, passports and cameras.' },
      { label: 'Price', value: 'There is no universal island-tour price. Boat cost depends on route, duration and group size.' },
      { label: 'Duration', value: 'Half day to full day. Sunset works best when the route still returns through familiar channels before full darkness.' },
      { label: 'Respect', value: 'Not every island is a public landing. Some small islands are working farm or private spaces, so follow the boat driver’s guidance before going ashore.' }
    ],
    cityContext: {
      order: 9,
      kicker: 'BOAT · CHANNELS · ISLAND HOPPING',
      summary: 'Leave the two tourist islands behind for a custom journey through the wider working archipelago.',
      duration: 'Half day to full day',
      route: 'Charter from Don Det'
    }
  },
  {
    slug: 'li-phi-somphamit-waterfalls',
    modalId: 'li-phi-somphamit-waterfalls-modal',
    name: 'Li Phi · Somphamit Waterfalls',
    country: 'Laos',
    fieldCardNumber: '10',
    region: 'Don Khon · Si Phan Don',
    description: 'The principal waterfall park on Don Khon: a wide field of powerful Mekong rapids and rock channels reached naturally by bicycle from Don Det.',
    mapsUrl: mapsSearch('Li Phi Somphamit Waterfalls Don Khon Laos'),
    gallery: [liPhiPhoto, liPhiPublicDomain, ziplinePhoto],
    facts: [
      { label: 'Getting there', value: 'Cycle south from Don Det, cross the historic bridge to Don Khon and follow the signs. Current local guidance puts the falls roughly 1.5 km beyond the bridge.' },
      { label: 'Name', value: 'Tourism Laos identifies Somphamit as the named waterfall site and explains that “Li Phi” more broadly refers to the long east–west stretch of rapids across Si Phan Don.' },
      { label: 'What to bring', value: 'Water, sun protection and footwear with grip. Stay on developed paths and behind barriers around wet rock and violent current.' },
      { label: 'Price', value: 'Current local and Wikivoyage references in 2026 put basic entrance around 30,000 kip. Optional zipline or suspended-walkway products cost extra and change more often.' },
      { label: 'Duration', value: 'Allow around 1.5–3 hours for the viewpoints and walking paths, longer if you add food, the beach or the zipline.' },
      { label: 'River safety', value: 'Do not swim in or approach the main waterfall channels. Strong current and fatal accidents are documented; use a calmer beach farther downstream if swimming is the goal.' }
    ],
    cityContext: {
      order: 10,
      kicker: 'RAPIDS · DON KHON · MEKONG',
      summary: 'Cycle from Don Det to the main Don Khon waterfall park and watch the Mekong break through a field of rock channels.',
      duration: '1.5–3 hours',
      route: 'Bicycle via the old bridge'
    }
  },
  {
    slug: 'mekong-fly-zipline',
    modalId: 'mekong-fly-zipline-modal',
    name: 'The Mekong Fly Zipline',
    country: 'Laos',
    fieldCardNumber: '11',
    region: 'Somphamit Waterfalls Park · Don Khon',
    description: 'A guided aerial course integrated into the Somphamit waterfall landscape, with seven ziplines, three suspended monkey bridges and roughly 1.8 km of course above the rapids.',
    mapsUrl: mapsSearch('The Mekong Fly Zipline Don Khon Laos'),
    gallery: [ziplinePhoto, liPhiPhoto],
    facts: [
      { label: 'Course', value: 'Current 2026 operator listings describe 7 ziplines and 3 monkey bridges across roughly 1.8 km above the Somphamit waterfall area.' },
      { label: 'Opening', value: 'Current listings show the activity operating in 2026, but published hours differ. Confirm opening and weather conditions at the park before paying.' },
      { label: 'What to wear', value: 'Closed shoes, secure pockets and clothing that works with a harness. Follow staff fitting and clipping instructions exactly.' },
      { label: 'Price', value: 'The zipline has a separate activity fee. Online prices have changed over time, so confirm the current package and whether park entry is separate.' },
      { label: 'Duration', value: 'Allow roughly 1–2 hours for the aerial course, plus separate time for the Somphamit waterfall viewpoints.' },
      { label: 'Requirements', value: 'Current sources do not publish one reliable universal age, height or weight rule. Ask the operator which restrictions apply before harnessing up.' }
    ],
    cityContext: {
      order: 11,
      kicker: 'ZIPLINE · RAPIDS · HEIGHT',
      summary: 'Cross the Somphamit landscape on a multi-stage aerial course above the Mekong rapids.',
      duration: '1–2 hours plus waterfall',
      route: 'Inside Somphamit park · Don Khon'
    }
  }
];
