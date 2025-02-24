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
  /* Header Props Type */
}

export interface HeaderProps {
  headeritems: HeaderType;
}

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
    link: {
      _type: "link";
      link: string;
    };
    variant?: ButtonVariantType;
  };
}

{
  /* Button Variant */
}

export type ButtonVariantType = "blue" | "transparent" | "outline";

{
  /* Button */
}

export type NavButtonType = {
  button: {
    _type: "button";
    label?: string;
    link: {
      _type: "link";
      link: string;
    };
    variant?: ButtonVariantType;
  };
};

{
  /* Custom Image */
}

export type CustomImageType = {
  _type: "customImage";
  alt?: string;
  asset?: {
    _type: string;
    _ref: string;
  };
  caption: string;
};
