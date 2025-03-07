import { urlFor } from "@/sanity/utils/urlFor";
import { LogoProps } from "@/types/header/header";
import Link from "next/link";

export default function Logo({ logo }: LogoProps) {
  return (
    <div className="flex items-center">
      <Link href="/" className="space-x-3 rtl:space-x-reverse mr-4">
        <img
          src={urlFor(
            logo?.asset ? { asset: { _ref: logo.asset._ref } } : undefined
          )}
          className="h-8"
          alt={logo?.alt || "Logo"}
        />
      </Link>
    </div>
  );
}
