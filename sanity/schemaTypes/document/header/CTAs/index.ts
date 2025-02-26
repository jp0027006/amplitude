import { SchemaTypeDefinition } from "sanity";

export default {
  name: "ctas",
  title: "CTAs",
  type: "object",
  fields: [
    {
      name: "cta",
      title: "CTA",
      type: "cta",
    },
  ],
  preview: {
    select: {
      ctaLabel: "cta.label",
    },
    prepare(selection) {
      const { ctaLabel } = selection;
      return {
        title: ctaLabel,
      };
    },
  },
} as SchemaTypeDefinition;
