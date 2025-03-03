import { HeaderProps } from "@/types/header/header";
import Link from "next/link";

export default function CTA({ headeritems }: HeaderProps) {
  if (!headeritems.ctas || headeritems.ctas.length === 0) {
    return null;
  }

  return (
    <div className="w-full md:w-auto flex justify-center md:justify-end">
      <ul className="font-semibold flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 rtl:space-x-reverse">
        {headeritems.ctas.map((cta, navButtonIndex) => {
          return (
            <li
              key={navButtonIndex}
              className="relative rounded-full w-full md:w-auto"
            >
              <Link
                href={cta.cta.link.link}
                className={`block rounded-full px-4 py-2 text-center md:text-left w-full md:w-auto
                    ${
                      cta.cta.variant === "transparent"
                        ? "hover:text-blue-600"
                        : ""
                    }
                    ${
                      cta.cta.variant === "outline"
                        ? "border border-blue-600 text-blue-600 bg-transparent hover:bg-gray-200"
                        : ""
                    }
                    ${
                      cta.cta.variant === "blue"
                        ? "bg-blue-600 text-white hover:bg-blue-800"
                        : ""
                    }`}
              >
                <span>{cta.cta.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
