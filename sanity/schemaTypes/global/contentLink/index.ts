import { SchemaTypeDefinition } from "sanity";
export const linkTypeOptions = [
    {
      title: 'Reference',
      value: 'reference',
    },
    {
      title: 'Section Reference',
      value: 'sectionReference',
    },
  ]
  

export const linkFields = [
  {
    name: "type",
    title: "Type",
    type: "string",
    options: {
      list: linkTypeOptions,
      direction: "horizontal",
      layout: "radio",
    },
  },
  {
    name: "page",
    title: "Page",
    type: "reference",
    weak: true,
    options: { disableNew: true },
    to: [{ type: "page" }],
    hidden: ({ parent } : any) => parent?.type !== "reference",
  },
  {
    name: "link",
    title: "URL",
    type: "string",
    hidden: ({ parent } : any) => parent?.type !== "sectionReference",
  },
];

export default {
  name: "contentLink",
  title: "Content Link",
  type: "object",
  fields: linkFields,
} as SchemaTypeDefinition;
