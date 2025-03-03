import { SchemaTypeDefinition } from 'sanity'

export default {
  name: 'LinkDescriptionIcon',
  title: 'Link With Description & Icon',
  type: 'object',
  fields: [
    {
      name: 'linkCategory',
      title: 'Link Category',
      type: 'string',
    },
    {
      name: 'linkIcon',
      title: 'Link icon',
      type: 'customImage',
    },
    {
      name: 'labelLink',
      title: 'Label Link',
      type: 'labelLink',
    },
    {
      name: 'linkDescription',
      type: 'text',
      title: 'Link Description',
    },
  ],
  preview: {
    select: {
      linkLabel: 'labelLink.label',
    },
    prepare(selection) {
      const { linkLabel } = selection;
      return {
        title: linkLabel,
      };
    },
  },
} as SchemaTypeDefinition;
