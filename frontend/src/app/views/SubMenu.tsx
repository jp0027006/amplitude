import { SubMenuProps } from "@/types/navItems";
import Link from "next/link";
import SubMenuImage from "./SubMenuImage";
import SubMenuLinkImage from "./SubMenuLinkImage";

const SubMenu = ({ submenuItems }: SubMenuProps) => (
  <div className="absolute left-0 top-16 mt-2 w-[1535px] bg-white border border-gray-200 p-6 px-20 flex gap-8">
    {submenuItems.ImageTitleDescriptionLink && (
      <div className="flex flex-col card rounded-tr-2xl rounded-bl-2xl w-72">
        {submenuItems.ImageTitleDescriptionLink.submenuImage && (
          <SubMenuImage
            image={submenuItems.ImageTitleDescriptionLink.submenuImage}
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
              submenuItems.ImageTitleDescriptionLink.submenuLink.link?.link ||
              "/"
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
                    <SubMenuLinkImage image={item} />
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
