import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'ImageTitleDescriptionLink',
  title: 'Image with Title, Description, Link',
  type: 'object',
  fields: [
    {
      name: 'submenuImage',
      title: 'Sub Menu Image',
      type: 'customImage',
    },
    {
      name: 'submenuTitle',
      type: 'string',
      title: 'Sub Menu Title',
    },
    {
      name: 'submenuDescription',
      type: 'text',
      title: 'Sub Menu Description',
    },
    {
      name: 'submenuLink',
      title: 'Sub Menu Link',
      type: 'labelLink',
    },
  ],
} as SchemaTypeDefinition
