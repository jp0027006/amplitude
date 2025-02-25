import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'navhoverItem',
  title: 'Nav Hover Item',
  type: 'object',
  fields: [
    {
      name: 'hoverImage',
      title: 'Hover Image',
      type: 'customImage',
    },
    {
      name: 'hoverTitle',
      type: 'string',
      title: 'Hover Title',
    },
    {
      name: 'hoverDescription',
      type: 'text',
      title: 'Hover Description',
    },
    {
      name: 'hoverButton',
      title: 'Hover Button',
      type: 'button',
    },
    {
      name: 'LinkDescriptionIcon',
      title: 'Nav Hover Links',
      type: 'array',
      of: [{type: 'LinkDescriptionIcon'}],
    },
  ],
  preview: {
    select: {
      title: 'hoverTitle',
    },
  },
} as SchemaTypeDefinition
