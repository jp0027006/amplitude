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
      name: 'ctas',
      title: 'CTA',
      type: 'array',
      of: [{type: 'ctas'}],
    },
  ],
} as SchemaTypeDefinition
