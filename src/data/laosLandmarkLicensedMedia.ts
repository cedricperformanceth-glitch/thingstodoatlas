import type { LandmarkGalleryItem } from './laosLandmarks';

const commons = (
  fileName: string,
  alt: string,
  author: string,
  license: string,
  width = 1600
): LandmarkGalleryItem => ({
  src: `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}?width=${width}`,
  alt,
  sourcePage: `https://commons.wikimedia.org/wiki/File:${fileName.replaceAll(' ', '_')}`,
  author,
  license
});

/**
 * Media used for publication when the original landmark gallery contains a source
 * whose reuse licence is unclear, incomplete or unsuitable for editorial reuse.
 *
 * Public-domain media should be preferred when a strong, relevant file exists.
 * Otherwise use a Wikimedia Commons file with a clearly documented reusable licence.
 */
export const laosLandmarkLicensedMedia: Record<string, LandmarkGalleryItem[]> = {
  'pha-pa-tou': [
    commons(
      'Mountains clouds Mekong and dwellings from Mount Phou Si at sunrise in Luang Prabang Laos.jpg',
      'Mountain landscape, mist and Mekong seen in Luang Prabang Province, used as regional context for the Pha Pa Tou journey',
      'Basile Morin',
      'CC BY-SA 4.0',
      1800
    ),
    commons(
      'Panoramic view from the Pha Daeng Peak Viewpoint.jpg',
      'Mountain panorama in Luang Prabang Province, used as regional landscape context for Pha Pa Tou',
      'Christophe95',
      'CC BY-SA 4.0',
      1600
    )
  ],

  'kuang-si-waterfall': [
    commons(
      'Kuang Si Waterfalls Luang Prabang Wikimedia Commons.jpg',
      'Wide view of the forest and cascades at Kuang Si Waterfall near Luang Prabang',
      'Benh LIEU SONG',
      'CC BY-SA 3.0',
      1800
    ),
    commons(
      'Kuang Si waterfalls in Luang Prabang, Laos.jpg',
      'Turquoise pools and limestone cascades at Kuang Si Waterfall',
      'NruasPaoYPP',
      'CC BY-SA 4.0',
      1600
    )
  ],

  'slow-boat-luang-prabang-huay-xai': [
    commons(
      'Boats on the Mekong with dark clouds and blue sky in the late afternoon in Luang Prabang Laos.jpg',
      'Passenger boats on the Mekong in Luang Prabang, used as context for the slow-boat journey toward Huay Xai',
      'Basile Morin',
      'CC BY-SA 4.0',
      1800
    ),
    commons(
      'Huay Xai, Lao and Thai border (12250555386).jpg',
      'River boats at Huay Xai at the end of the two-day Mekong journey from Luang Prabang',
      'Clay Gilliland',
      'CC BY-SA 2.0',
      1600
    )
  ],

  'kong-lor-cave': [
    commons(
      'Konglor cave laos.JPG',
      'River entrance of Kong Lor Cave in Khammouane Province',
      'Busy',
      'CC BY-SA 3.0',
      1800
    ),
    commons(
      'Kong Lor Caves of Laos (5422115490).jpg',
      'Boat journey through the dark interior of Kong Lor Cave',
      'Aleksey Gnilenkov',
      'CC BY 2.0',
      1600
    )
  ],

  'xe-bang-fai-cave': [
    commons(
      'XeBanFai.jpg',
      'Xe Ban Fai River downstream from Ban Chalou in Khammouane, the river system connected with the Xe Bang Fai cave expedition',
      'Italian walrus-63',
      'CC BY-SA 3.0',
      1800
    )
  ],

  'tham-nang-aen-cave': [
    commons(
      '10 Nang Aen cane - panoramio.jpg',
      'Nang Aen Cave in Khammouane Province near Thakhek',
      'Adriaan Castermans',
      'CC BY-SA 3.0',
      1800
    )
  ],

  'khone-phapheng-falls': [
    commons(
      'Khone Phapheng Falls, Si Phan Don, Laos, widest waterfall in the world.jpg',
      'Wide view of Khone Phapheng Falls on the Mekong in southern Laos',
      'Basile Morin',
      'CC BY-SA 4.0',
      1800
    )
  ]
};

export const getLicensedLandmarkGallery = (
  slug: string,
  fallback: LandmarkGalleryItem[] = []
): LandmarkGalleryItem[] => laosLandmarkLicensedMedia[slug] || fallback;
