import { CustomImageType } from "../customImage";

{
  /* ImageTitleDescriptionLink */
}

export interface ImageTitleDescriptionLinkType {
  submenuTitle: string;
  submenuDescription: string;
  submenuImage?: CustomImageType;
  submenuLink: {
    _type: "labelLink";
    label?: string;
    link?: {
      _type: "link";
      link: string;
    };
  };
}
