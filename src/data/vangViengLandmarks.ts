import type { CityLandmark } from './laosLandmarks';

export const vangViengLandmarks: CityLandmark[] = [
  {
    slug: 'hot-air-balloon-paramotor-vang-vieng',
    modalId: 'hot-air-balloon-paramotor-vang-vieng-modal',
    name: 'Hot Air Balloon & Paramotor',
    country: 'Laos',
    fieldCardNumber: '01',
    region: 'Vang Vieng · Nam Song valley',
    description: 'Balloon and paramotor flights reveal Vang Vieng from above: the Nam Song River, rice fields, town and limestone towers spread beneath the aircraft. Every departure depends on weather, visibility and the operator’s safety decision.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hot%20Air%20Balloon%20Paramotor%20Vang%20Vieng%20Laos',
    gallery: [
      {
        src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Vang_Vieng_-_Hot_Air_Balloon_%2823871079683%29.jpg?width=1600',
        alt: 'A hot-air balloon flying above Vang Vieng in Laos',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Vang_Vieng_-_Hot_Air_Balloon_(23871079683).jpg',
        author: 'Visions of Domino',
        license: 'CC BY 2.0'
      }
    ],
    facts: [
      { label: 'Getting there', value: 'Book through a current licensed operator in Vang Vieng and follow their pickup or meeting instructions.' },
      { label: 'Best time', value: 'Flights commonly target sunrise or late afternoon, but wind, visibility and weather determine whether departure is possible.' },
      { label: 'What to wear', value: 'Closed shoes and comfortable layers. Follow every operator instruction around launch areas, propellers and landing zones.' },
      { label: 'Price', value: 'Prices vary significantly between balloon and paramotor operators. Confirm the full cost and cancellation policy before paying.' },
      { label: 'Duration', value: 'Allow roughly one to two hours including transfer, briefing, setup, flight and landing.' },
      { label: 'Difficulty', value: 'Physically easy, but safety depends entirely on weather, equipment and a reputable operator.' }
    ],
    cityContext: {
      order: 1,
      kicker: 'SUNRISE · AIR · KARST VALLEY',
      summary: 'Rise above the Nam Song and see the rice fields, town and limestone cliffs from a balloon or tandem paramotor flight.',
      duration: '1–2 hours',
      route: 'Book with a Vang Vieng operator'
    }
  },
  {
    slug: 'phou-bia-from-vang-vieng',
    modalId: 'phou-bia-from-vang-vieng-modal',
    name: 'Phou Bia',
    country: 'Laos',
    fieldCardNumber: '02',
    region: 'Xaysomboun Province · Central Laos',
    description: 'Phou Bia is the highest mountain in Laos and a remote highland objective east of Vang Vieng. It is not a normal local day trip: access has historically been restricted and the wider region requires current official confirmation, careful logistics and awareness of unexploded ordnance risk.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Phou%20Bia%20Xaysomboun%20Laos',
    gallery: [
      {
        src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Phou_Bia_seen_from_Xaysomboun.jpg?width=1600',
        alt: 'Phou Bia mountain seen from Xaysomboun in Laos',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Phou_Bia_seen_from_Xaysomboun.jpg',
        author: 'Boroli',
        license: 'CC BY-SA 4.0'
      }
    ],
    facts: [
      { label: 'Getting there', value: 'Treat this as a remote organised expedition from Vang Vieng into Xaysomboun, not as a scooter day trip.' },
      { label: 'Best time', value: 'Only travel when access is officially confirmed and local weather, roads and security conditions are suitable.' },
      { label: 'What to wear', value: 'Mountain layers, strong footwear and proper expedition equipment chosen with a qualified local organiser.' },
      { label: 'Price', value: 'There is no standard visitor price. Transport, permissions, guides and overnight logistics must be confirmed individually.' },
      { label: 'Duration', value: 'Allow several days for a properly organised route from Vang Vieng and back.' },
      { label: 'Difficulty', value: 'High. Remote terrain, possible access restrictions, checkpoints and UXO risk make independent travel inappropriate.' }
    ],
    cityContext: {
      order: 2,
      kicker: 'HIGHEST PEAK · REMOTE · XAYSOMBOUN',
      summary: 'The roof of Laos belongs in the wider journey notebook, but only as a carefully organised expedition with current permission.',
      duration: 'Multi-day expedition',
      route: 'Remote route east of Vang Vieng'
    }
  }
];
