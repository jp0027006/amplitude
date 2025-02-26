import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'submenuItem',
  title: 'Sub Menu Item',
  type: 'object',
  fields: [
    {
      name: 'submenuOption',
      title: 'Choose Sub Menu Option',
      type: 'string',
      options: {
        list: [
          {title: 'Sub Menu Link Section', value: 'linkDescriptionIcon'},
          {title: 'Sub Menu Image Section', value: 'ImageTitleDescriptionLink'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'LinkDescriptionIcon',
      title: 'Sub Menu Link Section',
      type: 'array',
      of: [{type: 'LinkDescriptionIcon'}],
      hidden: ({parent}) => parent?.submenuOption !== 'linkDescriptionIcon',
    },
    {
      name: 'ImageTitleDescriptionLink',
      title: 'Sub Menu Image Section',
      type: 'ImageTitleDescriptionLink',
      hidden: ({parent}) => parent?.submenuOption !== 'ImageTitleDescriptionLink',
    },
  ],
  preview: {
    select: {
      title: 'submenuOption',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title === 'linkDescriptionIcon' ? 'Sub Menu Link Section' : 'Sub Menu Image Section',
      }
    },
  },
} as SchemaTypeDefinition
