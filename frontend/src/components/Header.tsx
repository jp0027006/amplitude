"use client";
import CTA from "@/app/views/CTA";
import Logo from "@/app/views/Logo";
import MobileMenu from "@/app/views/MobileMenu";
import NavItems from "@/app/views/NavItems";
import { HeaderProps } from "@/types/header/header";
import { useState } from "react";

function Header({ headeritems }: HeaderProps) {
  const [submenuItem, setSubMenuItem] = useState<number>(-1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <nav className="bg-transparent hover:bg-white transition-colors ease-linear duration-200">
      <div className="max-w-screen-2xl flex items-center justify-between p-4 md:px-12 lg:px-24">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Logo logo={headeritems.logo} />

          {/* Desktop Nav Items */}
          {headeritems.navItems && (
            <div className="hidden md:block z-50">
              <NavItems
                navItems={headeritems.navItems}
                submenuItem={submenuItem}
                setSubMenuItem={setSubMenuItem}
              />
            </div>
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CTA headeritems={headeritems} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <MobileMenu
            headeritems={headeritems}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        )}
      </div>
    </nav>
  );
}

export default Header;
