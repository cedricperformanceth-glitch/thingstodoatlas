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
    alt: 'The long stone-pillar causeway leading toward Wat Phou and Phou Kao mountain',
    source: 'https://commons.wikimedia.org/wiki/File:Main_path_lined_with_stone_pillars_to_the_ruined_Khmer_Hindu_temple_of_Wat_Phou,_Champasak,_Laos.jpg',
    credit: 'Basile Morin',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  stairs: {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Alley_lined_with_twisted_Plumeria_tree_trunks_overgrowing_the_steep_stone_stairs_of_Wat_Phou_temple_Champasak_Laos.jpg?width=1500',
    alt: 'Old stone stairs framed by twisted frangipani trees at Wat Phou',
    source: 'https://commons.wikimedia.org/wiki/File:Alley_lined_with_twisted_Plumeria_tree_trunks_overgrowing_the_steep_stone_stairs_of_Wat_Phou_temple_Champasak_Laos.jpg',
    credit: 'Basile Morin',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  sanctuary: {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Champasak%2C_Laos%2C_Wat_Poo_31.JPG?width=1500',
    alt: 'The stone sanctuary at Wat Phou in Champasak',
    source: 'https://commons.wikimedia.org/wiki/File:Champasak,_Laos,_Wat_Poo_31.JPG',
    credit: 'Mattana',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  mountain: {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Shiva_temple_mountain_at_Vat_Phu_Champasak_Laos.jpg?width=1500',
    alt: 'Wat Phou sanctuary beneath the sacred mountain in Champasak',
    source: 'https://commons.wikimedia.org/wiki/File:Shiva_temple_mountain_at_Vat_Phu_Champasak_Laos.jpg',
    credit: 'Nick Hubbard',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
  },
  detail: {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Wat_Phu_Champasak_-_Laos_-_01.JPG?width=1500',
    alt: 'A Buddha image inside the historic Wat Phou complex',
    source: 'https://commons.wikimedia.org/wiki/File:Wat_Phu_Champasak_-_Laos_-_01.JPG',
    credit: 'Photo by Adam Jones · adamjones.freeservers.com',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  }
};

export const watPhouQuickFacts = [
  { label: 'Time on site', value: '2–3 hours', note: 'Keep longer if you enjoy ruins slowly.' },
  { label: 'Best rhythm', value: 'Early morning', note: 'Cooler steps and softer light.' },
  { label: 'Effort', value: 'Moderate', note: 'Uneven, exposed stone stairs.' },
  { label: 'From Pakse', value: 'Half or full day', note: 'Do not reduce it to a rushed photo stop.' }
];

export const watPhouStory = {
  opening: {
    label: 'THE FEELING OF THE PLACE',
    title: 'The route is part of the monument',
    paragraphs: [
      'Wat Phou does not reveal itself all at once. The first view is long and horizontal: open ground, ancient water reservoirs and a ceremonial causeway aimed toward Phou Kao. The sanctuary waits above, small from below, while the mountain already dominates the composition.',
      'This is why the visit works better as a sequence than as a checklist. Walk the axis slowly. Look back as often as you look forward. The relationship between the plain and the mountain is not background scenery; it is the central idea of the site.',
      'Across visitor accounts, the most repeated practical lesson is simple: arrive before the stone and exposed terraces have absorbed the midday heat. The complex is not technically difficult, but the old steps demand attention and the climb feels longer when the sun is high.'
    ]
  },
  history: {
    label: 'A LANDSCAPE BUILT OVER CENTURIES',
    title: 'Before Angkor, between river and mountain',
    paragraphs: [
      'The UNESCO property is much larger than the ruined sanctuary seen during a normal visit. It includes Wat Phou, ancient settlements, waterworks and the wider Champasak cultural landscape. Together they document more than a thousand years of development, broadly from the fifth to the fifteenth centuries, with the Khmer Empire shaping much of what survives today.',
      'The sacred geography came first. Phou Kao was associated with Shiva, while water flowing from the mountain fed the sanctuary. Later buildings formalised that relationship into a monumental axis stretching from the direction of the Mekong toward the upper shrine.',
      'The principal stone structures visible today are generally associated with the eleventh to thirteenth centuries. Religious use did not simply stop with the decline of Khmer power: Wat Phou became an important Buddhist place of worship and remains a living sacred site rather than an abandoned archaeological set.'
    ]
  },
  climb: {
    label: 'THE CLIMB',
    title: 'Frangipani, broken rhythm and old stone',
    paragraphs: [
      'The staircase is the part of Wat Phou most likely to stay in memory. It rises in irregular sections beneath old frangipani trees, with roots, moss and weathered blocks interrupting any clean architectural line.',
      'Take the steps slowly, especially after rain. Stable shoes matter more than hiking equipment. The climb is short enough for most visitors with ordinary fitness, but there are exposed sections, limited shade and no reason to hurry.',
      'The temptation is to treat the stairs as an obstacle before reaching the sanctuary. They are better understood as a transition: the open ceremonial landscape below gradually becomes narrower, greener and more intimate as the route approaches the mountain.'
    ],
    quote: 'Go early for comfort, but leave enough time that “early” does not become “rushed.”'
  },
  sanctuary: {
    label: 'AT THE UPPER TERRACE',
    title: 'The sanctuary is smaller than the idea behind it',
    paragraphs: [
      'After the long approach, the upper sanctuary can feel surprisingly compact. Its power comes less from scale than from position. The cliff and spring sit immediately behind it; the entire route through the lower complex opens below.',
      'Look for the worn carvings and architectural fragments before turning toward the panorama. The surviving details connect Wat Phou to the wider Khmer world, but the mountain setting gives the site a character different from the great temple cities of Cambodia.',
      'Water from the mountain was channelled toward the sacred space, reinforcing the connection between the natural landscape and the worship of Shiva. This relationship is one reason UNESCO describes Wat Phou as a designed cultural landscape rather than only an isolated temple.'
    ]
  },
  returnView: {
    label: 'WHAT VISITORS OFTEN MISS',
    title: 'Turn around before you descend',
    paragraphs: [
      'The clearest view of Wat Phou is not a close-up of one carving. It is the view back down the axis: sanctuary, terraces, causeway, barays and the distant plain aligned beneath the mountain.',
      'Give the upper level ten quiet minutes without moving. Then descend with the same attention used on the way up. The light, angles and scale change in the opposite direction, and the lower structures become easier to place within the whole composition.'
    ]
  },
  livingSite: {
    label: 'A LIVING SACRED PLACE',
    title: 'Ruins, archaeology and worship share the same ground',
    paragraphs: [
      'Wat Phou is often introduced as a Khmer-Hindu monument, but the site also carries centuries of Buddhist use. Treat active devotional spaces differently from purely archaeological remains: dress respectfully, keep voices low around worshippers and do not turn every sacred object into a photo prop.',
      'This is also why a purely architectural description feels incomplete. The value of Wat Phou lies in the continuity between landscape, memory, ritual and the physical remains.'
    ]
  }
};

export const watPhouPracticalCards = [
  { number: '01', title: 'As a day from Pakse', text: 'Leave early and treat the road south as part of the excursion. Wat Phou can fit into half a day, but a full unhurried day gives space for Champasak town, the riverside and a slow return.' },
  { number: '02', title: 'While staying in Champasak', text: 'This is the calmer option. It makes an early visit easier and removes the feeling that the temple must justify a long return journey immediately after the climb.' },
  { number: '03', title: 'Transport', text: 'Motorbike, tuk-tuk and private transport are the usual options. Confirm the full return arrangement before leaving, particularly when relying on local transport later in the day.' },
  { number: '04', title: 'How long?', text: 'Keep two to three hours for the archaeological site itself. Add time for the museum, photographs, heat, rest stops and the surrounding Champasak landscape.' }
];

export const watPhouFaq = [
  { question: 'Is Wat Phou worth the trip from Pakse?', answer: 'Yes for travellers interested in history, sacred landscapes and slow cultural visits. It is less suitable as a rushed stop added only to fill a checklist.' },
  { question: 'How difficult is the climb?', answer: 'Moderate rather than extreme. The main challenge is the combination of uneven old steps, heat and exposed sections. Move slowly and wear shoes with grip.' },
  { question: 'What is the best time to arrive?', answer: 'Early morning usually offers cooler conditions and a quieter rhythm. Weather, ceremonies and visitor numbers vary, so this is guidance rather than a guarantee.' },
  { question: 'How much time should I keep?', answer: 'Allow roughly two to three hours on the site. From Pakse, reserve at least half a day and preferably a slower full day if Champasak is included.' },
  { question: 'Can I rely on an old ticket price found online?', answer: 'No. Entrance fees and opening arrangements can change. Confirm current information locally or through official visitor information before setting out.' }
];

export const watPhouSources = [
  { label: 'UNESCO World Heritage Centre · Vat Phou', href: 'https://whc.unesco.org/en/list/481/' },
  { label: 'Tourism Laos · Wat Phou', href: 'https://www.tourismlaos.org/welcome/ancient-mysteries/wat-phou/' },
  { label: 'Tourism Champasak · Vat Phou', href: 'https://tourismchampasak.com/vat_phou' },
  { label: 'Wikipedia · Vat Phou (research starting point)', href: 'https://en.wikipedia.org/wiki/Vat_Phou' },
  { label: 'Mai and Chris Travel · practical visitor report', href: 'https://maiandchristravel.com/wat-phou/' },
  { label: 'Adventures of Jellie · practical visitor report', href: 'https://www.adventuresofjellie.com/laos/wat-phou-champasak-guide/' }
];

export const watPhouSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Wat Phou',
  alternateName: ['Vat Phou', 'Vat Phu', 'Wat Phu'],
  description: 'A practical field guide to visiting the UNESCO-listed Khmer temple complex of Wat Phou from Pakse or Champasak in southern Laos.',
  url: 'https://thingstodoatlas.com/laos/pakse/things-to-do/wat-phou',
  image: Object.values(watPhouImages).map((image) => image.src),
  address: { '@type': 'PostalAddress', addressLocality: 'Champasak', addressRegion: 'Champasak Province', addressCountry: 'LA' },
  touristType: ['Cultural travellers', 'History travellers', 'Independent travellers']
};
