import { ImageTitleDescriptionLinkType } from "../ImageTitleDescriptionLink";
import { LinkDescriptionIconType } from "../LinkDescriptionIcon";

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
  submenuItems: submenuItemType;
}

{
  /* Sub Menu Item */
}

export interface submenuItemType {
  _type: "submenuItem";
  ImageTitleDescriptionLink: ImageTitleDescriptionLinkType;
  LinkDescriptionIcon: LinkDescriptionIconType[];
}

{
  /* Nav Items Props */
}

export interface NavItemsProps {
  navItems: NavItemType[];
  submenuItem: number | null;
  setSubMenuItem: (index: number) => void;
}

{
  /* Sub Menu Props */
}

export interface SubMenuProps {
  submenuItems: submenuItemType;
}

export type ImageProps = {
  image?: {
    asset?: {
      _type: string;
      _ref: string;
    };
    alt?: string;
  };
};

export type SubMenuLinkImageProps = {
  image: {
    linkIcon?: {
      asset?: {
        _type: string;
        _ref: string;
      };
      alt?: string;
    };
  };
};