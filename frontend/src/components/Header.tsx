"use client";
import { useState } from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { HeaderProps } from "@/types/header";

const builder = imageUrlBuilder(client);

function urlFor(source: { asset: { _ref: string } } | undefined) {
  return source ? builder.image(source).url() : "";
}

function Header({ headeritems }: HeaderProps) {
  console.log(headeritems);

  const [hoveredNavItem, setHoveredNavItem] = useState<number | null>(null);

  return (
    <nav className="bg-transparent hover:bg-white transition-colors ease-linear duration-200">
      <div className="max-w-screen-2xl flex items-center justify-between p-4 px-24">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="space-x-3 rtl:space-x-reverse mr-4">
            <img
              src={urlFor(
                headeritems.logo?.asset
                  ? { asset: { _ref: headeritems.logo.asset._ref } }
                  : undefined
              )}
              className="h-8"
              alt={headeritems.logo?.alt || "Logo"}
            />
          </Link>
        </div>

        {/* Nav Items */}
        {headeritems.navItems && (
          <div className="hidden w-full md:block md:w-auto mr-10">
            <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              {headeritems.navItems.map((navItem, navItemIndex) => {
                return (
                  <li
                    key={navItemIndex}
                    className="relative rounded-full"
                    onMouseEnter={() => setHoveredNavItem(navItemIndex)}
                    onMouseLeave={() => setHoveredNavItem(null)}
                  >
                    <Link
                      href={navItem.link?.link}
                      className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0"
                    >
                      <span>{navItem.title}</span>
                    </Link>

                    {/* Check and display navhoverItems if present */}
                    {navItem.navhoverItems && hoveredNavItem === navItemIndex && (
                      <div className="absolute top-full p-4 bg-white shadow-md rounded-lg w-72">
                        {navItem.navhoverItems.map((hoverItem, hoverIndex) => (
                          <div key={hoverIndex} className="flex flex-col card rounded-tr-xl rounded-bl-xl">

                            {/* Hover Image */}
                            {hoverItem.hoverImage && hoverItem.hoverImage.asset && (
                              <img
                              src={urlFor(
                                hoverItem.hoverImage.asset._ref
                                  ? { asset: { _ref: hoverItem.hoverImage.asset._ref } }
                                  : undefined
                              )}
                                alt={hoverItem.hoverImage.alt || "Hover image"}
                                className="w-full"
                                width="100"
                                height="100"
                              />
                            )}
                            <div className="px-6 py-4 flex flex-col gap-2">
                            <h1 className="font-medium text-[22px] leading-[26px]">{hoverItem.hoverTitle}</h1>
                            <span className="text-[14px] leading-[20px]">{hoverItem.hoverDescription}</span>
                            <Link
                                href={hoverItem.hoverButton.link.link}
                                className="mt-4 inline-block text-blue-600 font-semibold text-base"
                              >
                                {hoverItem.hoverButton.label}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Nav Buttons */}
        {headeritems.navButtons && (
          <div className="hidden w-full md:block md:w-auto ml-auto">
            <ul className="font-semibold flex items-center flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {headeritems.navButtons.map((navButton, navButtonIndex) => {
                return (
                  <li key={navButtonIndex} className={`relative rounded-full`}>
                    <Link
                      href={navButton.button.link.link}
                      className={`block rounded-full px-4 py-2
                        ${navButton.button.variant === "transparent" ? "" : ""}
                        ${
                          navButton.button.variant === "outline"
                            ? "border border-blue-600 text-blue-600 bg-transparent hover:bg-gray-200"
                            : ""
                        }
                        ${
                          navButton.button.variant === "blue"
                            ? "bg-blue-600 text-white hover:bg-blue-800"
                            : ""
                        }`}
                    >
                      <span>{navButton.button.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Header;
