export const topic = {
  name: 'topic',
  type: 'document',
  title: 'Topic',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
    },
    {
      name: 'learnMore',
      type: 'url',
      title: 'Learn More URL',
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
