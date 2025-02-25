import { CustomImageType } from "../customImage";
import { LinkDescriptionIconType } from "../LinkDescriptionIcon";
import { ButtonVariantType } from "../navButton";

{
  /* Nav Items */
}

export interface NavItemType {
  _type: "navItem";
  title?: string;
  link: {
    _type: "link";
    link: string;
  };
  navhoverItems: navhoverItemType[];
}

{
  /* Nav Hover Item */
}

export interface navhoverItemType {
  _type: "navhoverItem";
  hoverTitle: string;
  hoverDescription: string;
  hoverImage?: CustomImageType;
  hoverButton: {
    _type: "button";
    label?: string;
    link?: {
      _type: "link";
      link: string;
    };
    variant?: ButtonVariantType;
  };
  LinkDescriptionIcon: LinkDescriptionIconType[];
}

{
  /* Nav Items Props */
}

export interface NavItemsProps {
  navItems: NavItemType[];
  hoveredNavItem: number | null;
  setHoveredNavItem: (index: number) => void;
}

{
  /* Hover Menu Props */
}

export interface HoverMenuProps {
  hoverItems: navhoverItemType[];
}
