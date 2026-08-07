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
 * Media approved for publication. Prefer a strong public-domain / CC0 file when one
 * is genuinely relevant to the landmark. Otherwise use Wikimedia Commons media with
 * a clearly documented reusable licence. Contextual photos are labelled as context.
 */
export const laosLandmarkLicensedMedia: Record<string, LandmarkGalleryItem[]> = {
  'wat-phou': [
    commons(
      'ViewFromWatPhu.JPG',
      'View from the upper part of Wat Phou back toward the Mekong plain',
      'Mattun0211',
      'CC0 1.0',
      1800
    ),
    commons(
      'WatPhuCrocodile.JPG',
      'Historic crocodile carving at Wat Phou in Champasak',
      'Mattun0211',
      'CC0 1.0',
      1600
    )
  ],

  'bolaven-plateau': [
    commons(
      'Tad Fane Waterfall.JPG',
      'Tad Fane Waterfall on the Bolaven Plateau in southern Laos',
      'Sebomann',
      'Public domain',
      1600
    ),
    commons(
      'Bolaven Plateau.jpg',
      'Waterfall and forest landscape on the Bolaven Plateau in southern Laos',
      'Dario Severi',
      'CC BY-SA 3.0',
      1600
    )
  ],

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
      '20191212 Kuang Si Falls cascading falls-4.jpg',
      'Cascading waterfalls at Kuang Si Falls near Luang Prabang',
      'Balon Greyjoy',
      'CC0 1.0',
      1800
    ),
    commons(
      '20191212 Kuang Si Falls top waterfall-11.jpg',
      'The highest waterfall at Kuang Si Falls near Luang Prabang',
      'Balon Greyjoy',
      'CC0 1.0',
      1600
    ),
    commons(
      '20191212 Kuang Si Falls low shallow pools-7.jpg',
      'Lower shallow pools at Kuang Si Falls near Luang Prabang',
      'Balon Greyjoy',
      'CC0 1.0',
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
