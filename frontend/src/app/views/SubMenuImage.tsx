import CustomImage from "@/components/CustomImage";
import { useSanityImage } from "@/sanity/utils/helperFunctions";
import { ImageProps } from "@/types/navItems";

export default function SubMenuImage({ image }: ImageProps) {
  if (!image?.asset) {
    return null;
  }

  const imageProps = useSanityImage(image.asset);

  if (!imageProps) {
    return null;
  }

  const { width, height, src } = imageProps;

  return (
    <div className="flex items-center">
      <CustomImage
        src={src}
        alt={image?.alt || "Sub Menu Image"}
        width={width}
        height={height}
        className="w-full"
      />
    </div>
  );
}
