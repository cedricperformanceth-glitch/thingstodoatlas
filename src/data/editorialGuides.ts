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
  title: 'Laos, before you draw the route',
  subtitle: 'A country field guide to the regions, heritage, transport and everyday rhythms that shape a journey through Laos.',
  intro:
    'Laos is easier to understand as a sequence of very different travel chapters than as one straight itinerary. The railway changes the north, limestone and caves define much of the centre, and the south opens toward coffee country, Khmer heritage and the broad Mekong.',
  triggerEyebrow: 'Before you choose a place',
  triggerTitle: 'Read the Laos field guide',
  edition: 'Researched edition · August 2026',
  warning:
    'Visa rules, transport schedules, border procedures, prices and local access can change quickly. Use this guide for context and planning, then confirm any time-sensitive detail with the relevant official source before travelling.',
  sections: [
    {
      id: 'regions',
      eyebrow: '01 · Read the country',
      title: 'Plan Laos by regions, not by straight-line distance',
      paragraphs: [
        'The north is increasingly organised around the Vientiane–Vang Vieng–Luang Prabang–Boten railway corridor, with mountain roads and river journeys branching away from it. Central Laos slows back down around limestone country, the Thakhek Loop, caves and long road stages. South of Pakse, the rhythm changes again toward the Bolaven Plateau, Champasak and Si Phan Don.',
        'That difference matters more than the size of the country on a map. A short northern rail segment can take less time than a modest-looking road day in Khammouane or the south. Build each region with the transport that actually exists there.'
      ],
      facts: [
        { label: 'North', value: 'Railway towns, mountain roads, river journeys and the historic city of Luang Prabang.' },
        { label: 'Central Laos', value: 'Karst landscapes, caves, motorbike loops and long rural road stages.' },
        { label: 'South', value: 'Pakse, coffee country, waterfalls, Vat Phou and the Mekong islands.' },
        { label: 'Planning rule', value: 'Change the method with the region instead of forcing one transport style across the whole country.' }
      ]
    },
    {
      id: 'heritage',
      eyebrow: '02 · UNESCO and living heritage',
      title: 'Four World Heritage properties reveal four different versions of Laos',
      paragraphs: [
        'Laos now has four UNESCO World Heritage properties. Luang Prabang represents an unusually preserved meeting of Lao religious architecture, traditional houses and colonial-era urban fabric. Vat Phou sits inside the wider Champasak cultural landscape, where sacred geography and Khmer history extend well beyond a single temple.',
        'The Plain of Jars adds a prehistoric archaeological landscape in Xiengkhuang. In 2025, Hin Nam No National Park became the Lao part of the transboundary Phong Nha-Ke Bang and Hin Nam No World Heritage property, recognising a major karst landscape shared with Vietnam. Heritage in Laos is therefore not one architectural style: it stretches from living Buddhist towns to megaliths, sacred mountains and cave ecosystems.'
      ],
      facts: [
        { label: 'Luang Prabang', value: 'World Heritage since 1995 · historic town and living Buddhist landscape.' },
        { label: 'Vat Phou', value: 'World Heritage since 2001 · Champasak cultural landscape and Khmer heritage.' },
        { label: 'Plain of Jars', value: 'World Heritage since 2019 · megalithic archaeological sites in Xiengkhuang.' },
        { label: 'Hin Nam No', value: 'Added in 2025 to the transboundary Phong Nha-Ke Bang and Hin Nam No natural property.' }
      ],
      note: {
        label: 'Field note',
        text: 'UNESCO status is useful context, not a ranking. Some of the strongest Lao journeys happen between the famous sites.'
      }
    },
    {
      id: 'transport',
      eyebrow: '03 · Moving through Laos',
      title: 'The railway is fast; the country around it is not',
      paragraphs: [
        'The Laos–China Railway has transformed travel between Vientiane, Vang Vieng and Luang Prabang, but it does not solve transport across the whole country. Outside that corridor, buses, minivans, private drivers, domestic flights, boats and rented motorbikes still do most of the work.',
        'Published road times are best treated as estimates. Weather, roadworks, breakdowns, loading stops and local transfers can stretch a journey. When Pakse and Vientiane are both in the itinerary, compare the long road journey with the domestic flight rather than assuming the bus is automatically the better fit.'
      ],
      facts: [
        { label: 'Rail corridor', value: 'Vientiane · Vang Vieng · Luang Prabang · Boten, with onward international rail toward China.' },
        { label: 'Elsewhere', value: 'Road transport remains the default through much of central and southern Laos.' },
        { label: 'Connections', value: 'Avoid building an essential same-day connection around an optimistic bus arrival.' },
        { label: 'Offline habit', value: 'Save the next address, local-language spelling and route before leaving reliable data coverage.' }
      ]
    },
    {
      id: 'arrival-money',
      eyebrow: '04 · Entry, money and connection',
      title: 'Keep one backup for every practical system',
      paragraphs: [
        'Entry options vary by passport and checkpoint. Eligible travellers may use the Lao eVisa at designated entry points, while visa-on-arrival availability depends on the border being used. Check the exact crossing rather than assuming a rule that worked at an airport also applies to a small land border.',
        'The Lao kip remains the everyday currency. Cash is still the safest default for markets, small restaurants, rural guesthouses and fuel stops. QR payments are common in local life but foreign banking compatibility is inconsistent, so combine cash with a backup card. A local SIM makes navigation and last-minute coordination much easier, but remote stretches still reward screenshots and offline maps.'
      ],
      facts: [
        { label: 'Entry', value: 'Check the official Lao eVisa service and the exact border or airport you plan to use.' },
        { label: 'Cash', value: 'Withdraw before rural routes and keep smaller kip notes for local payments.' },
        { label: 'Cards & QR', value: 'Useful in larger towns, but not a reliable replacement for cash everywhere.' },
        { label: 'Phone', value: 'Buy a local SIM early and keep essential maps and bookings available offline.' }
      ]
    },
    {
      id: 'roads',
      eyebrow: '05 · Scooters, roads and the invisible map',
      title: 'A motorbike opens the road, but it also changes the responsibility',
      paragraphs: [
        'Renting a scooter or semi-automatic is easy in many traveller hubs, but an informal handover does not remove licence, insurance or legal requirements. Inspect tyres, brakes and lights, photograph the bike, understand the deposit and ask what happens after a breakdown far from town.',
        'Road travel also carries one distinctly Lao rule: do not leave marked paths in areas affected by unexploded ordnance. Decades after the conflicts of the twentieth century, UXO still affects parts of the country. Marked trails, local guidance and official warnings matter more than curiosity about an untracked shortcut.'
      ],
      facts: [
        { label: 'Bike choice', value: 'Choose reliability, repairability and support before choosing the cheapest daily rate.' },
        { label: 'Insurance', value: 'Check whether your licence and policy actually cover the vehicle and activity.' },
        { label: 'Night riding', value: 'Animals, potholes, unlit vehicles and limited help make darkness a poor time to improvise.' },
        { label: 'UXO', value: 'Stay on established paths and follow local or official guidance in contaminated areas.' }
      ],
      note: {
        label: 'Do not improvise',
        text: 'A road that feels empty is not automatically a safe place to take risks. Distance from help is part of the route.'
      }
    },
    {
      id: 'food',
      eyebrow: '06 · Eat with the country',
      title: 'Sticky rice is a clue to how everyday Laos works',
      paragraphs: [
        'Lao food is built around shared textures and strong contrasts: sticky rice, herbs, grilled meats, soups, fermented flavours and chilli-rich dips appear in many regional forms. Laap is internationally familiar, but a market breakfast, a simple bowl of noodles or grilled food beside the road often says more about a place than a restaurant designed around a traveller menu.',
        'Meals are also social. Watch how food is shared, use the basket of sticky rice as intended and let local habits set the pace. Regional food changes as the landscape changes, so the north, the Mekong corridor and the south should not be treated as one identical menu.'
      ],
      facts: [
        { label: 'Khao niew', value: 'Sticky rice is a daily staple and one of the clearest anchors of Lao food culture.' },
        { label: 'Laap', value: 'Minced meat or fish salad shaped by herbs, toasted rice and regional variations.' },
        { label: 'Markets', value: 'Useful for breakfast, fruit, grilled food and seeing what a town actually eats.' },
        { label: 'Best habit', value: 'Try local dishes before defaulting to the same traveller menu from city to city.' }
      ]
    },
    {
      id: 'season',
      eyebrow: '07 · Weather changes the route',
      title: 'The dry and wet seasons create different versions of the same journey',
      paragraphs: [
        'Dry-season travel generally simplifies roads, river crossings and outdoor access, while the wet season brings greener landscapes, stronger waterfalls and more variable tracks. Neither is automatically better: each changes what is comfortable, photogenic and safe.',
        'On plateau and cave routes, recent rain matters as much as the month on the calendar. Water levels can alter cave boats, river activities and swimming conditions; mud can turn an easy track into a slow one. Ask locally when an activity depends on water or an unsealed road.'
      ],
      facts: [
        { label: 'Dry months', value: 'Easier roads and clearer logistics, with hotter or dustier conditions in some regions.' },
        { label: 'Wet months', value: 'Greener landscapes and stronger water, but more disruption to roads, trails and caves.' },
        { label: 'Altitude', value: 'The Bolaven Plateau can feel much cooler than lowland southern Laos.' },
        { label: 'Decision rule', value: 'Recent local conditions outrank a generic seasonal description.' }
      ]
    },
    {
      id: 'route',
      eyebrow: '08 · Building the journey',
      title: 'Choose fewer chapters and leave space between them',
      paragraphs: [
        'A first trip does not need every famous Lao stop. A strong route might combine the northern railway corridor with one slower mountain extension, or focus on central cave country, or use Pakse as the beginning of a southern chapter toward the plateau, Champasak and the islands.',
        'The country rewards empty time because transport and weather are not the only variables. A conversation, a village, a market or a road you did not expect can become the memory that justifies the journey. Build the plan tightly enough to move, but loosely enough to notice where you are.'
      ],
      facts: [
        { label: 'Short trip', value: 'Choose one strong region and understand it rather than collecting distant highlights.' },
        { label: 'Longer trip', value: 'Add a second region only when the transport between them earns its place in the route.' },
        { label: 'Buffer', value: 'Keep one flexible day before an important international connection.' },
        { label: 'Respect', value: 'Dress and behave as a guest around temples, villages, ceremonies and everyday family spaces.' }
      ],
      note: {
        label: 'Atlas note',
        text: 'In Laos, the road between two saved places is often part of the reason to travel at all.'
      }
    }
  ],
  links: [
    { label: 'UNESCO · Laos World Heritage properties', href: 'https://whc.unesco.org/en/statesparties/la/' },
    { label: 'Official Lao eVisa service', href: 'https://laoevisa.gov.la/' },
    { label: 'Indie Traveller · Laos travel guide', href: 'https://www.indietraveller.co/laos-travel-guide/' },
    { label: 'Discover Laos · route timing and itinerary notes', href: 'https://discoverlaos.info/blog/laos-itinerary-2-weeks/' },
    { label: 'Terra Lao · local travel stories and guides', href: 'https://terralao.la/blog' },
    { label: 'Serious Eats · introduction to Lao food', href: 'https://www.seriouseats.com/a-guide-to-the-essential-dishes-of-laos' }
  ]
};
