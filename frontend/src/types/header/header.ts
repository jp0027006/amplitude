import { CTAType } from "../CTA";
import { CustomImageType } from "../customImage";
import { NavItemType } from "../navItems";

{
  /* Header */
}

export interface HeaderType {
  _type: "header";
  logo?: CustomImageType;
  navItems: NavItemType[];
  ctas: CTAType[];
}

{
  /* Header Props */
}

export interface HeaderProps {
  headeritems: HeaderType;
}

{
  /* Logo Props */
}

export type LogoProps = {
  logo?: {
    asset?: {
      _type: string;
      _ref: string;
    };
    alt?: string;
  };
};