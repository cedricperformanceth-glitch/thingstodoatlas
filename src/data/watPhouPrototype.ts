export interface WatPhouImage {
  src: string;
  alt: string;
  source: string;
  credit: string;
  license: string;
  licenseUrl: string;
}

export const watPhouImages: Record<string, WatPhouImage> = {
  hero: {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Main_path_lined_with_stone_pillars_to_the_ruined_Khmer_Hindu_temple_of_Wat_Phou%2C_Champasak%2C_Laos.jpg?width=1800',
    alt: 'The ceremonial causeway at Wat Phou in Champasak, Laos, leading toward Phou Kao mountain',
    source: 'https://commons.wikimedia.org/wiki/File:Main_path_lined_with_stone_pillars_to_the_ruined_Khmer_Hindu_temple_of_Wat_Phou,_Champasak,_Laos.jpg',
    credit: 'Basile Morin',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  stairs: {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Alley_lined_with_twisted_Plumeria_tree_trunks_overgrowing_the_steep_stone_stairs_of_Wat_Phou_temple_Champasak_Laos.jpg?width=1500',
    alt: 'Frangipani trees framing the old stone stairs of Wat Phou temple in southern Laos',
    source: 'https://commons.wikimedia.org/wiki/File:Alley_lined_with_twisted_Plumeria_tree_trunks_overgrowing_the_steep_stone_stairs_of_Wat_Phou_temple_Champasak_Laos.jpg',
    credit: 'Basile Morin',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  sanctuary: {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Champasak%2C_Laos%2C_Wat_Poo_31.JPG?width=1500',
    alt: 'The upper stone sanctuary at Wat Phou, the UNESCO World Heritage temple complex in Champasak',
    source: 'https://commons.wikimedia.org/wiki/File:Champasak,_Laos,_Wat_Poo_31.JPG',
    credit: 'Mattana',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  mountain: {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Shiva_temple_mountain_at_Vat_Phu_Champasak_Laos.jpg?width=1500',
    alt: 'Vat Phou sanctuary beneath sacred Phou Kao mountain in Champasak Province, Laos',
    source: 'https://commons.wikimedia.org/wiki/File:Shiva_temple_mountain_at_Vat_Phu_Champasak_Laos.jpg',
    credit: 'Nick Hubbard',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
  },
  detail: {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Wat_Phu_Champasak_-_Laos_-_01.JPG?width=1500',
    alt: 'A Buddha image inside the historic Wat Phou temple complex in Champasak, Laos',
    source: 'https://commons.wikimedia.org/wiki/File:Wat_Phu_Champasak_-_Laos_-_01.JPG',
    credit: 'Photo by Adam Jones · adamjones.freeservers.com',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  }
};

export const watPhouQuickFacts = [
  { label: 'Time on site', value: '2–3 hours', note: 'Longer if you read ruins slowly.' },
  { label: 'Best time', value: 'Early morning', note: 'Cooler stone and softer light.' },
  { label: 'The climb', value: 'Moderate', note: 'Old, uneven and exposed steps.' },
  { label: 'Best base', value: 'Pakse or Champasak', note: 'Half-day possible; a slow day is better.' }
];

export const watPhouStory = {
  opening: {
    label: 'VISITING WAT PHOU',
    title: 'The route is part of the monument',
    paragraphs: [
      'Wat Phou — also written Vat Phou, Vat Phu or Wat Phu — is an ancient Khmer temple complex in Champasak Province and one of the essential cultural landmarks of southern Laos. It does not reveal itself all at once. The first view is long and horizontal: open ground, ancient barays, a ceremonial causeway and Phou Kao rising behind the sanctuary.',
      'That alignment is the reason the visit works better as a sequence than as a checklist. Walk the axis slowly. Look back as often as you look forward. At Wat Phou, the relationship between water, stone, the Mekong plain and the sacred mountain is not background scenery; it is the central idea of the site.',
      'If you are visiting Wat Phou from Pakse, the practical lesson is simple: start early enough that the road, museum and climb do not become a race against the midday heat. The temple is not technically difficult to visit, but old steps, exposed terraces and tropical sun reward a slower rhythm.'
    ]
  },
  history: {
    label: 'WAT PHOU HISTORY · UNESCO · KHMER HERITAGE',
    title: 'Before Angkor, between river and mountain',
    paragraphs: [
      'The UNESCO-listed Vat Phou and Associated Ancient Settlements within the Champasak Cultural Landscape extend far beyond the ruined sanctuary seen during a normal visit. The World Heritage property includes Wat Phou, ancient settlements, waterworks and a cultural landscape shaped over more than a thousand years, broadly from the fifth to the fifteenth centuries.',
      'The sacred geography came first. Phou Kao was associated with Shiva, while water descending from the mountain fed the sanctuary. Later Khmer buildings formalised that relationship into a monumental axis stretching from the direction of the Mekong across barays and causeways toward the upper shrine.',
      'The principal stone structures visible today are generally associated with the eleventh to thirteenth centuries and connect Wat Phou to the wider Khmer world. Religious use did not simply stop with the decline of Khmer power: the temple became an important Buddhist place of worship and remains a living sacred site rather than an abandoned archaeological set.'
    ]
  },
  climb: {
    label: 'THE WAT PHOU CLIMB',
    title: 'Frangipani, broken rhythm and old stone',
    paragraphs: [
      'The staircase is the part of a Wat Phou visit most likely to stay in memory. It rises in irregular sections beneath old frangipani trees, with roots, moss and weathered blocks interrupting any clean architectural line.',
      'Take the steps slowly, especially after rain. Shoes with grip matter more than hiking equipment. The climb is moderate for most visitors with ordinary fitness, but the uneven stone, heat and exposed sections make rushing pointless.',
      'The temptation is to treat the stairs as an obstacle before reaching the upper sanctuary. They are better understood as a transition: the open ceremonial landscape below becomes narrower, greener and more intimate as the route approaches Phou Kao.'
    ],
    quote: 'Go early for comfort, but leave enough time that “early” does not become “rushed.”'
  },
  sanctuary: {
    label: 'THE UPPER SANCTUARY',
    title: 'The temple is smaller than the idea behind it',
    paragraphs: [
      'After the long approach, the upper sanctuary can feel surprisingly compact. Its power comes less from scale than from position. The cliff and sacred spring sit immediately behind it; the complete route through the lower Wat Phou complex opens below.',
      'Look for worn lintels, carvings and architectural fragments before turning toward the panorama. The surviving details connect the Champasak temple to the wider Khmer world, while its mountain setting gives Wat Phou a character very different from the great temple cities of Cambodia.',
      'Water from Phou Kao was channelled toward the sacred space, reinforcing the connection between natural landscape and the worship of Shiva. This relationship is one reason UNESCO presents Vat Phou as a designed cultural landscape rather than only an isolated temple ruin.'
    ]
  },
  returnView: {
    label: 'WHAT TO SEE AT WAT PHOU',
    title: 'Turn around before you descend',
    paragraphs: [
      'The clearest view of Wat Phou is not a close-up of one carving. It is the view back down the complete ceremonial axis: sanctuary, terraces, stone causeway, barays and the distant Champasak plain aligned beneath the mountain.',
      'Give the upper level ten quiet minutes without moving. Then descend with the same attention used on the way up. The light, angles and scale change in the opposite direction, and the lower structures become easier to place within the whole composition.'
    ]
  },
  livingSite: {
    label: 'A LIVING SACRED PLACE',
    title: 'Ruins, archaeology and worship share the same ground',
    paragraphs: [
      'Wat Phou is often introduced simply as a Khmer-Hindu temple, but the site also carries centuries of Buddhist use. Treat active devotional spaces differently from purely archaeological remains: dress respectfully, keep voices low around worshippers and do not turn every sacred object into a photo prop.',
      'That continuity is part of what makes the Champasak site worth more than a quick photo stop. Wat Phou is simultaneously a historic monument, an archaeological landscape and a place where ritual and local memory remain present.'
    ]
  }
};

export const watPhouPracticalCards = [
  { number: '01', title: 'Wat Phou from Pakse', text: 'Leave early and treat the road south as part of the excursion. A half-day trip is possible, but a full unhurried day leaves room for Champasak town, the riverside, the museum and a slow return.' },
  { number: '02', title: 'Staying in Champasak', text: 'This is the calmer option for visiting Vat Phou. It makes an early arrival easier and removes the feeling that the temple must justify a long return journey immediately after the climb.' },
  { number: '03', title: 'Getting to Wat Phou', text: 'Motorbike, tuk-tuk and private transport are common ways to reach the temple. Confirm the full return arrangement before leaving when relying on local transport later in the day.' },
  { number: '04', title: 'How long to visit?', text: 'Keep two to three hours for the archaeological site itself. Add time for the museum, photographs, heat, rest stops and the surrounding Champasak cultural landscape.' },
  { number: '05', title: 'Tickets & opening hours', text: 'Entrance fees and opening arrangements can change. Check current information locally or through official tourism sources rather than building the day around an old price or timetable found online.' },
  { number: '06', title: 'What to wear', text: 'Use light clothing that remains respectful in a living religious site, sun protection and shoes with grip. The practical challenge is heat and old stone, not technical hiking.' }
];

export const watPhouFaq = [
  { question: 'Is Wat Phou worth the trip from Pakse?', answer: 'Yes for travellers interested in Khmer history, UNESCO heritage, sacred landscapes and slow cultural visits. It works best as a half-day or full-day journey rather than a rushed photo stop.' },
  { question: 'Are Wat Phou, Vat Phou, Vat Phu and Wat Phu the same place?', answer: 'Yes. These are common English spellings for the same temple complex in Champasak, southern Laos. UNESCO uses “Vat Phou” in the official World Heritage property name, while “Wat Phou” is also widely used.' },
  { question: 'Is Wat Phou a Khmer temple?', answer: 'Yes. Much of the surviving monumental architecture is associated with the Khmer Empire, although the sacred landscape has a longer history and the site later became an important Buddhist place of worship.' },
  { question: 'How difficult is the Wat Phou climb?', answer: 'Moderate rather than extreme. The main challenge is the combination of uneven old stone stairs, heat and exposed sections. Move slowly and wear shoes with grip.' },
  { question: 'What is the best time to visit Wat Phou?', answer: 'Early morning usually offers cooler conditions, softer light and a calmer rhythm for the stairs and upper terraces. Weather, ceremonies and visitor numbers vary, so this remains guidance rather than a guarantee.' },
  { question: 'How much time do I need at Wat Phou?', answer: 'Allow roughly two to three hours on the site. From Pakse, reserve at least half a day and preferably a slower full day if you also want time in Champasak.' },
  { question: 'Can I visit Wat Phou without staying in Champasak?', answer: 'Yes. Wat Phou is commonly visited as a day trip from Pakse. Staying in Champasak simply makes an early start and a slower visit easier.' },
  { question: 'What should I wear at Wat Phou?', answer: 'Choose light, respectful clothing suitable for a living sacred site, plus sun protection and shoes with grip for the old stairs.' },
  { question: 'Can I rely on an old Wat Phou ticket price found online?', answer: 'No. Entrance fees and opening arrangements can change. Confirm current information locally or through official visitor information before setting out.' }
];

export const watPhouSources = [
  { label: 'UNESCO World Heritage Centre · Vat Phou', href: 'https://whc.unesco.org/en/list/481/' },
  { label: 'Tourism Laos · Wat Phou', href: 'https://www.tourismlaos.org/welcome/ancient-mysteries/wat-phou/' },
  { label: 'Tourism Champasak · Vat Phou', href: 'https://tourismchampasak.com/vat_phou' },
  { label: 'Wikipedia · Vat Phou (research starting point)', href: 'https://en.wikipedia.org/wiki/Vat_Phou' },
  { label: 'Mai and Chris Travel · practical visitor report', href: 'https://maiandchristravel.com/wat-phou/' },
  { label: 'Adventures of Jellie · practical visitor report', href: 'https://www.adventuresofjellie.com/laos/wat-phou-champasak-guide/' }
];

const watPhouUrl = 'https://thingstodoatlas.com/laos/pakse/things-to-do/wat-phou';

export const watPhouSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      '@id': `${watPhouUrl}#landmark`,
      name: 'Wat Phou',
      alternateName: ['Vat Phou', 'Vat Phu', 'Wat Phu'],
      description: 'UNESCO-listed Khmer temple complex and sacred cultural landscape in Champasak Province, southern Laos.',
      url: watPhouUrl,
      image: Object.values(watPhouImages).map((image) => image.src),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Champasak',
        addressRegion: 'Champasak Province',
        addressCountry: 'LA'
      },
      touristType: ['Cultural travellers', 'History travellers', 'Independent travellers']
    },
    {
      '@type': 'Article',
      '@id': `${watPhouUrl}#guide`,
      headline: 'Wat Phou guide: visiting Vat Phou from Pakse and Champasak',
      description: 'An editorial and practical guide to Wat Phou in Laos, covering Khmer history, the UNESCO landscape, the climb, best time to visit, transport from Pakse and what to see.',
      mainEntityOfPage: watPhouUrl,
      inLanguage: 'en',
      image: Object.values(watPhouImages).map((image) => image.src),
      about: { '@id': `${watPhouUrl}#landmark` },
      keywords: [
        'Wat Phou',
        'Vat Phou',
        'Wat Phu',
        'Champasak Laos',
        'Wat Phou from Pakse',
        'Khmer temple Laos',
        'UNESCO Laos',
        'Wat Phou history',
        'Wat Phou climb',
        'Wat Phou guide'
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': `${watPhouUrl}#faq`,
      mainEntity: watPhouFaq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer }
      }))
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${watPhouUrl}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Things To Do Atlas', item: 'https://thingstodoatlas.com/' },
        { '@type': 'ListItem', position: 2, name: 'Laos', item: 'https://thingstodoatlas.com/laos' },
        { '@type': 'ListItem', position: 3, name: 'Pakse', item: 'https://thingstodoatlas.com/laos/pakse' },
        { '@type': 'ListItem', position: 4, name: 'Wat Phou', item: watPhouUrl }
      ]
    }
  ]
};
