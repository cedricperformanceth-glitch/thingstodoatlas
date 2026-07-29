import placeImageResults from './place-images.generated.json';

type ImageResult = {
  slug?: string;
  selectedImage?: string | null;
  status?: string;
  imageSourceUrl?: string | null;
  imageSourceType?: string;
  imageAuthor?: string | null;
  imageLicense?: string | null;
  imageIsGeneric?: boolean;
};

type ImageablePlace = {
  slug: string;
  image: string;
  imageSourceUrl?: string | null;
  imageSourceType?: string;
  imageAuthor?: string | null;
  imageLicense?: string | null;
  imageIsGeneric?: boolean;
};

const imageBySlug = new Map<string, ImageResult>(
  (placeImageResults as ImageResult[])
    .filter((result): result is ImageResult & { slug: string } => Boolean(result?.slug))
    .map((result) => [result.slug, result])
);

export const resolvePlaceImage = <T extends ImageablePlace>(place: T): T => {
  const result = imageBySlug.get(place.slug);
  if (!result || result.status !== 'approved' || !result.selectedImage) return place;

  return {
    ...place,
    image: result.selectedImage,
    imageSourceUrl: result.imageSourceUrl ?? result.selectedImage,
    imageSourceType: result.imageSourceType,
    imageAuthor: result.imageAuthor ?? null,
    imageLicense: result.imageLicense ?? null,
    imageIsGeneric: Boolean(result.imageIsGeneric)
  };
};

export const resolvePlaceImages = <T extends ImageablePlace>(places: T[]): T[] => places.map(resolvePlaceImage);
