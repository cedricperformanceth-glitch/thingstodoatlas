import { laosLandmarks, type CityLandmark, type CityLandmarkContext, type LaosLandmark } from './laosLandmarks';

const phaPaTou = laosLandmarks.find((landmark) => landmark.slug === 'pha-pa-tou');

if (!phaPaTou) {
  throw new Error('Pha Pa Tou landmark data is missing from laosLandmarks.');
}

const kuangSiWaterfall: LaosLandmark = {
  slug: 'kuang-si-waterfall',
  modalId: 'kuang-si-waterfall-modal',
  name: 'Kuang Si Waterfall',
  country: 'Laos',
  fieldCardNumber: '09',
  region: 'Luang Prabang District · Luang Prabang Province',
  description:
    'A forest waterfall south of Luang Prabang where limestone terraces create a chain of pale turquoise pools below the main cascade. It is one of the easiest major nature trips from the city, but it still deserves an early start and enough time beyond the busiest lower pools.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kuang%20Si%20Waterfall%20Luang%20Prabang%20Laos',
  gallery: [
    {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kuang_Si_Waterfalls_Luang_Prabang_Wikimedia_Commons.jpg?width=1600',
      alt: 'Wide view of the forest and cascades at Kuang Si Waterfall near Luang Prabang',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:Kuang_Si_Waterfalls_Luang_Prabang_Wikimedia_Commons.jpg',
      author: 'Benh LIEU SONG'
    },
    {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kuang_Si_waterfalls_in_Luang_Prabang,_Laos.jpg?width=1600',
      alt: 'Turquoise pools and limestone cascades at Kuang Si Waterfall',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:Kuang_Si_waterfalls_in_Luang_Prabang,_Laos.jpg',
      author: 'NruasPaoYPP',
      license: 'CC BY-SA 4.0'
    }
  ],
  facts: [
    {
      label: 'Getting there',
      value: 'The falls are about 30 km south of Luang Prabang. Shared vans, tuk-tuks, private drivers and organised trips commonly take around 40–60 minutes each way.'
    },
    {
      label: 'Best time',
      value: 'Arrive near opening time for cooler paths and fewer visitors. Water colour, flow and swimming conditions change with the season.'
    },
    {
      label: 'What to bring',
      value: 'Shoes with grip, drinking water, sun or rain protection and modest swimwear if you plan to use a pool where swimming is permitted.'
    },
    {
      label: 'Opening hours',
      value: 'The Luang Prabang tourism office currently lists daily opening from 08:00 to 17:30. Reconfirm locally before a time-sensitive visit.'
    },
    {
      label: 'Duration',
      value: 'Allow a half day for the main waterfall, lower pools, forest paths and the bear rescue area without rushing.'
    },
    {
      label: 'Difficulty',
      value: 'Easy around the developed lower area; moderate on wet, steep or uneven paths toward the upper sections.'
    }
  ]
};

const slowBoatToHuayXai: LaosLandmark = {
  slug: 'slow-boat-luang-prabang-huay-xai',
  modalId: 'slow-boat-luang-prabang-huay-xai-modal',
  name: 'Slow Boat to Huay Xai',
  country: 'Laos',
  fieldCardNumber: '10',
  region: 'Mekong River · Luang Prabang to Bokeo',
  description:
    'A two-day upstream journey from Luang Prabang to Huay Xai, following the Mekong through remote river valleys with an overnight stop in Pakbeng. It is practical transport rather than a polished cruise, and the long hours on board are the experience.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Luang%20Prabang%20Slow%20Boat%20Pier%20Huay%20Xai',
  gallery: [
    {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Aboard._From_Luang_Prabang_to_Huay_Xai,_Day_1_(12291800506).jpg?width=1600',
      alt: 'Passengers aboard a Mekong slow boat travelling from Luang Prabang toward Huay Xai',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:Aboard._From_Luang_Prabang_to_Huay_Xai,_Day_1_(12291800506).jpg',
      author: 'Wikimedia Commons'
    },
    {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Huay_Xai,_Lao_and_Thai_border_(12250555386).jpg?width=1600',
      alt: 'Mekong riverfront at Huay Xai near the Lao–Thai border',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:Huay_Xai,_Lao_and_Thai_border_(12250555386).jpg',
      author: 'Wikimedia Commons'
    }
  ],
  facts: [
    {
      label: 'Route',
      value: 'Day one normally runs from Luang Prabang to Pakbeng. Day two continues upstream from Pakbeng to Huay Xai near the Thai border.'
    },
    {
      label: 'Overnight',
      value: 'Pakbeng accommodation is commonly separate from the public boat ticket. Reserve or confirm a room before travelling in a busy period.'
    },
    {
      label: 'Time on board',
      value: 'Current operators describe roughly 9–10 hours on the first day and 7–8 hours on the second, but river level and operations can alter the schedule.'
    },
    {
      label: 'What to bring',
      value: 'Water, food, cash, a warm layer, sun protection, a power bank and something soft for the seat. Keep valuables and travel documents with you.'
    },
    {
      label: 'Border planning',
      value: 'Huay Xai is still on the Lao side. Leave time for transport to the Friendship Bridge, immigration and any onward connection in Thailand.'
    },
    {
      label: 'Difficulty',
      value: 'Physically easy but tiring: long seated days, basic facilities, heat, engine noise and possible motion sickness.'
    }
  ]
};

export const luangPrabangLandmarks: LaosLandmark[] = [
  phaPaTou,
  kuangSiWaterfall,
  slowBoatToHuayXai
];

const cityContexts: Record<string, CityLandmarkContext> = {
  'pha-pa-tou': {
    order: 1,
    kicker: 'HIKE · SUNRISE · MOUNTAIN',
    summary: 'Cross the river and climb into a remote mountain landscape for a full-day hike or a simple overnight above the mist.',
    duration: 'Full day or overnight',
    route: 'Pak Ou District'
  },
  'kuang-si-waterfall': {
    order: 2,
    kicker: 'WATERFALL · POOLS · FOREST',
    summary: 'Follow the road south to Luang Prabang’s best-known waterfall, turquoise pools and shaded forest paths.',
    duration: 'Half day',
    route: '30 km south of town'
  },
  'slow-boat-luang-prabang-huay-xai': {
    order: 3,
    kicker: 'MEKONG · PAKBENG · BORDER',
    summary: 'Turn the onward journey into two slow days on the Mekong, sleeping in Pakbeng before reaching Huay Xai.',
    duration: '2 days · 1 night',
    route: 'Upstream to Huay Xai'
  }
};

export const luangPrabangExploreLandmarks: CityLandmark[] = luangPrabangLandmarks
  .map((landmark) => ({
    ...landmark,
    cityContext: cityContexts[landmark.slug]
  }))
  .sort((first, second) => first.cityContext.order - second.cityContext.order);
