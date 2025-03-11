import CustomImage from "@/components/CustomImage";
import { useSanityImage } from "@/sanity/utils/helperFunctions";
import { LogoProps } from "@/types/header/header";
import Link from "next/link";

export default function Logo({ logo }: LogoProps) {
  if (!logo?.asset) {
    return null;
  }

  const imageProps = useSanityImage(logo.asset);

  if (!imageProps) {
    return null;
  }

  const { width, height, src } = imageProps;

  return (
    <div className="flex items-center">
      <Link href="/" className="space-x-3 rtl:space-x-reverse mr-4">
        <CustomImage
          src={src}
          alt={logo?.alt || "Logo"}
          width={width}
          height={height}
          className="h-8"
        />
      </Link>
    </div>
  );
}
