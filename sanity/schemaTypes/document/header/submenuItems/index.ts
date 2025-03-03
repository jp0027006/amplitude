import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'submenuItem',
  title: 'Sub Menu Item',
  type: 'object',
  fields: [
    {
      name: 'ImageTitleDescriptionLink',
      title: 'Image Title Description Link Group',
      type: 'ImageTitleDescriptionLink',
      group: 'ImageTitleDescriptionLinkGroup',
    },
    {
      name: 'LinkDescriptionIcon',
      title: 'Link Description Icon Group',
      type: 'array',
      of: [{type: 'LinkDescriptionIcon'}],
      group: 'LinkDescriptionIconGroup',
    },
  ],
  groups: [
    {
      name: 'ImageTitleDescriptionLinkGroup',
      title: 'Image Submenu',
    },
    {
      name: 'LinkDescriptionIconGroup',
      title: 'Link Submenu',
    },
  ],
} as SchemaTypeDefinition
