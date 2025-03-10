export interface PageType {
  _rev: string;
  _id: string;
  title: string;
  content: Block[];
  pagelink: Pagelink[];
  _createdAt: string;
  _type: string;
  _updatedAt: string;
  slug: Slug;
}

export interface Block {
  _key: string;
  _type: "block";
  children: ChildrenType[];
  style: string;
  markDefs?: MarkDef[];
}

export interface ChildrenType {
  _type: "span";
  text: string;
  marks: string[];
}

export interface Pagelink {
  _type: "labelLink";
  link: Link;
  label: string;
  _key: string;
}

export interface Link {
  _type: "link";
  type: string;
  anchor?: string;
  link?: string;
  page?: PageReference;
  openTheLinkinANewWindow:boolean;
}

export interface PageReference {
  _type: "reference";
  _weak: boolean;
  _ref: string;
}

export interface Slug {
  _type: "slug";
  current: string;
}

export interface MarkDef {
  _type: "link";
  href: string;
  _key: string;
}
