const ctaVariant = [
  {
    title: "Blue",
    value: "blue",
  },
  {
    title: "Transparent",
    value: "transparent",
  },
  {
    title: "Outlined",
    value: "outline",
  },
];


export default {
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      initialValue: 'blue',
      options: { list: ctaVariant, direction: 'vertical', layout: 'radio' },
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
  },
}
