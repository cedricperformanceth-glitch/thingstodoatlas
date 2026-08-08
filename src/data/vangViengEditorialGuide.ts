import type { EditorialGuideData } from './editorialGuides';

export const vangViengEditorialGuide: EditorialGuideData = {
  slug: 'vang-vieng-city-notes',
  destination: 'Vang Vieng',
  typeLabel: 'City notes',
  title: 'Vang Vieng, beyond the old reputation',
  subtitle: 'A city field guide to the Nam Song, limestone country, railway access and the outdoor journeys that now define Vang Vieng.',
  intro:
    'Vang Vieng is no longer well described by the party-town story that made it famous. The compact centre is only the practical layer; the real destination is the karst valley around the Nam Song, where caves, lagoons, viewpoints and river activities spread far beyond town.',
  triggerEyebrow: 'Before you explore Vang Vieng',
  triggerTitle: 'Read the city notes',
  edition: 'Researched edition · August 2026',
  warning:
    'Railway procedures, river levels, attraction access and adventure operators can change. Confirm time-sensitive details and do not compromise on safety equipment for river, climbing, ballooning or motorised activities.',
  sections: [
    {
      id: 'identity',
      eyebrow: '01 · Read the city',
      title: 'The landscape has outgrown the party-town story',
      paragraphs: [
        'Vang Vieng first grew as a staging point between Vientiane and Luang Prabang, then became internationally associated with backpacker nightlife and tubing. Recent travel writing describes a place that has shifted again: boutique stays, outdoor tourism and a much broader mix of visitors now sit beside the remaining bar scene.',
        'That change is useful because it puts the limestone valley back at the centre. Vang Vieng works for hikers, cyclists, kayakers, climbers, photographers and travellers who simply want a few days among rice fields and karst rather than a nightlife stop.'
      ],
      facts: [
        { label: 'Setting', value: 'On the Nam Song River in Vientiane Province, surrounded by dramatic limestone karst.' },
        { label: 'Then', value: 'Known internationally for backpacker nightlife and river tubing.' },
        { label: 'Now', value: 'A broader outdoor destination with viewpoints, lagoons, caves, kayaking, climbing and scenic flights.' },
        { label: 'Best frame', value: 'Use the town as a base and build the stay around the landscape outside it.' }
      ]
    },
    {
      id: 'railway',
      eyebrow: '02 · The route changed',
      title: 'The railway made Vang Vieng easy to reach without making it small',
      paragraphs: [
        'The Laos–China Railway turned Vang Vieng into a fast stop between Vientiane and Luang Prabang. That convenience has changed the rhythm of a Laos itinerary: the town no longer requires a long road day simply to arrive.',
        'The station is outside the compact centre, so the last transfer still matters. Keep the booking and passport details ready, arrange a shuttle or pickup and avoid treating the published train time as the complete door-to-door journey.'
      ],
      facts: [
        { label: 'Rail', value: 'Fast connection on the Vientiane–Vang Vieng–Luang Prabang corridor.' },
        { label: 'Station', value: 'Outside the central tourist streets; allow time for the final road transfer.' },
        { label: 'Road', value: 'Buses, minivans and the expressway remain useful for flexible regional journeys.' },
        { label: 'Ticket habit', value: 'Keep train number, passport details and booking confirmation available offline.' }
      ]
    },
    {
      id: 'karst',
      eyebrow: '03 · Limestone country',
      title: 'The Nam Song valley is the actual map of Vang Vieng',
      paragraphs: [
        'The Nam Song cuts through a valley framed by limestone towers, rice fields and cave systems. That geography is why a short distance west of town can feel like a completely different destination from the restaurant streets near the river.',
        'The best days often combine only one or two elements: a viewpoint at good light, a lagoon after the heat, a cave with enough time to explore it or a slow road through the countryside. The valley becomes less interesting when every pin is treated as a mandatory stop.'
      ],
      note: {
        label: 'City note',
        text: 'Choose one direction and let the landscape connect the stops instead of zig-zagging across every attraction on the map.'
      }
    },
    {
      id: 'caves-viewpoints',
      eyebrow: '04 · Caves, lagoons and viewpoints',
      title: 'They look close together on the map, but they ask for different days',
      paragraphs: [
        'Tham Chang is one of the easiest developed caves to reach from town, while the western countryside adds water caves, blue lagoons and steep viewpoints such as Nam Xay. Routes vary from paved access to rough tracks, ladders, mud and exposed climbs.',
        'Recent blogs repeatedly emphasise the same practical lesson: heat, dust, rain and road condition change how much can comfortably fit into a day. Proper shoes, water, daylight and a realistic return time improve the experience more than another saved pin.'
      ],
      facts: [
        { label: 'Caves', value: 'Range from developed access to darker, wetter and less controlled routes.' },
        { label: 'Viewpoints', value: 'Steep climbs are best timed around heat, cloud and safe daylight for the descent.' },
        { label: 'Lagoons', value: 'Popular cooling stops, with road quality and crowd levels varying by location.' },
        { label: 'Transport', value: 'Bicycle, scooter, buggy or tuk-tuk should be chosen for the actual road and weather.' }
      ]
    },
    {
      id: 'river',
      eyebrow: '05 · The Nam Song',
      title: 'Tubing survived; the way you approach it should have changed',
      paragraphs: [
        'Tubing and kayaking remain part of Vang Vieng’s identity, but the Nam Song is a river rather than a controlled attraction. Current, depth, debris and route length change through the year, especially after rain.',
        'Use an operator that provides a usable life jacket and explains the route. Do not dive into unfamiliar water, and keep alcohol separate from tubing, kayaking and swimming. The modern version of the Vang Vieng river day is better when the scenery—not risk—is the point.'
      ],
      facts: [
        { label: 'Life jacket', value: 'Wear one for kayak or boat activities and reject damaged or badly fitted equipment.' },
        { label: 'Conditions', value: 'Ask how recent rain and river level change the route that day.' },
        { label: 'Alcohol', value: 'Do not combine heavy drinking with river activities.' },
        { label: 'Insurance', value: 'Check that adventure activities are covered before booking them.' }
      ]
    },
    {
      id: 'nightlife-safety',
      eyebrow: '06 · After dark',
      title: 'One old reputation now needs one modern safety rule',
      paragraphs: [
        'Vang Vieng still has hostels and nightlife, but recent methanol poisonings in Laos have made unknown spirits a serious safety issue rather than a generic travel warning. Methanol cannot be reliably identified by taste or smell.',
        'Avoid homemade or unsealed spirits, be cautious with free shots and mixed drinks from uncertain sources, and seek urgent medical help after unusual visual symptoms, severe vomiting, confusion or rapid deterioration following alcohol consumption. A cheap night out is not worth gambling on an unknown bottle.'
      ],
      note: {
        label: 'Safety note',
        text: 'Choose reputable premises and sealed drinks when possible. Unknown free spirits are never worth the risk.'
      }
    },
    {
      id: 'base-season',
      eyebrow: '07 · Base and season',
      title: 'Stay central for convenience, then let weather choose the road',
      paragraphs: [
        'The centre is easiest for train transfers, restaurants and tour pickup. Riverside and countryside stays trade convenience for atmosphere and wider karst views. Before booking outside town, check the nearest bridge, road surface and what happens after dark.',
        'Dry months make many tracks easier but can bring dust and hotter afternoons. Rain turns the valley greener and the waterfalls stronger while increasing mud, river flow and route uncertainty. The best choice is not a universal season; it is a plan that matches what you want to do.'
      ],
      facts: [
        { label: 'Central', value: 'Best for short stays, train transfers and easy access to food and operators.' },
        { label: 'Riverside', value: 'Better atmosphere and views, with bridge access affecting convenience.' },
        { label: 'Dry period', value: 'Simpler roads and trails, with more dust and stronger heat later in the season.' },
        { label: 'Wet period', value: 'Greener scenery and stronger water, but muddier tracks and more variable river conditions.' }
      ]
    },
    {
      id: 'pace',
      eyebrow: '08 · Setting the pace',
      title: 'Three nights is where Vang Vieng stops feeling like a stopover',
      paragraphs: [
        'Two nights can fit one countryside day and one river or cave experience. Three to four nights let viewpoints, lagoons and the Nam Song become separate chapters instead of competing for the same afternoon.',
        'Keep one weather-flexible block. A clouded-out viewpoint, a high river or a muddy road does not ruin the stay when the itinerary has another day to move things around.'
      ],
      facts: [
        { label: 'Quick stay', value: 'Two nights for one countryside route plus one river or cave activity.' },
        { label: 'Balanced stay', value: 'Three to four nights for a viewpoint, lagoon route, Nam Song and slower evenings.' },
        { label: 'Weather buffer', value: 'Keep one activity movable instead of booking every morning tightly.' },
        { label: 'Departure', value: 'Arrange the station transfer before an early train rather than improvising at dawn.' }
      ],
      note: {
        label: 'Atlas note',
        text: 'Vang Vieng becomes more interesting the moment the town stops being the destination and the valley becomes the plan.'
      }
    }
  ],
  links: [
    { label: 'Wikipedia · Vang Vieng background and history', href: 'https://en.wikipedia.org/wiki/Vang_Vieng' },
    { label: 'Nomadic Matt · current Vang Vieng guide', href: 'https://www.nomadicmatt.com/travel-guides/laos-travel-guide/vang-vieng/' },
    { label: 'This World Traveled · Vang Vieng outdoor guide', href: 'https://thisworldtraveled.com/what-to-do-in-vang-vieng-laos/' },
    { label: 'Where to Flow · Vang Vieng costs, safety and planning', href: 'https://wheretoflow.com/vang-vieng-guide/' },
    { label: 'Official Vientiane Province tourism information', href: 'https://www.tourismlaos.org/central-provinces/vientiane-province/' },
    { label: 'Smartraveller · current Laos safety advice', href: 'https://www.smartraveller.gov.au/destinations/asia/laos' }
  ]
};
