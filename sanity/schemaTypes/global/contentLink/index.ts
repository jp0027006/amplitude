import {SchemaTypeDefinition} from 'sanity'
import {contentLinkTypeOptions} from '../../../constant'

export const linkFields = [
  {
    name: 'type',
    title: 'Type',
    type: 'string',
    options: {
      list: contentLinkTypeOptions,
      direction: 'horizontal',
      layout: 'radio',
    },
  },
  {
    name: 'page',
    title: 'Page',
    type: 'reference',
    weak: true,
    options: {disableNew: true},
    to: [{type: 'page'}],
    hidden: ({parent}: any) => parent?.type !== 'reference',
  },
  {
    name: 'link',
    title: 'URL',
    type: 'string',
    hidden: ({parent}: any) => parent?.type !== 'externalReference',
  },
]

export default {
  name: 'contentLink',
  title: 'Content Link',
  type: 'object',
  fields: linkFields,
} as SchemaTypeDefinition
