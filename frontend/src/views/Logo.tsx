import Link from "next/link";
import { urlFor } from "@/sanity/utils/urlFor";

export type LogoProps = {
  logo?: {
    asset?: {
      _type: string;
      _ref: string;
    };
    alt?: string;
  };
};

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
