import { useSanityImage } from "@/sanity/utils/helperFunctions";
import { SubMenuLinkImageProps } from "@/types/navItems";
import Image from "next/image";

const SubMenuLinkImage = ({ image }: SubMenuLinkImageProps) => {
  const { linkIcon } = image;
  const { asset, alt } = linkIcon || {};
  if (!asset) return null;
  const imageProps = useSanityImage(asset);
  if (!imageProps) return null;

  const { src } = imageProps;

  return (
    <div className="mr-3 h-8 w-8">
      <Image
        src={src}
        alt={alt || "Sub Menu Link Image"}
        width={100}
        height={100}
      />
    </div>
  );
};

export default SubMenuLinkImage;
