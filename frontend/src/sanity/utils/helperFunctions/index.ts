import { client } from "@/sanity/client";
import { PageType } from "@/types/pages";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  useNextSanityImage,
  UseNextSanityImageBuilder,
  UseNextSanityImageOptions,
} from "next-sanity-image";

export async function fetchPageByReference(
  referenceId: string
): Promise<PageType | null> {
  const query = `*[_type == "page" && _id == $referenceId][0]`;
  const page = await client.fetch(query, { referenceId });
  return page || null;
}

export async function fetchPageBySlug(slug: string): Promise<PageType | null> {
  const query = `*[_type == "page" && slug.current == $slug][0]`;
  const page = await client.fetch(query, { slug });
  return page || null;
}

export const generateConsistentId = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

// Default image builder for useNextSanityImage
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
  const { alt } = (img as { alt: string }) || {};

  try {
    const imageProps = useNextSanityImage(client!, img, {
      ...options,
      imageBuilder: options?.imageBuilder ?? defaultImageBuilder,
    });

    // return { ...imageProps, alt: alt };
    return imageProps;
  } catch (error) {
    console.error("Error loading image:", error);
    return null;
  }
};
