import type { TadLoPartnerPlace } from './tadLoPlaces';

export type TadLoSelectionPlace = TadLoPartnerPlace & {
  cardStyle: 'selection';
  selectionLabel: string;
  officialUrl: string;
  sourceUrl?: string;
  galleryImages?: Array<{
    src: string;
    alt: string;
  }>;
};

const fandeeGallery = [
  {
    src: 'https://mmjvwsiurlojruabssuf.supabase.co/storage/v1/object/sign/site-media/60490d2d-0386-4b29-a4a7-14c025ec1053-WhatsApp-Image-2026-01-09-at-09.57.26.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NDY2ZGE5Yy05YzQxLTRjYjUtYWJiOC1lNGQyMjUxY2Y2MjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLW1lZGlhLzYwNDkwZDJkLTAzODYtNGIyOS1hNGE3LTE0YzAyNWVjMTA1My1XaGF0c0FwcC1JbWFnZS0yMDI2LTAxLTA5LWF0LTA5LjU3LjI2LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyMDE0MDgzLCJleHAiOjE4MTM1NTAwODN9.AowBO47_lfeGh3IdR0FqoPQf-wne7E0qTvn42hOHk5M',
    alt: 'Tree house accommodation surrounded by tropical greenery at Fandee Island'
  },
  {
    src: 'https://mmjvwsiurlojruabssuf.supabase.co/storage/v1/object/sign/site-media/aeb21f73-1492-464b-87c2-41bd98ac8b8e-241720782.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NDY2ZGE5Yy05YzQxLTRjYjUtYWJiOC1lNGQyMjUxY2Y2MjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLW1lZGlhL2FlYjIxZjczLTE0OTItNDY0Yi04N2MyLTQxYmQ5OGFjOGI4ZS0yNDE3MjA3ODIuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjAxNDA3MCwiZXhwIjoxODEzNTUwMDcwfQ.IeotbjvSFmqqwg9imar7j_qMbodTXUEx3LwWEX1I2CE',
    alt: 'Nature accommodation and garden atmosphere at Fandee Island in Tad Lo'
  },
  {
    src: 'https://mmjvwsiurlojruabssuf.supabase.co/storage/v1/object/sign/site-media/08048758-30f2-419a-943f-ba3c8d52db6b-626254071.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NDY2ZGE5Yy05YzQxLTRjYjUtYWJiOC1lNGQyMjUxY2Y2MjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLW1lZGlhLzA4MDQ4NzU4LTMwZjItNDE5YS05NDNmLWJhM2M4ZDUyZGI2Yi02MjYyNTQwNzEuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjAxNDA4OCwiZXhwIjoxODEzNTUwMDg4fQ.rCe4xCSWY-NPiXn4lZsNZgTey0Xkeubnpfg67L1zIKw',
    alt: 'A quiet view across the Fandee Island property in southern Laos'
  },
  {
    src: 'https://mmjvwsiurlojruabssuf.supabase.co/storage/v1/object/sign/site-media/b1c76c70-ae63-471e-878e-2c0263b42be7-626254102.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NDY2ZGE5Yy05YzQxLTRjYjUtYWJiOC1lNGQyMjUxY2Y2MjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLW1lZGlhL2IxYzc2YzcwLWFlNjMtNDcxZS04NzhlLTJjMDI2M2I0MmJlNy02MjYyNTQxMDIuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjAxMzc2NCwiZXhwIjoxODEzNTQ5NzY0fQ.zD4o3LG6Xw4G1CnjdfbL4pazlFkbGH46wkYJ8IU285w',
    alt: 'Lake house accommodation beside the water at Fandee Island'
  }
];

export const fandeeIslandSelection: TadLoSelectionPlace = {
  slug: 'fandee-island',
  name: 'Fandee Island',
  category: 'accommodation',
  subcategory: 'Eco stay · Tree houses · Lake houses',
  cuisine: 'Lao, Asian and Western food',
  city: 'Tad Lo',
  country: 'Laos',
  image: fandeeGallery[0].src,
  imageAlt: fandeeGallery[0].alt,
  galleryImages: fandeeGallery,
  cardNote: 'an island stay that feels apart from the road',
  shortDescription: 'Tree houses, lake houses and nature stays gathered around a quiet island in the heart of Tad Lo.',
  description: 'Fandee Island is an eco-minded resort inside Tad Lo village, with unusual accommodation ranging from tree houses and lake houses to the Stars Dome, Mountain House and Hilltop House. A lakeside restaurant and nearby activities make it possible to stay, eat and slow down in one place.',
  whyWeRecommend: 'This is an Atlas selection for travellers who want the accommodation itself to become part of the Tad Lo experience. The island setting, varied rooms and walkable access to the village make it more than a practical overnight stop.',
  highlights: ['Tree houses and lake houses', 'Stars Dome', 'Lakeside restaurant', 'Walkable Tad Lo location'],
  mapsUrl: 'https://maps.app.goo.gl/L6uvqFPbGw7W6wWt7',
  mapLabel: 'Open Fandee Island in Google Maps',
  partnerUrl: 'https://www.fandee-island.com/',
  partnerName: 'Fandee Island',
  officialUrl: 'https://www.fandee-island.com/',
  sourceUrl: 'https://visit-tadlo.com/en/stay-eat/fandee-island',
  cardStyle: 'selection',
  selectionLabel: 'My selection',
  status: 'verified',
  lastChecked: 'Official website · July 2026',
  hours: 'Accommodation by booking · Restaurant 07:00–21:00',
  price: 'Stays from 350,000 Kip per night · confirm current availability',
  address: 'Tad Lo Village · Ban Khuaset · Salavan Province',
  bestFor: 'An unusual nature stay close to Tad Lo village'
};