export type EditorialGuideFact = {
  label: string;
  value: string;
};

export type EditorialGuideNote = {
  label?: string;
  text: string;
};

export type EditorialGuideSection = {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  facts?: EditorialGuideFact[];
  note?: EditorialGuideNote;
};

export type EditorialGuideLink = {
  label: string;
  href: string;
};

export type EditorialGuideData = {
  slug: string;
  destination: string;
  typeLabel: string;
  title: string;
  subtitle: string;
  intro: string;
  triggerEyebrow: string;
  triggerTitle: string;
  edition?: string;
  warning?: string;
  sections: EditorialGuideSection[];
  links?: EditorialGuideLink[];
};

export const laosEditorialGuide: EditorialGuideData = {
  slug: 'laos-field-guide',
  destination: 'Laos',
  typeLabel: 'Country field guide',
  title: 'Laos, before you begin',
  subtitle: 'A practical introduction to arriving, moving around and building a route that fits the country.',
  intro:
    'Laos is easier to enjoy when you stop treating it as a list of attractions. Distances take time, plans stay flexible and the best part of a route is often what happens between the famous stops.',
  triggerEyebrow: 'Before you choose a place',
  triggerTitle: 'Read the Laos field guide',
  edition: 'Starter edition · August 2026',
  warning:
    'Entry rules, transport schedules and payment systems can change. Use this guide to understand how the country works, then confirm time-sensitive details before travelling.',
  sections: [
    {
      id: 'why-laos',
      eyebrow: '01 · The rhythm',
      title: 'Come for the space between places',
      paragraphs: [
        'Laos is not built around speed. It works best for travellers who are comfortable with quieter towns, long road days, local food, changing plans and a little uncertainty.',
        'The north brings mountain routes, old towns and the railway corridor. Central Laos is shaped by limestone, caves and motorbike loops. The south opens toward the Bolaven Plateau, Khmer heritage and the Mekong islands.'
      ],
      note: {
        label: 'Field note',
        text: 'Leave empty days in the itinerary. In Laos, flexibility is not lost time; it is part of the trip.'
      }
    },
    {
      id: 'entry',
      eyebrow: '02 · Before arrival',
      title: 'Entering Laos without guessing',
      paragraphs: [
        'Visa rules depend on your passport, the purpose of the trip and the checkpoint you use. The official Lao eVisa is designed for eligible tourist passports, but it is accepted only at designated entry points.',
        'Keep a printed approval letter when travelling with an eVisa, check that your passport has sufficient validity and blank pages, and verify whether your arrival point uses a digital arrival form. Do not rely on an old border report or a screenshot from another traveller.'
      ],
      facts: [
        { label: 'eVisa format', value: 'Tourist visa, single entry, with a 30-day stay for eligible travellers.' },
        { label: 'Processing', value: 'The official service advises allowing at least three working days; delays remain possible.' },
        { label: 'Entry point', value: 'Use one of the checkpoints currently designated for eVisa entry.' },
        { label: 'Passport', value: 'Check for at least six months of validity and enough blank space before departure.' }
      ]
    },
    {
      id: 'money',
      eyebrow: '03 · Everyday money',
      title: 'Carry kip, and keep a second option',
      paragraphs: [
        'The Lao kip is the everyday currency. Cash remains the safest default for markets, small restaurants, rural guesthouses, local transport and fuel stops. ATMs are common in larger towns, but availability becomes less predictable on remote routes.',
        'Cards are accepted by some hotels and established businesses, while QR payment is widespread in local life. A foreign traveller should not assume that every Lao QR code will work with an overseas banking app, so keep cash and a backup card.'
      ],
      facts: [
        { label: 'Primary currency', value: 'Lao kip for daily purchases.' },
        { label: 'Best habit', value: 'Withdraw before leaving a major town and keep smaller notes for local payments.' },
        { label: 'QR payments', value: 'Useful only when your bank or wallet is compatible with the merchant network.' },
        { label: 'Backup', value: 'Carry a second card separately and avoid depending on one ATM or one app.' }
      ]
    },
    {
      id: 'transport',
      eyebrow: '04 · Moving around',
      title: 'Choose transport by region, not by habit',
      paragraphs: [
        'The railway has changed travel through the northern corridor, but it does not replace the rest of the transport network. Buses, minivans, shared local vehicles, domestic flights and private transfers still connect most routes outside the line.',
        'Journey times on the road are often longer than the distance suggests. Build in daylight, weather, road conditions and waiting time instead of planning every transfer as if it were a fixed urban timetable.'
      ],
      facts: [
        { label: 'North', value: 'Rail for the main corridor, then local transport for the final distance.' },
        { label: 'Central Laos', value: 'Road travel and scooter loops shape many itineraries.' },
        { label: 'South', value: 'Pakse is the practical hub for the plateau, Champasak and the islands.' },
        { label: 'Planning rule', value: 'Avoid tight same-day connections when the next leg is essential.' }
      ]
    },
    {
      id: 'scooter',
      eyebrow: '05 · Renting a scooter',
      title: 'The keys are easy; the responsibility is yours',
      paragraphs: [
        'Scooters and motorbikes unlock some of the strongest routes in Laos, especially around Thakhek and the Bolaven Plateau. Rental standards, deposits, insurance and maintenance vary widely between shops.',
        'Before leaving, photograph the bike, test the brakes and lights, inspect the tyres, clarify what happens after damage or a breakdown, and check the licence and international permit rules that apply to you. A helmet and suitable insurance matter more than the cheapest daily rate.'
      ],
      note: {
        label: 'Do not skip',
        text: 'Rain, gravel, animals, roadworks and darkness can turn an easy-looking road into a very different ride.'
      }
    },
    {
      id: 'phone',
      eyebrow: '06 · Your phone',
      title: 'Use technology as a backup, not a guarantee',
      paragraphs: [
        'A local SIM is useful for navigation, accommodation messages and transport changes. Download important maps before leaving town and save addresses in both English and Lao when a destination is difficult to explain.',
        'Google Maps and translation tools are useful starting points, but opening hours, road conditions and map pins can be wrong. Messaging apps help with guesthouses and drivers; payment apps are useful only after you know they work with your bank.'
      ],
      facts: [
        { label: 'Navigation', value: 'Save offline maps and screenshots before remote stretches.' },
        { label: 'Translation', value: 'Keep the Lao spelling of hotels, villages and transport points.' },
        { label: 'Communication', value: 'Confirm important pickups directly with the driver or property.' },
        { label: 'Payments', value: 'Do not build the trip around a QR wallet until compatibility is confirmed.' }
      ]
    },
    {
      id: 'route',
      eyebrow: '07 · Building the route',
      title: 'Think in chapters, not in checkpoints',
      paragraphs: [
        'A first trip rarely needs the whole country. Choose one strong region, then add a second only when the transport between them makes sense. Northern Laos, the central cave routes and the south each work as a complete chapter.',
        'Use the map to decide what kind of trip you want before counting destinations. A slower route with two meaningful bases will usually reveal more than a fast list of overnight stops.'
      ],
      facts: [
        { label: 'Northern chapter', value: 'Luang Prabang, mountain landscapes and the rail corridor.' },
        { label: 'Central chapter', value: 'Vientiane, Thakhek, limestone roads and major caves.' },
        { label: 'Southern chapter', value: 'Pakse, Bolaven Plateau, Wat Phou and Si Phan Don.' },
        { label: 'Best next step', value: 'Choose one active city guide and build outward from there.' }
      ]
    },
    {
      id: 'respect',
      eyebrow: '08 · Travelling well',
      title: 'Pay attention before taking space',
      paragraphs: [
        'Dress and behave respectfully at temples, remove shoes where requested and ask before photographing people, homes or ceremonies. Villages are lived-in communities, not open-air attractions.',
        'Patience is practical. English may be limited, service can be informal and a direct answer is not always immediate. A calm tone, simple language and a willingness to adapt will take you further than urgency.'
      ],
      note: {
        label: 'Remember',
        text: 'You are not only moving through a destination. You are entering someone else’s everyday life.'
      }
    }
  ],
  links: [
    { label: 'Check the official Lao eVisa service', href: 'https://laoevisa.gov.la/' }
  ]
};
