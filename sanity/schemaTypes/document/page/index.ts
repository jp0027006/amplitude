import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
    },
    {
      name: 'pagelink',
      title: 'Link',
      type: 'array',
      of: [{type: 'labelLink'}],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading1', value: 'h1'},
            {title: 'Heading2', value: 'h2'},
            {title: 'Heading3', value: 'h3'},
            {title: 'Heading4', value: 'h4'},
            {title: 'Heading5', value: 'h5'},
            {title: 'Heading6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {
              title: 'Bullet',
              value: 'bullet',
            },
            {
              title: 'Number',
              value: 'number',
            },
          ],
          marks: {
            annotations: [
              {
                name: 'Link',
                type: 'object',
                title: 'link',
                fields: [
                  {
                    name: 'href',
                    type: 'contentLink',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(select) {
      const {title} = select
      return {
        title: title || 'Page',
      }
    },
  },
} as SchemaTypeDefinition
