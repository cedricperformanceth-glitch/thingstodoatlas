import type { CityLandmark, LaosLandmark } from './laosLandmarks';
import { laosLandmarks } from './laosLandmarks';

const requireLandmark = (slug: string): LaosLandmark => {
  const landmark = laosLandmarks.find((item) => item.slug === slug);
  if (!landmark) throw new Error(`Missing Laos landmark: ${slug}`);
  return landmark;
};

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
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Old%20French%20Railway%20Bridge%20Don%20Det%20Don%20Khon%20Laos',
    gallery: [
      {
        src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Si_Phan_Don_-_bridge_from_Don_Det_to_Don_Khone_-_Aug_2024.jpg?width=1600',
        alt: 'The historic bridge connecting Don Det and Don Khon in Si Phan Don',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Si_Phan_Don_-_bridge_from_Don_Det_to_Don_Khone_-_Aug_2024.jpg',
        author: 'Dominic Nelson',
        license: 'CC BY-SA 4.0'
      }
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
    slug: 'tad-somphamit-li-phi',
    modalId: 'tad-somphamit-li-phi-modal',
    name: 'Tad Somphamit · Li Phi',
    country: 'Laos',
    fieldCardNumber: '02',
    region: 'Don Khon · Si Phan Don',
    description: 'A dramatic section of Mekong rapids and falls on Don Khon, where the river is forced through rocky channels. The viewpoints are the experience; the current itself is powerful and dangerous.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tad%20Somphamit%20Li%20Phi%20Waterfall%20Don%20Khon%20Laos',
    gallery: [
      {
        src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Champasak_DonKhone_LiPhi3_tango7174.jpg?width=1600',
        alt: 'Tad Somphamit, also known as Li Phi Falls, on Don Khon in southern Laos',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Champasak_DonKhone_LiPhi3_tango7174.jpg',
        author: 'Tango7174',
        license: 'CC BY-SA 4.0'
      }
    ],
    facts: [
      { label: 'Getting there', value: 'Cross from Don Det to Don Khon, then continue by bicycle, local transport or on foot toward the signed waterfall area.' },
      { label: 'Best time', value: 'Visit early or later in the afternoon. The shape and force of the falls change substantially with the Mekong season.' },
      { label: 'What to wear', value: 'Sun protection and shoes with grip for the viewpoint paths and rocky ground.' },
      { label: 'Price', value: 'Paid entrance. Confirm the current local ticket price before setting out.' },
      { label: 'Duration', value: 'Allow two to four hours from Don Det, depending on transport and how long you stay at the viewpoints.' },
      { label: 'Difficulty', value: 'Easy to moderate walking. Stay behind barriers and away from the fast water and slippery rock edges.' }
    ],
    cityContext: {
      order: 2,
      kicker: 'RAPIDS · DON KHON · MEKONG',
      summary: 'Follow the Don Khon road to one of the most powerful and atmospheric sections of the southern Mekong.',
      duration: '2–4 hours',
      route: 'Across the bridge on Don Khon'
    }
  },
  {
    ...khonePhapheng,
    fieldCardNumber: '03',
    cityContext: {
      order: 3,
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
    fieldCardNumber: '04',
    region: 'Nong Nok Khiene · Trapaing Kreal · Stung Treng',
    description: 'Don Det can be the final island chapter before travelling overland into Cambodia. The route normally continues through Nakasang to the international checkpoint and onward toward Stung Treng, but transport, visa acceptance and border procedures must be confirmed before departure.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nong%20Nok%20Khiene%20Trapaing%20Kreal%20border%20crossing',
    gallery: [
      {
        src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Border_control_Laos-Cambodia_%282%29.jpg?width=1600',
        alt: 'The international border crossing between southern Laos and Stung Treng Province in Cambodia',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Border_control_Laos-Cambodia_(2).jpg',
        author: 'Pierre André',
        license: 'CC BY-SA 4.0'
      }
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
      order: 4,
      kicker: 'BORDER · STUNG TRENG · ONWARD',
      summary: 'Use Don Det as the final Lao stop before the overland route south to the Cambodian border and Stung Treng.',
      duration: 'Transfer day',
      route: 'Via Nakasang and the land border'
    }
  }
];
