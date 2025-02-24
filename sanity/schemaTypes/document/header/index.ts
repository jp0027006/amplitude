import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'customImage',
    },
    {
      name: 'navItems',
      title: 'Nav Items',
      type: 'array',
      of: [{type: 'navItem'}],
    },
    {
      name: 'navButtons',
      title: 'Nav Buttons',
      type: 'array',
      of: [{type: 'navButtons'}],
    },
  ],
} as SchemaTypeDefinition
