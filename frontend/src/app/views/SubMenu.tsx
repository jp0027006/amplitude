import { urlFor } from "@/sanity/utils/urlFor";
import { SubMenuProps } from "@/types/navItems";
import Link from "next/link";

const SubMenu = ({ submenuItems }: SubMenuProps) => (
  <div className="absolute left-0 top-16 mt-2 w-[1535px] bg-white border border-gray-200 p-6 px-20 flex gap-8">
    {/* Check for ImageTitleDescriptionLink */}
    {submenuItems.ImageTitleDescriptionLink && (
      <div className="flex flex-col card rounded-tr-2xl rounded-bl-2xl w-72">
        {submenuItems.ImageTitleDescriptionLink.submenuImage && (
          <img
            src={urlFor(
              submenuItems.ImageTitleDescriptionLink.submenuImage.asset
                ?._ref
                ? {
                    asset: {
                      _ref: submenuItems.ImageTitleDescriptionLink.submenuImage.asset?._ref,
                    },
                  }
                : undefined
            )}
            alt={
              submenuItems.ImageTitleDescriptionLink.submenuImage.alt ||
              "Sub Menu image"
            }
            className="w-full"
            width="100"
            height="100"
          />
        )}
        <div className="px-6 py-4 flex flex-col gap-2">
          <h1 className="font-medium text-[22px] leading-[26px]">
            {submenuItems.ImageTitleDescriptionLink.submenuTitle}
          </h1>
          <span className="text-[14px] leading-[20px]">
            {submenuItems.ImageTitleDescriptionLink.submenuDescription}
          </span>
          <Link
            href={
              submenuItems.ImageTitleDescriptionLink.submenuLink.link
                ?.link || "/"
            }
            className="mt-4 inline-block text-blue-600 font-semibold text-base"
          >
            {submenuItems.ImageTitleDescriptionLink.submenuLink.label}
          </Link>
        </div>
      </div>
    )}

    {/* Check for LinkDescriptionIcon */}
    {submenuItems.LinkDescriptionIcon && (
      <div className="flex flex-row">
        <div>
          <div className="flex w-full flex-col gap-8 lg:flex-row">
            {Object.entries(
              submenuItems.LinkDescriptionIcon.reduce((acc, item) => {
                if (!acc[item.linkCategory]) {
                  acc[item.linkCategory] = [];
                }
                acc[item.linkCategory].push(item);
                return acc;
              }, {} as Record<string, typeof submenuItems.LinkDescriptionIcon>)
            ).map(([category, items], categoryIndex) => (
              <div key={categoryIndex} className="flex flex-col gap-x-5 gap-y-3 ">
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
                      alt={item.linkIcon?.alt || "Icon"}
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
    )}
  </div>
);

export default SubMenu;
