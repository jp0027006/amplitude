import { CustomImageType } from "../customImage";

{
  /* LinkDescriptionIcon */
}

export interface LinkDescriptionIconType {
  linkCategory: linkCategoryType;
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

{
  /* Link Category */
}
export type linkCategoryType = "insights" | "action" | "data";
