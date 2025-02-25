import {SchemaTypeDefinition} from 'sanity'

const linkCategory = [
  {
    title: 'Insights',
    value: 'insights',
  },
  {
    title: 'Action',
    value: 'action',
  },
  {
    title: 'Data',
    value: 'data',
  },
]

export default {
  name: 'LinkDescriptionIcon',
  title: 'Link With Description & Icon',
  type: 'object',
  fields: [
    {
      name: 'linkCategory',
      type: 'string',
      title: 'Link Category',
      options: {list: linkCategory, direction: 'vertical', layout: 'radio'},
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
} as SchemaTypeDefinition
