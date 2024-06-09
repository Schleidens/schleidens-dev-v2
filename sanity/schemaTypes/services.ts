import {defineType, defineField} from 'sanity'

export const services = defineType({
  type: 'document',
  name: 'services',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'text',
      name: 'subtitle',
    }),
    defineField({
      type: 'image',
      name: 'icon',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
