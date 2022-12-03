import { findImageInImage } from "./findImage";

export const findImage = async (
  innerImage: string,
  outterImage: string,
  outerImageType: string,
  innerImageType: string
) => {
  const foundImage = await findImageInImage(
    outterImage,
    innerImage,
    outerImageType,
    innerImageType
  );
  return foundImage;
};
