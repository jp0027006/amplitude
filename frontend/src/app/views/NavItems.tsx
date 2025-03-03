import { NavItemsProps } from "@/types/navItems";
import Link from "next/link";
import SubMenu from "./SubMenu";

const NavItems = ({ navItems, submenuItem, setSubMenuItem }: NavItemsProps) => {
  return (
    <div className="hidden md:flex w-full md:w-auto mr-10">
      <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
        {navItems.map((navItem, navItemIndex) => (
          <li
            key={navItemIndex}
            className="relative rounded-full"
            onMouseEnter={() => setSubMenuItem(navItemIndex)}
          >
            <Link
              href={navItem.link?.link}
              className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0"
            >
              <span className="hover:text-blue-600">{navItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      {navItems && (
        <div onMouseLeave={() => setSubMenuItem(-1)}>
          {navItems.map((navItem, navItemIndex) => (
            <div key={navItemIndex}>
              {navItem.submenuItems && submenuItem === navItemIndex && (
                <SubMenu submenuItems={navItem.submenuItems} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItems;
