import { CustomImageType } from "../customImage";

{
  /* LinkDescriptionIcon */
}

export interface LinkDescriptionIconType {
  linkCategory: string;
  linkIcon?: CustomImageType;
  labelLink: {
    _type: "labelLink";
    label?: string;
    link: {
      _type: "link";
      link: string;
    };
  };
  linkDescription: string;
}
