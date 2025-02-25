"use client";
import { useState } from "react";
import Logo from "@/views/Logo";
import NavItems from "@/views/NavItems";
import CTA from "@/views/CTA";
import { HeaderProps } from "@/types/header/header";

function Header({ headeritems }: HeaderProps) {
  const [hoveredNavItem, setHoveredNavItem] = useState<number>(-1);

  return (
    <nav className="bg-transparent hover:bg-white transition-colors ease-linear duration-200">
      <div className="max-w-screen-2xl flex items-center justify-between p-4 px-24">
        {/* Logo */}
        <Logo logo={headeritems.logo} />

        {/* Nav Items */}
        {headeritems.navItems && (
          <NavItems
            navItems={headeritems.navItems}
            hoveredNavItem={hoveredNavItem}
            setHoveredNavItem={setHoveredNavItem}
          />
        )}

        {/* CTA */}
        <CTA headeritems={headeritems} />
      </div>
    </nav>
  );
}

export default Header;
