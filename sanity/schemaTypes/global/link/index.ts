import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'link',
      title: 'URL',
      type: 'string',
    },
  ],
} as SchemaTypeDefinition
