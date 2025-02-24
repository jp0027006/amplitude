import { SchemaTypeDefinition } from "sanity";

export default {
  name: "customImage",
  title: "Custom Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
    },
    {
      name: "alt",
      type: "string",
      title: "Alt",
    },
  ],
  preview: {
    select: {
      imageUrl: "asset",
      alt: "alt",
    },
    prepare(select) {
      const { imageUrl, alt } = select;
      return {
        title: alt ? `Alternative text : ${alt}` : null,
        media: imageUrl && imageUrl,
      };
    },
  },
} as SchemaTypeDefinition;
