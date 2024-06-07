import {defineType, defineField} from 'sanity'

export const review = defineType({
  type: 'document',
  name: 'review',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
    }),
    defineField({
      type: 'string',
      name: 'at',
    }),
    defineField({
      type: 'text',
      name: 'description',
    }),
    defineField({
      type: 'image',
      name: 'pfp',
    }),
  ],
})
