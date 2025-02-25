import { SchemaTypeDefinition } from "sanity";

export default {
  name: "navItem",
  title: "Nav Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "link",
    },
    {
      name: 'navhoverItems',
      title: 'Nav Hover Items',
      type: 'array',
      of: [{type: 'navhoverItem'}],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
} as SchemaTypeDefinition;
