import { HeaderProps } from "@/types/header/header";
import Link from "next/link";

export default function CTA({ headeritems }: HeaderProps) {
  return (
    <>
      {headeritems.ctas && (
        <div className="hidden w-full md:block md:w-auto ml-auto">
          <ul className="font-semibold flex items-center flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {headeritems.ctas.map((cta, navButtonIndex) => {
              return (
                <li key={navButtonIndex} className={`relative rounded-full`}>
                  <Link
                    href={cta.cta.link.link}
                    className={`block rounded-full px-4 py-2
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
      )}
    </>
  );
}
