export type LandmarkResearchSourceKind = 'history' | 'official' | 'field-report' | 'image';

export type LandmarkResearchSource = {
  label: string;
  href: string;
  kind: LandmarkResearchSourceKind;
};

export const laosLandmarkResearchSources: Record<string, LandmarkResearchSource[]> = {
  'wat-phou': [
    { kind: 'official', label: 'UNESCO World Heritage Centre · Vat Phou', href: 'https://whc.unesco.org/en/list/481/' },
    { kind: 'official', label: 'Tourism Laos · Wat Phou', href: 'https://www.tourismlaos.org/welcome/ancient-mysteries/wat-phou/' },
    { kind: 'official', label: 'Tourism Champasak · Vat Phou', href: 'https://tourismchampasak.com/vat_phou' },
    { kind: 'history', label: 'Wikipedia · Vat Phou · historical research starting point', href: 'https://en.wikipedia.org/wiki/Vat_Phou' },
    { kind: 'field-report', label: 'Mai and Chris Travel · practical visitor report', href: 'https://maiandchristravel.com/wat-phou/' },
    { kind: 'field-report', label: 'Adventures of Jellie · practical visitor report', href: 'https://www.adventuresofjellie.com/laos/wat-phou-champasak-guide/' }
  ],

  'bolaven-plateau': [
    { kind: 'history', label: 'Wikipedia · Bolaven Plateau · history and geography starting point', href: 'https://en.wikipedia.org/wiki/Bolaven_Plateau' },
    { kind: 'official', label: 'Tourism Laos · Salavanh Province · Bolaven and coffee context', href: 'https://www.tourismlaos.org/southern-provinces/salavan-province/' },
    { kind: 'field-report', label: 'Wikivoyage · Bolaven Plateau · route context', href: 'https://en.wikivoyage.org/wiki/Bolaven_Plateau' },
    { kind: 'field-report', label: 'The Roaming Compass · Bolaven Plateau travel guide', href: 'https://theroamingcompass.com/laos/ultimate-travel-guide-to-the-bolaven-plateau-laos/' },
    { kind: 'image', label: 'Wikimedia Commons · Bolaven Plateau photography', href: 'https://commons.wikimedia.org/wiki/Category:Bolaven_Plateau' }
  ],

  'tad-lo-waterfall': [
    { kind: 'official', label: 'Visit Tad Lo · locally checked Tad Lo Waterfall guide', href: 'https://visit-tadlo.com/en/things-to-do/tad-lo-waterfall' },
    { kind: 'field-report', label: 'Visit Tad Lo · local waterfall and village field notes', href: 'https://visit-tadlo.com/en' },
    { kind: 'official', label: 'Tourism Laos · Salavanh Province context', href: 'https://www.tourismlaos.org/southern-provinces/salavan-province/' }
  ],

  'cooking-class-nyay': [
    { kind: 'official', label: 'Visit Tad Lo · Lao Cooking Class with Nyay', href: 'https://visit-tadlo.com/en/things-to-do/cooking-class-nyay' },
    { kind: 'field-report', label: 'Visit Tad Lo · locally checked Tad Lo experiences', href: 'https://visit-tadlo.com/en/things-to-do/' },
    { kind: 'official', label: 'Tourism Laos · Salavanh Province context', href: 'https://www.tourismlaos.org/southern-provinces/salavan-province/' }
  ],

  'vat-paa-ancient-forest': [
    { kind: 'official', label: 'Visit Tad Lo · Vat Paa Ancient Forest field note', href: 'https://visit-tadlo.com/en/things-to-do/vat-paa-ancient-forest' },
    { kind: 'field-report', label: 'Visit Tad Lo · locally checked Tad Lo experiences', href: 'https://visit-tadlo.com/en/things-to-do/' },
    { kind: 'official', label: 'Tourism Laos · Salavanh Province context', href: 'https://www.tourismlaos.org/southern-provinces/salavan-province/' }
  ],

  'don-khon-railway-bridge': [
    { kind: 'history', label: 'Wikipedia · Don Det–Don Khon railway · historical starting point', href: 'https://en.wikipedia.org/wiki/Don_Det%E2%80%93Don_Khon_railway' },
    { kind: 'history', label: 'Wikipedia · Don Det · island history and context', href: 'https://en.wikipedia.org/wiki/Don_Det' },
    { kind: 'image', label: 'Wikimedia Commons · Don Det–Don Khon bridge photography', href: 'https://commons.wikimedia.org/wiki/Category:Bridge_Don_Det_-_Don_Khon' }
  ],

  'khone-phapheng-falls': [
    { kind: 'history', label: 'Wikipedia · Khone Phapheng Falls · geography and navigation history', href: 'https://en.wikipedia.org/wiki/Khone_Phapheng_Falls' },
    { kind: 'official', label: 'Tourism Laos · Waterfalls · Khone Phapheng context', href: 'https://www.tourismlaos.org/waterfalls/' },
    { kind: 'history', label: 'Wikipedia · Don Det · Si Phan Don historical context', href: 'https://en.wikipedia.org/wiki/Don_Det' },
    { kind: 'image', label: 'Wikimedia Commons · Khone Phapheng Falls photography', href: 'https://commons.wikimedia.org/wiki/Category:Khone_Phapheng_Falls' }
  ],

  'cambodia-from-don-det': [
    { kind: 'official', label: 'Lao Immigration · visa and border information', href: 'https://www.immigration.gov.la/en/visas' },
    { kind: 'official', label: 'Cambodia eVisa · official visa information', href: 'https://www.evisa.gov.kh/' },
    { kind: 'history', label: 'Wikipedia · Don Det · island and transport context', href: 'https://en.wikipedia.org/wiki/Don_Det' },
    { kind: 'image', label: 'Wikimedia Commons · Laos–Cambodia border photography', href: 'https://commons.wikimedia.org/wiki/File:Border_control_Laos-Cambodia_(2).jpg' }
  ],

  'pha-pa-tou': [
    { kind: 'field-report', label: 'Pantip · Pha Pa Tou traveller report', href: 'https://pantip.com/topic/39606086' },
    { kind: 'field-report', label: 'Laosuki · Pha Patu viewpoint and sea-of-mist report', href: 'https://laosuki.com/pha-patu-viewpoint-luang-prabang-sea-of-mist/' },
    { kind: 'image', label: 'Wikimedia Commons · mountains of Luang Prabang Province', href: 'https://commons.wikimedia.org/wiki/Category:Mountains_of_Luang_Prabang_Province' }
  ],

  'kuang-si-waterfall': [
    { kind: 'official', label: 'Tourism Laos · Tad Kuang Si', href: 'https://www.tourismlaos.org/2642-2/' },
    { kind: 'history', label: 'Wikipedia · Kuang Si Falls · geography starting point', href: 'https://en.wikipedia.org/wiki/Kuang_Si_Falls' },
    { kind: 'image', label: 'Wikimedia Commons · Kuang Si Falls photography', href: 'https://commons.wikimedia.org/wiki/Category:Kuang_Si_Falls' },
    { kind: 'field-report', label: 'Condé Nast Traveler · Luang Prabang destination context', href: 'https://www.cntraveler.com/story/why-luang-prabang-is-the-ideal-southeast-asian-city' }
  ],

  'slow-boat-luang-prabang-huay-xai': [
    { kind: 'field-report', label: 'Discover Laos · 2026 Mekong slow-boat field report', href: 'https://discoverlaos.info/blog/mekong-slow-boat-huay-xai-luang-prabang/' },
    { kind: 'field-report', label: 'Backpack To The Future · public slow-boat traveller report', href: 'https://backpacktothefuturetravel.wordpress.com/2024/11/23/slow-boat-from-huay-xai-to-luang-prabang/' },
    { kind: 'image', label: 'Wikimedia Commons · Mekong in Luang Prabang Province', href: 'https://commons.wikimedia.org/wiki/Category:Mekong_in_Luang_Prabang_Province' }
  ],

  'kong-lor-cave': [
    { kind: 'official', label: 'Tourism Laos · Kong Lor Cave', href: 'https://www.tourismlaos.org/caves/' },
    { kind: 'official', label: 'Khammouane Tourism · Kong Lor Cave', href: 'https://www.khammouanetourism.org/en/places/Kong-lor-cave' },
    { kind: 'field-report', label: 'Asia Safari Laos · Kong Lor Cave · updated 2026', href: 'https://www.asiasafari-laos.com/en/travel-to-laos-with-asia-safari-laos/kong-lor-cave/' },
    { kind: 'field-report', label: 'Blog-trotting · Kong Lor traveller report', href: 'https://www.blog-trotting.fr/voyage/laos/9812-kong-lor-cave' },
    { kind: 'field-report', label: 'The Backpacking Wayfarers · Kong Lor traveller report', href: 'https://thebackpackingwayfarers.com/2018/07/09/laos-kong-lor-cave/' },
    { kind: 'image', label: 'Wikimedia Commons · Kong Lor Caves photography', href: 'https://commons.wikimedia.org/wiki/Category:Kong_Lor_Caves' }
  ],

  'xe-bang-fai-cave': [
    { kind: 'official', label: 'Hin Nam No · Xe Bang Fai Cave', href: 'https://hinnamno.org/xe-bang-fai-cave/' },
    { kind: 'official', label: 'Tourism Laos · Khammouane Province context', href: 'https://www.tourismlaos.org/central-provinces/khammouane-province/' },
    { kind: 'field-report', label: 'Laos Insider · Xe Bang Fai Cave · 2026 experience-based guide', href: 'https://laosinsider.com/laos-travel-guide/xe-bang-fai-cave/' },
    { kind: 'field-report', label: 'Discover Laos · Xe Bang Fai Cave', href: 'https://discoverlaos.today/khammouane/thing-to-do/xe-bang-fai-cave' },
    { kind: 'image', label: 'Wikimedia Commons · Xe Ban Fai River photograph', href: 'https://commons.wikimedia.org/wiki/File:XeBanFai.jpg' }
  ],

  'tham-nang-aen-cave': [
    { kind: 'official', label: 'Tourism Laos · Khammouane Province cave context', href: 'https://www.tourismlaos.org/central-provinces/khammouane-province/' },
    { kind: 'field-report', label: 'Love Laos · Tham Nang Aen Cave traveller guide', href: 'https://love-laos.com/tham-nang-aen-cave/' },
    { kind: 'field-report', label: 'Hello You Fried Egg · Thakhek Loop field report', href: 'https://www.helloyoufriedegg.com/motorbike-trips/thakhek-loop' },
    { kind: 'image', label: 'Wikimedia Commons · Khammouane Province · Nang Aen file listed in category', href: 'https://commons.wikimedia.org/wiki/Category:Khammouane_Province' }
  ],

  'hot-air-balloon-paramotor-vang-vieng': [
    { kind: 'history', label: 'Wikipedia · Vang Vieng · destination context', href: 'https://en.wikipedia.org/wiki/Vang_Vieng' },
    { kind: 'field-report', label: 'Terra Lao · Hot Air Balloon Vang Vieng · 2026 experience guide', href: 'https://terralao.la/blog/hot-air-balloon-vang-vieng-experience-guide-2026' },
    { kind: 'field-report', label: 'Terra Lao · Paramotor Vang Vieng · current activity note', href: 'https://terralao.la/blog/paramotor-vang-vieng-aerial-adventure-2025' },
    { kind: 'image', label: 'Wikimedia Commons · Vang Vieng hot-air-balloon photograph', href: 'https://commons.wikimedia.org/wiki/File:Vang_Vieng_-_Hot_Air_Balloon_(23871079683).jpg' }
  ],

  'phou-bia-from-vang-vieng': [
    { kind: 'history', label: 'Wikipedia · Phou Bia · historical and geographic starting point', href: 'https://en.wikipedia.org/wiki/Phou_Bia' },
    { kind: 'field-report', label: 'Terra Lao · Xaysomboun & Phou Bia expedition · June 2026', href: 'https://terralao.la/blog/6-day-xaysomboun-enduro-tour-laos' },
    { kind: 'image', label: 'Wikimedia Commons · Phou Bia photography', href: 'https://commons.wikimedia.org/wiki/Category:Phou_Bia' }
  ]
};

export const getLandmarkResearchSources = (slug: string) => laosLandmarkResearchSources[slug] || [];
