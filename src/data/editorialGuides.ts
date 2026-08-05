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
      title: 'Choose the entry that fits your route',
      paragraphs: [
        'Laos can be entered through its international airports or across an overland border. For eligible passports, a visa on arrival remains a simple option at many checkpoints, so applying for an eVisa before the trip is useful but not always necessary. Check the exact border you plan to use, as visa services are not identical everywhere.',
        'A tourist stay normally begins with 30 days. Extensions are arranged inside Laos in additional 30-day blocks, with travellers often planning around as much as three months before leaving the country and entering again. Bring your passport, an identity photo and cash; a 30-day extension is commonly charged at 600,000 kip plus 25,000 kip in processing fees. Confirm the number of extensions and the current price with immigration when you apply, as local procedures can change.'
      ],
      facts: [
        { label: 'eVisa', value: 'Optional for eligible passports. Apply through the official Lao eVisa website and enter at a designated checkpoint.' },
        { label: 'Visa on arrival', value: 'Available at many international airports and land borders, and generally straightforward to obtain.' },
        { label: 'Extension', value: 'Plan for 600,000 kip plus 25,000 kip in processing fees, and bring a passport photo.' },
        { label: 'Longer stay', value: 'Two 30-day extensions are commonly used; after about 90 days in total, leave Laos before entering again.' }
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
      title: 'Match the transport to the part of Laos',
      paragraphs: [
        'The fast railway belongs to the north. It runs from Vientiane through Vang Vieng and Luang Prabang to Boten, with international trains continuing to Kunming in China. Several European passports currently qualify for short visa-free visits to China, which can turn the railway into a real onward route rather than a border curiosity; check the policy for your passport and travel date before booking. A future high-speed connection toward Thailand is planned, but it is not yet a journey you can rely on.',
        'Outside that corridor, buses and minivans still do most of the work. Published journey times are often optimistic: delays, mechanical problems, roadside repairs and occasional vehicle changes are part of the reality, so never build an essential same-day connection around the advertised arrival time. Between Pakse and Vientiane, compare the bus with the domestic flight; the airfare can be several times higher, but it may still be a sensible trade for the time saved.'
      ],
      facts: [
        { label: 'Northern railway', value: 'The fast line serves the Vientiane–Vang Vieng–Luang Prabang–Boten corridor, not the centre or south.' },
        { label: 'China connection', value: 'International trains continue to Kunming. Check Chinese entry rules for your passport and date before buying the ticket.' },
        { label: 'Bus reality', value: 'Allow time for late departures, roadside repairs, breakdowns and occasional changes of vehicle.' },
        { label: 'Pakse ↔ Vientiane', value: 'Domestic flights operate on this route. Compare the current fare and schedule with the long bus journey.' }
      ],
      note: {
        label: 'On the horizon',
        text: 'Thailand’s planned high-speed railway is intended to connect with the Laos–China corridor through Nong Khai, but the practical through-service date remains uncertain.'
      }
    },
    {
      id: 'scooter',
      eyebrow: '05 · Renting a scooter',
      title: 'Easy to rent does not mean easy to replace',
      paragraphs: [
        'Scooter rental is informal in practice. A shop may hand over the keys without asking for an international permit, but that does not remove the legal requirement, insurance conditions or the possibility of a police check. Checks are more noticeable in towns; outside them, the larger risks are road surfaces, animals, weather, darkness and being far from help. Wear a helmet even where enforcement feels relaxed.',
        'The bike remains your responsibility from handover to return. Theft, damage and breakdowns do happen, and many shops ask to hold the original passport, especially for multi-day loops. That request is common, but it carries real risk: use a reputable operator, photograph the bike, read the contract, obtain a written receipt and ask for an alternative deposit whenever possible. For remote travel, a semi-automatic is often the practical choice because local mechanics and parts are easier to find than for some automatic scooters.'
      ],
      facts: [
        { label: 'Licence & checks', value: 'The rental desk may not ask for documents, but local law, police checks and insurance conditions still apply.' },
        { label: 'Passport deposit', value: 'A common request for loop rentals, but a risky one. Prefer an alternative deposit or use a reputable shop with a written receipt.' },
        { label: 'Bike choice', value: 'A semi-automatic is often easier to repair outside the cities, where mechanics and simple parts are more widely available.' },
        { label: 'Theft & damage', value: 'Lock the bike, park carefully and understand who pays for theft, recovery, damage or a breakdown before leaving.' }
      ],
      note: {
        label: 'Do not improvise',
        text: 'Guided motocross and off-road trips are available. Use a local operator for difficult tracks and do not venture alone onto remote routes where phone coverage, rescue and mechanical help may be limited.'
      }
    },
    {
      id: 'phone',
      eyebrow: '06 · Your phone',
      title: 'Use technology as a backup, not a guarantee',
      paragraphs: [
        'A local SIM makes navigation, accommodation messages and last-minute transport changes much easier. Unitel is a reliable first choice, while Lao Telecom also works well in many areas. Coverage keeps improving, but do not plan as if 4G, Wi-Fi and electricity will follow you everywhere; remote stretches can still lose signal, and occasional power cuts remain part of the journey.',
        'Translation tools are improving, but Lao results can still be uneven. When a Lao translation looks doubtful, trying Thai can produce a clearer sentence that many Lao people will understand. Google Maps needs the same caution: map data may move faster than business listings, while Street View photographs can be years old. Check the image date, confirm directly and look beyond the first pin.'
      ],
      facts: [
        { label: 'Local SIM', value: 'Unitel is a strong default; Lao Telecom is another useful option. Buy the SIM before leaving a major town.' },
        { label: 'Translation', value: 'Try Lao first, then Thai when the result is unclear. Keep sentences short and show the address on screen.' },
        { label: 'Google Maps', value: 'Opening hours, pins and business status can be wrong. Street View is historical imagery, not a live view.' },
        { label: 'Offline backup', value: 'Save maps, screenshots, phone numbers and the Lao or Thai spelling before remote sections.' }
      ]
    },
    {
      id: 'route',
      eyebrow: '07 · Building the route',
      title: 'Think in chapters, not in checkpoints',
      paragraphs: [
        'A first trip rarely needs the whole country. Choose one strong region, then add a second only when the transport between them makes sense. The north, the central cave roads and the south each follow a different rhythm, so the same planning method will not work everywhere.',
        'A place that looks close on the map may still consume most of the day. Around Thakhek, a cave can mean four or five hours of riding for the return journey, with few practical options to sleep nearby. Read the complete route — road surface, daylight, transport, fuel and accommodation — before deciding that a pin is an easy day trip.'
      ],
      facts: [
        { label: 'Northern chapter', value: 'Railway towns and mountain routes reward a plan built around stations and longer bases.' },
        { label: 'Central chapter', value: 'Caves and loops are measured in riding hours, road conditions and daylight, not straight-line distance.' },
        { label: 'Southern chapter', value: 'Pakse works as a hub, but the plateau, Champasak and the islands each require a different transport rhythm.' },
        { label: 'Planning rule', value: 'Change the method with the region: walk, hire a driver, ride, sleep elsewhere or remove the stop.' }
      ],
      note: {
        label: 'Read the whole day',
        text: 'A nearby attraction is not automatically an accessible attraction. Plan the return journey before committing to the outward one.'
      }
    },
    {
      id: 'respect',
      eyebrow: '08 · Travelling well',
      title: 'Pay attention before taking space',
      paragraphs: [
        'At temples, cover shoulders and knees, remove shoes and hats where expected, and ask before photographing people or ceremonies. Outside beaches, pools and private accommodation, dress with the same restraint you would expect from a guest in your own community.',
        'Treat Buddhist objects as part of a living tradition, not ordinary decoration. For an amulet or sacred tattoo, begin with a temple or a recognised specialist connected to the practice; if the religious community does not offer it, an ordinary jewellery shop or tattoo studio is not an automatic substitute.'
      ],
      facts: [
        { label: 'Feet', value: 'Keep feet off tables and chairs, and avoid pointing them toward people, food or sacred objects.' },
        { label: 'Public behaviour', value: 'Do not walk around town shirtless or treat local streets like a private resort.' },
        { label: 'Small customs', value: 'Some families avoid whistling at night, singing before the meal is finished or turning a whole fish over. Watch first and follow the table.' },
        { label: 'Your example', value: 'Visitors are noticed, especially by children. Respect is also the example you leave behind.' }
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
