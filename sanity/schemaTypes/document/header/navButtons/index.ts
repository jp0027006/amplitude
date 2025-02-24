import { SchemaTypeDefinition } from "sanity";

export default {
  name: "navButtons",
  title: "Nav Buttons",
  type: "object",
  fields: [
    {
      name: "button",
      title: "Nav Button",
      type: "button",
    },
  ],
  preview: {
    select: {
      buttonLabel: "button.label",
    },
    prepare(selection) {
      const { buttonLabel } = selection;
      return {
        title: buttonLabel,
      };
    },
  },
} as SchemaTypeDefinition;
