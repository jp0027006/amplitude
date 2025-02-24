import {
    useNextSanityImage,
    UseNextSanityImageBuilder,
    UseNextSanityImageOptions,
  } from "next-sanity-image";
  import { SanityImageSource } from "@sanity/image-url/lib/types/types";
  import { client } from "../";
  
  const defaultImageBuilder: UseNextSanityImageBuilder = (
    imageUrlBuilder,
    options
  ) => {
    return imageUrlBuilder
      .width(
        options.width || Math.min(options.originalImageDimensions.width, 1920)
      )
      .quality(options.quality || 100)
      .fit("clip");
  };
  export const useSanityImage = function (
    img: SanityImageSource,
    options?: UseNextSanityImageOptions
  ) {
    const { alt } = img as { alt: string } || {}
    try {
      const imageProps = useNextSanityImage(client!, img, {
        ...options,
        imageBuilder: options?.imageBuilder ?? defaultImageBuilder,
      });
      return { ...imageProps, alt: alt };
    } catch (error) {
      // TODO: catch error
      return null;
    }
  };
  