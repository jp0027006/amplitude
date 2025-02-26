"use client";
import { useState } from "react";
import { HeaderProps } from "@/types/header/header";
import Logo from "@/app/views/Logo";
import NavItems from "@/app/views/NavItems";
import CTA from "@/app/views/CTA";

function Header({ headeritems }: HeaderProps) {
  console.log(headeritems);

  const [submenuItem, setSubMenuItem] = useState<number>(-1);
  return (
    <nav className="bg-transparent hover:bg-white transition-colors ease-linear duration-200">
      <div className="max-w-screen-2xl flex items-center justify-between p-4 px-24">
        {/* Logo */}
        <Logo logo={headeritems.logo} />

        {/* Nav Items */}
        {headeritems.navItems && (
          <NavItems
            navItems={headeritems.navItems}
            submenuItem={submenuItem}
            setSubMenuItem={setSubMenuItem}
          />
        )}

        {/* CTA */}
        <CTA headeritems={headeritems} />
      </div>
    </nav>
  );
}

export default Header;
