import Link from "next/link";
import { urlFor } from "@/sanity/utils/urlFor";
import { HoverMenuProps } from "@/types/navItems";

const HoverMenu = ({ hoverItems }: HoverMenuProps) => (
  <div className="absolute left-0 top-16 mt-2 w-[1535px] bg-white border border-gray-200 p-6 px-20 flex gap-8">
    {hoverItems.map((hoverItem, hoverIndex) => (
      <div key={hoverIndex} className="flex flex-row gap-10">
        {hoverItem.hoverImage && hoverItem.hoverImage.asset && (
          <div
            key={hoverIndex}
            className="flex flex-col card rounded-tr-2xl rounded-bl-2xl w-72"
          >
            {hoverItem.hoverImage && hoverItem.hoverImage.asset && (
              <img
                src={urlFor(
                  hoverItem.hoverImage.asset._ref
                    ? {
                        asset: {
                          _ref: hoverItem.hoverImage.asset._ref,
                        },
                      }
                    : undefined
                )}
                alt={hoverItem.hoverImage.alt || "Hover image"}
                className="w-full"
                width="100"
                height="100"
              />
            )}
            <div className="px-6 py-4 flex flex-col gap-2">
              <h1 className="font-medium text-[22px] leading-[26px]">
                {hoverItem.hoverTitle}
              </h1>
              <span className="text-[14px] leading-[20px]">
                {hoverItem.hoverDescription}
              </span>
              <Link
                href={hoverItem.hoverButton.link?.link || "/"}
                className="mt-4 inline-block text-blue-600 font-semibold text-base"
              >
                {hoverItem.hoverButton.label}
              </Link>
            </div>
          </div>
        )}

        <div className="flex flex-row">
          <div>
            <div className="flex w-full flex-col gap-8 lg:flex-row">
              {hoverItem.LinkDescriptionIcon &&
                Object.entries(
                  hoverItem.LinkDescriptionIcon.reduce((acc, item) => {
                    if (!acc[item.linkCategory]) {
                      acc[item.linkCategory] = [];
                    }
                    acc[item.linkCategory].push(item);
                    return acc;
                  }, {} as Record<string, typeof hoverItem.LinkDescriptionIcon>)
                ).map(([category, items], categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="flex flex-col gap-x-5 gap-y-3 "
                  >
                    <h3 className="text-xs text-gray-500 uppercase font-medium mb-2">
                      {category}
                    </h3>
                    {items.map((item, LinkDescriptionIconIndex) => (
                      <Link
                        key={LinkDescriptionIconIndex}
                        href={item.labelLink.link.link}
                        className="space-x-3 rtl:space-x-reverse mr-4 flex"
                      >
                        <img
                          src={urlFor(
                            item.linkIcon?.asset?._ref
                              ? {
                                  asset: {
                                    _ref: item.linkIcon?.asset?._ref,
                                  },
                                }
                              : undefined
                          )}
                          className="h-8"
                          alt={item.linkIcon?.alt || "Logo"}
                        />
                        <div className="flex flex-col gap-0.5">
                          <span className="text-base font-semibold leading-6 hover:text-blue-600">
                            {item.labelLink.label}
                          </span>
                          <span className="text-xs leading-4">
                            {item.linkDescription}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default HoverMenu;
