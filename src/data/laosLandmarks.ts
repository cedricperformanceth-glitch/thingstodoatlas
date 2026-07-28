export interface LandmarkGalleryItem {
  src: string;
  alt: string;
  sourcePage?: string;
  author?: string;
  license?: string;
}

export interface LandmarkFact {
  label: string;
  value: string;
}

export interface CityLandmarkContext {
  order: number;
  kicker: string;
  summary: string;
  duration: string;
  route: string;
}

export interface LaosLandmark {
  slug: string;
  modalId: string;
  name: string;
  country: string;
  fieldCardNumber: string;
  region: string;
  description: string;
  mapsUrl: string;
  gallery: LandmarkGalleryItem[];
  facts: LandmarkFact[];
  cityContexts?: Record<string, CityLandmarkContext>;
}

export interface CityLandmark extends LaosLandmark {
  cityContext: CityLandmarkContext;
}

export const laosLandmarks: LaosLandmark[] = [
  {
    slug: 'bolaven-plateau',
    modalId: 'bolaven-plateau-modal',
    name: 'Bolaven Plateau',
    country: 'Laos',
    fieldCardNumber: '03',
    region: 'Champasak & Salavan · Southern Laos',
    description: 'A highland road of coffee farms, forest, villages and waterfalls. The plateau works best as a journey between stops rather than a single attraction.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bolaven%20Plateau%2C%20Laos',
    gallery: [
      {
        src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bolaven_Plateau.jpg?width=1600',
        alt: 'Waterfall and forest landscape on the Bolaven Plateau in southern Laos',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Bolaven_Plateau.jpg',
        author: 'Dario Severi',
        license: 'CC BY-SA 3.0'
      },
      {
        src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bolaven_Plateau_Waterfall.jpg?width=1600',
        alt: 'Waterfall near Paksong on the Bolaven Plateau',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Bolaven_Plateau_Waterfall.jpg',
        author: 'Clinton Phosavanh',
        license: 'CC BY-SA 4.0'
      }
    ],
    facts: [
      { label: 'Getting there', value: 'Most travellers begin the loop from Pakse by motorbike, scooter or private driver.' },
      { label: 'Best time', value: 'Start early. Rain and mist can arrive quickly, especially in the wet season.' },
      { label: 'What to wear', value: 'Light layers, a rain jacket and shoes suitable for wet waterfall paths.' },
      { label: 'Price', value: 'The plateau is open to explore; individual waterfalls and sites may charge small entrance fees.' },
      { label: 'Duration', value: 'Allow one full day for a short loop or two to three days for a slower route.' },
      { label: 'Difficulty', value: 'Easy to moderate, depending on road conditions and the waterfall trails you choose.' }
    ],
    cityContexts: {
      pakse: {
        order: 1,
        kicker: 'ROAD TRIP · WATERFALLS · COFFEE',
        summary: 'The road most travellers come to Pakse for: highland villages, coffee farms and waterfalls spread across the plateau.',
        duration: '1–3 days',
        route: 'Start from Pakse'
      }
    }
  },
  {
    slug: 'wat-phou',
    modalId: 'wat-phou-modal',
    name: 'Wat Phou',
    country: 'Laos',
    fieldCardNumber: '04',
    region: 'Champasak · Southern Laos',
    description: 'An ancient Khmer temple complex climbing from the plain toward the mountain, with stone terraces, ceremonial axes and wide views across Champasak.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Wat%20Phou%2C%20Champasak%2C%20Laos',
    gallery: [
      {
        src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Wat_Phu_Champasak_-_Laos_-_01.JPG?width=1600',
        alt: 'Historic stone terraces and sanctuary at Wat Phou in Champasak',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Wat_Phu_Champasak_-_Laos_-_01.JPG',
        author: 'Wikimedia Commons'
      }
    ],
    facts: [
      { label: 'Getting there', value: 'Reached from Pakse or Champasak town by motorbike, tuk-tuk or private transport.' },
      { label: 'Best time', value: 'Early morning is cooler and quieter for the climb through the complex.' },
      { label: 'What to wear', value: 'Respectful light clothing, sun protection and stable shoes for old stone steps.' },
      { label: 'Price', value: 'Paid entrance. Confirm the current official ticket price before visiting.' },
      { label: 'Duration', value: 'Allow roughly two to three hours for the museum, lower ruins and upper sanctuary.' },
      { label: 'Difficulty', value: 'Moderate, with uneven steps and a steady exposed climb.' }
    ],
    cityContexts: {
      pakse: {
        order: 2,
        kicker: 'TEMPLE · CHAMPASAK · MEKONG',
        summary: 'A major cultural day trip from Pakse, combining the old Khmer sanctuary with the slower riverside roads of Champasak.',
        duration: 'Half or full day',
        route: 'South of Pakse'
      }
    }
  },
  {
    slug: 'khone-phapheng-falls',
    modalId: 'khone-phapheng-modal',
    name: 'Khone Phapheng Falls',
    country: 'Laos',
    fieldCardNumber: '05',
    region: 'Si Phan Don · Champasak',
    description: 'A vast, powerful section of the Mekong where the river breaks across rocks and channels near the Cambodian border. This is a place for scale, sound and viewpoints.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Khone%20Phapheng%20Falls%2C%20Laos',
    gallery: [
      {
        src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Khone_Phapheng_Falls%2C_Si_Phan_Don%2C_Laos%2C_widest_waterfall_in_the_world.jpg?width=1600',
        alt: 'Wide view of Khone Phapheng Falls on the Mekong in southern Laos',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Khone_Phapheng_Falls,_Si_Phan_Don,_Laos,_widest_waterfall_in_the_world.jpg',
        author: 'Wikimedia Commons'
      }
    ],
    facts: [
      { label: 'Getting there', value: 'Usually reached from Pakse, Nakasang or the Si Phan Don area by road transport.' },
      { label: 'Best time', value: 'Morning and late afternoon are more comfortable; the river changes dramatically by season.' },
      { label: 'What to wear', value: 'Light clothing, sun protection and comfortable shoes for the viewpoint paths.' },
      { label: 'Price', value: 'Paid entrance. Check the current local ticket price before setting out.' },
      { label: 'Duration', value: 'Allow around one to two hours to walk the main viewpoints without rushing.' },
      { label: 'Difficulty', value: 'Easy walking, but the river itself is dangerous and not a swimming area.' }
    ],
    cityContexts: {
      pakse: {
        order: 3,
        kicker: 'MEKONG · VIEWPOINTS · SOUTH',
        summary: 'A powerful southern stop that works best as a long day from Pakse or as part of the onward journey toward Si Phan Don.',
        duration: 'Long day or onward stop',
        route: 'Road toward the islands'
      }
    }
  },
  {
    slug: 'xe-bang-fai-cave',
    modalId: 'xe-bang-fai-modal',
    name: 'Xe Bang Fai Cave',
    country: 'Laos',
    fieldCardNumber: '06',
    region: 'Boualapha District · Khammouane',
    description: 'A colossal active river cave hidden near the Lao–Vietnamese border. The underground river runs through enormous chambers, giant formations and black-water passages that are explored with a local guide.',
    mapsUrl: 'https://maps.app.goo.gl/wbVnr9MAxdNBvwwZA',
    gallery: [
      { src: 'https://whc.unesco.org/uploads/thumbs/site_0951_0031-1000-667-20250617115722.jpg', alt: 'Lower entrance of Xe Bang Fai Cave in Hin Nam No National Park', sourcePage: 'https://whc.unesco.org/en/documents/219851', author: 'GIZ ProFEB / Lucas Wahl', license: 'Attribution · NoDerivatives' },
      { src: 'https://whc.unesco.org/document/219859', alt: 'Underground Xe Bang Fai river passage inside the cave', sourcePage: 'https://whc.unesco.org/en/documents/219859', author: 'GIZ ProFEB', license: 'Attribution · NoDerivatives' },
      { src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/XeBanFai.jpg?width=1600', alt: 'Xe Bang Fai River downstream from Ban Chalou in Khammouane', sourcePage: 'https://commons.wikimedia.org/wiki/File:XeBanFai.jpg', author: 'Italian walrus-63', license: 'CC BY-SA 3.0' }
    ],
    facts: [
      { label: 'Getting there', value: 'The cave is near Ban Nyabaet–Nong Ping, roughly 154 km east of Thakhek via Route 12. The final roads are remote and can be rough; arrange a local guide rather than entering alone.' },
      { label: 'Best time', value: 'Dry-season conditions are usually better for the boat trip. Boat access can stop during the wet season or when river levels are unsafe, so confirm locally before travelling.' },
      { label: 'What to wear', value: 'Quick-dry clothing and shoes with grip. Local operators commonly provide a life jacket and a strong headlamp for the boat and cave sections.' },
      { label: 'Price', value: 'Entrance, guide and boat prices are arranged locally and may vary. Confirm the full price and route before setting out.' },
      { label: 'Duration', value: 'Expect about a 15-minute riverside walk before boarding. The cave visit itself commonly takes one to two hours, but the remote journey makes this a full-day or multi-day expedition.' },
      { label: 'Difficulty', value: 'Adventure-level access: rough roads, darkness, boat travel and uneven walking inside the cave. Do not attempt the forest or cave route without a guide.' }
    ]
  },
  {
    slug: 'pha-pa-tou',
    modalId: 'pha-pa-tou-modal',
    name: 'Pha Pa Tou',
    country: 'Laos',
    fieldCardNumber: '07',
    region: 'Pak Ou District · Luang Prabang Province',
    description: 'A remote mountain viewpoint and simple homestay reached by crossing the river and climbing through forest. The reward is an open panorama over northern Laos, especially around sunrise and sunset.',
    mapsUrl: 'https://maps.app.goo.gl/khjXjfTfGsjUcGM4A',
    gallery: [
      { src: '/images/laos/landmarks/pha-pa-tou-01.jpg', alt: 'Sunrise over the mountain landscape from Pha Pa Tou in Luang Prabang Province', sourcePage: 'https://pantip.com/topic/39606086', author: 'Sittichai · Pantip travel report' },
      { src: '/images/laos/landmarks/pha-pa-tou-02.jpg', alt: 'Sea of mist surrounding Pha Patu in Luang Prabang Province', sourcePage: 'https://laosuki.com/pha-patu-viewpoint-luang-prabang-sea-of-mist/', author: 'OKIHIRO · Laosuki' },
      { src: '/images/laos/landmarks/pha-pa-tou-03.jpg', alt: 'Mountain viewpoint scenery at Pha Patu above Pak Ou', sourcePage: 'https://www.tiktok.com/@makame__/video/7581713947250855176', author: 'makame__ · TikTok' }
    ],
    facts: [
      { label: 'Getting there', value: 'The usual route begins outside Luang Prabang, followed by a small boat crossing and a two- to three-hour mountain trek. Arrange a local guide or homestay before leaving.' },
      { label: 'Best time', value: 'Choose a clear dry-season day and start early. Heavy rain can make the river crossing and steep forest trail difficult.' },
      { label: 'What to wear', value: 'Hiking shoes with grip, light layers, sun and rain protection, and a small pack for water and food.' },
      { label: 'Price', value: 'Guide, boat, meals and overnight costs are arranged locally. Confirm what is included before the trip.' },
      { label: 'Duration', value: 'Treat it as a full-day hike or, preferably, an overnight trip so you can see sunrise from the mountain.' },
      { label: 'Difficulty', value: 'Moderate to demanding: a river crossing, a long uphill trail and very basic facilities at the top.' }
    ]
  },
  {
    slug: 'kong-lor-cave',
    modalId: 'kong-lor-modal',
    name: 'Kong Lor Cave',
    country: 'Laos',
    fieldCardNumber: '08',
    region: 'Khounkham District · Khammouane',
    description: 'A vast limestone tunnel carrying the Hin Boun River through the mountain for more than seven kilometres. Small motorboats travel through complete darkness before emerging into the hidden valley beyond.',
    mapsUrl: 'https://maps.app.goo.gl/Uhm4ThHyYcNGJHLg6',
    gallery: [
      { src: 'https://res.cloudinary.com/dsj9enacv/image/upload/f_jpg,c_fill,w_1200,h_630,q_auto/kong-lor-cave/brqoekkq6mep0f6hn2x0.jpg', alt: 'The river entrance and limestone chamber at Kong Lor Cave', sourcePage: 'https://www.khammouanetourism.org/en/places/Kong-lor-cave', author: 'Khammouane Tourism' },
      { src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Konglor_cave_laos.JPG?width=1600', alt: 'Entrance of Kong Lor Cave in Khammouane Province', sourcePage: 'https://commons.wikimedia.org/wiki/File:Konglor_cave_laos.JPG', author: 'Busy', license: 'CC BY-SA 3.0' },
      { src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kong_Lor_Caves_of_Laos_%285422115490%29.jpg?width=1600', alt: 'Boat journey through the dark interior of Kong Lor Cave', sourcePage: 'https://commons.wikimedia.org/wiki/File:Kong_Lor_Caves_of_Laos_(5422115490).jpg', author: 'Aleksey Gnilenkov', license: 'CC BY 2.0' }
    ],
    facts: [
      { label: 'Getting there', value: 'Kong Lor is inside Phou Hin Bun National Park, roughly 145–150 km from Thakhek. It is commonly visited as part of the Thakhek Loop or from Ban Khounkham.' },
      { label: 'Best time', value: 'November to April normally brings safer, clearer river conditions. During the rainy season, high water can restrict or stop boat access.' },
      { label: 'What to wear', value: 'Quick-dry clothing, water-friendly shoes, a strong headlamp and a dry bag. Keep the supplied life jacket on during the boat trip.' },
      { label: 'Price', value: 'Paid entrance and boat trip. Confirm the current ticket and boat arrangement locally before travelling.' },
      { label: 'Duration', value: 'Allow about two to three hours for the return boat journey, the illuminated formation stop and boarding time.' },
      { label: 'Difficulty', value: 'Moderate: limited walking, but narrow boats, darkness, wet surfaces and possible shallow river sections require care.' }
    ]
  }
];

export const getLandmarksForCity = (citySlug: string): CityLandmark[] =>
  laosLandmarks
    .filter((landmark) => Boolean(landmark.cityContexts?.[citySlug]))
    .map((landmark) => ({ ...landmark, cityContext: landmark.cityContexts![citySlug] }))
    .sort((a, b) => a.cityContext.order - b.cityContext.order);
