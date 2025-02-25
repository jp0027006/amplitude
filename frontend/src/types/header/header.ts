import { CustomImageType } from "../customImage";
import { NavButtonType } from "../navButton";
import { NavItemType } from "../navItems";

{
  /* Header */
}

export interface HeaderType {
  _type: "header";
  logo?: CustomImageType;
  navItems: NavItemType[];
  navButtons: NavButtonType[];
}

{
  /* Header Props */
}

export interface HeaderProps {
  headeritems: HeaderType;
}
