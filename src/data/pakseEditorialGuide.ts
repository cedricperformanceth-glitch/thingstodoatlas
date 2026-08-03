import type { EditorialGuideData } from './editorialGuides';

export const pakseEditorialGuide: EditorialGuideData = {
  slug: 'pakse-city-notes',
  destination: 'Pakse',
  typeLabel: 'City notes',
  title: 'Pakse, before you explore',
  subtitle: 'A practical introduction to arriving, choosing a base and understanding the roads that begin here.',
  intro:
    'Pakse makes more sense when you stop treating it as a city-break checklist. It is a calm, useful base at the meeting point of the Mekong, the Bolaven Plateau, Champasak and the road toward the islands.',
  triggerEyebrow: 'Before you explore Pakse',
  triggerTitle: 'Read the city notes',
  edition: 'Starter edition · August 2026',
  warning:
    'Flight schedules, road conditions and local transport arrangements can change. Use these notes to understand Pakse, then confirm the details that affect a fixed connection.',
  sections: [
    {
      id: 'why-pakse',
      eyebrow: '01 · The role of the city',
      title: 'Pakse is the base, not the whole itinerary',
      paragraphs: [
        'Pakse is the provincial capital and the most practical transport and service hub in Southern Laos. The city itself is relaxed and compact, but its real value is how easily it opens several very different journeys.',
        'From one base, travellers can prepare a Bolaven Plateau loop, cross toward Champasak and Vat Phou, follow the Mekong south toward Si Phan Don or simply pause between longer road days.'
      ],
      note: {
        label: 'City note',
        text: 'Choose Pakse for access and rhythm. The strongest experiences usually begin outside the centre.'
      }
    },
    {
      id: 'arriving',
      eyebrow: '02 · First arrival',
      title: 'Most journeys reach Pakse by road or air',
      paragraphs: [
        'Pakse sits on the main southern road network and receives buses, minivans and private transfers from other Lao cities and neighbouring border routes. Road journeys can take longer than the distance suggests, especially in the rainy season.',
        'There is no southern extension of the Laos–China Railway to Pakse, so do not build the final part of the trip around a train connection. Keep a margin between an important arrival and the next departure.'
      ],
      facts: [
        { label: 'Getting there', value: 'Road and air are the main ways travellers reach Pakse.' },
        { label: 'Planning time', value: 'Avoid tight same-day connections after a long minivan or bus journey.' },
        { label: 'Road conditions', value: 'Weather and works can change journey times outside the city.' },
        { label: 'Arrival habit', value: 'Save the accommodation name and address in Lao before leaving.' }
      ]
    },
    {
      id: 'airport',
      eyebrow: '03 · PKZ airport',
      title: 'A small airport with useful, changing connections',
      paragraphs: [
        'Pakse International Airport is close to the city and is straightforward compared with a large regional hub. Vientiane is the most dependable domestic connection, while other domestic and international routes may be seasonal or operate only on selected days.',
        'Check the operating airline directly before building a route around a flight. A timetable visible months in advance can still change, and a missed limited-frequency connection is harder to replace than a road transfer.'
      ],
      facts: [
        { label: 'Airport code', value: 'PKZ · Pakse International Airport.' },
        { label: 'Primary flight', value: 'Vientiane is the core domestic air connection.' },
        { label: 'Flight schedule', value: 'Other direct routes can be seasonal or limited to a few days each week.' },
        { label: 'Backup time', value: 'Keep flexibility around onward travel when a flight is essential.' }
      ]
    },
    {
      id: 'where-to-stay',
      eyebrow: '04 · Choosing a base',
      title: 'Stay central for one night, choose atmosphere for longer',
      paragraphs: [
        'For a short stop, the practical choice is usually a central guesthouse with easy access to restaurants, the river roads, rental shops and onward transport. Pakse is not so large that you need to chase a perfect neighbourhood for a single night.',
        'For a slower stay, decide whether you prefer the compact centre, a quieter riverside position or a property outside the busiest streets. The best base depends more on your next journey than on a list of city attractions.'
      ],
      facts: [
        { label: 'One-night stay', value: 'Prioritise simple access to food, transport and an early departure.' },
        { label: 'Longer stay', value: 'Choose calm, shade and a place where returning after a road day feels easy.' },
        { label: 'Scooter pickup', value: 'Confirm where the bike is collected and whether luggage can be stored.' },
        { label: 'Map check', value: 'Measure the real distance to the bridge, market or departure point you need.' }
      ]
    },
    {
      id: 'moving-around',
      eyebrow: '05 · Inside Pakse',
      title: 'The centre is simple; the useful places are spread out',
      paragraphs: [
        'Parts of central Pakse are comfortable on foot, especially for cafés, restaurants and short errands. The airport, larger market areas, bus stations and some riverside or cross-river stops may require a tuk-tuk, local vehicle or arranged pickup.',
        'Do not assume that an app will always provide an immediate ride. For an early bus, flight or border transfer, arrange transport with the guesthouse or driver beforehand and keep the pickup details in writing.'
      ],
      facts: [
        { label: 'Navigation', value: 'Save pins before leaving Wi-Fi and verify which side of the river or bridge you need.' },
        { label: 'Communication', value: 'Keep the destination name in Lao for drivers and local transport.' },
        { label: 'Payment', value: 'Carry small kip notes for short rides and simple local services.' },
        { label: 'Backup', value: 'Arrange essential early-morning transport the evening before.' }
      ]
    },
    {
      id: 'scooter',
      eyebrow: '06 · The road outward',
      title: 'Rent the scooter for the route, not only the daily price',
      paragraphs: [
        'Pakse is a common starting point for the Bolaven Plateau and other independent road trips. Rental quality, deposits, breakdown support and insurance conditions vary, so compare the whole arrangement rather than choosing only the lowest rate.',
        'Photograph the bike, inspect tyres and brakes, test the lights, clarify damage rules and ask what support exists outside town. Rain, gravel, animals and darkness can turn an easy-looking road into a different ride.'
      ],
      note: {
        label: 'Before the keys',
        text: 'A reliable bike, a proper helmet and daylight are worth more than saving a few thousand kip.'
      }
    },
    {
      id: 'day-trips',
      eyebrow: '07 · What opens from Pakse',
      title: 'Build the stay around one strong direction',
      paragraphs: [
        'East and northeast, the Bolaven Plateau brings cooler elevations, coffee farms, villages and major waterfalls. South and southwest, Champasak and Vat Phou shift the journey toward Mekong landscapes and Khmer heritage.',
        'Further south, Si Phan Don becomes another chapter rather than a quick city excursion. Trying to combine every direction into one rushed day weakens the reason for using Pakse as a base in the first place.'
      ],
      facts: [
        { label: 'Bolaven road', value: 'Waterfalls, coffee country and a route that deserves more than one rushed stop.' },
        { label: 'Southern chapter', value: 'Champasak, Vat Phou and the Mekong road toward the islands.' },
        { label: 'Planning rule', value: 'Choose one direction per day and leave time for weather and detours.' },
        { label: 'Best next step', value: 'Open one landmark note, then build the practical route around it.' }
      ]
    },
    {
      id: 'how-long',
      eyebrow: '08 · Setting the pace',
      title: 'One night is practical; several days reveal the region',
      paragraphs: [
        'A single night can work when Pakse is only a connection. Two nights allow the city to function as a calm base rather than a waiting room. Three to five days make more sense when a plateau route, Champasak or a slower southern itinerary is part of the plan.',
        'The right length depends on whether you are exploring Pakse itself or using it to organise the surrounding region. Count the road days separately instead of pretending every excursion is part of one city stay.'
      ],
      facts: [
        { label: 'Transit stay', value: 'One night for food, sleep and the next connection.' },
        { label: 'Practical base', value: 'Two nights for errands, local exploration and one nearby direction.' },
        { label: 'Road chapter', value: 'Three to five days when the plateau or Champasak is included.' },
        { label: 'Extra time', value: 'Keep one flexible block during the rainy season or before an important flight.' }
      ]
    }
  ],
  links: [
    { label: 'Check Lao Airlines schedules', href: 'https://laoairlines.com/en/flight-schedule/' },
    { label: 'Explore official Champasak tourism information', href: 'https://tourismchampasak.com/' }
  ]
};
