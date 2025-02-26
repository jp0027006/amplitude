import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'navItem',
  title: 'Nav Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'link',
    },
    {
      name: 'submenuItems',
      title: 'Sub Menu Items',
      type: 'array',
      of: [{type: 'submenuItem'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
} as SchemaTypeDefinition
