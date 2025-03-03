import CTA from "@/app/views/CTA";
import { HeaderProps } from "@/types/header/header";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  headeritems: HeaderProps["headeritems"];
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ headeritems, setMobileMenuOpen }: MobileMenuProps) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpandItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto pt-16 pb-6 px-4">
      <button
        className="absolute top-4 right-4"
        onClick={() => setMobileMenuOpen(false)}
        aria-label="Close menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {headeritems.navItems && (
        <ul className="space-y-4">
          {headeritems.navItems.map((navItem, navItemIndex) => (
            <li key={navItemIndex} className="py-2">
              <div className="flex items-center justify-between">
                <Link
                  href={navItem.link?.link}
                  className="text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navItem.title}
                </Link>
                {navItem.submenuItems && (
                  <button
                    onClick={() => toggleExpandItem(navItemIndex)}
                    className="p-2"
                    aria-label={
                      expandedItem === navItemIndex
                        ? "Collapse menu"
                        : "Expand menu"
                    }
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedItem === navItemIndex ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Mobile Submenu */}
              {expandedItem === navItemIndex && navItem.submenuItems && (
                <div className="mt-2 pl-4 border-l-2 border-gray-200">
                  {/* Check for ImageTitleDescriptionLink */}
                  {navItem.submenuItems.ImageTitleDescriptionLink && (
                    <div className="py-2">
                      <Link
                        href={
                          navItem.submenuItems.ImageTitleDescriptionLink
                            .submenuLink.link?.link || "/"
                        }
                        className="text-blue-600 font-medium inline-block mt-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {
                          navItem.submenuItems.ImageTitleDescriptionLink
                            .submenuLink.label
                        }
                      </Link>
                    </div>
                  )}

                  {/* LinkDescriptionIcon items */}
                  {navItem.submenuItems.LinkDescriptionIcon && (
                    <div className="space-y-4 mt-2">
                      {Object.entries(
                        navItem.submenuItems.LinkDescriptionIcon.reduce(
                          (acc, item) => {
                            if (!acc[item.linkCategory]) {
                              acc[item.linkCategory] = [];
                            }
                            acc[item.linkCategory].push(item);
                            return acc;
                          },
                          {} as Record<
                            string,
                            typeof navItem.submenuItems.LinkDescriptionIcon
                          >
                        )
                      ).map(([category, items], categoryIndex) => (
                        <div key={categoryIndex} className="mb-3">
                          <h4 className="text-xs uppercase text-gray-500 font-medium mb-2 mt-7">
                            {category}
                          </h4>
                          <div className="space-y-1">
                            {items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                href={item.labelLink.link.link}
                                className="flex items-start space-x-3 rtl:space-x-reverse"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div>
                                  <div className="font-base text-blue-600">
                                    {item.labelLink.label}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <CTA headeritems={headeritems} />
      </div>
    </div>
  );
};

export default MobileMenu;
