import {defineType, defineField, defineArrayMember} from 'sanity'

export const project = defineType({
  type: 'document',
  name: 'project',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'text',
      name: 'description',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      type: 'url',
      name: 'url',
    }),
    defineField({
      type: 'url',
      name: 'github',
    }),
    defineField({
      type: 'url',
      name: 'live',
    }),
    defineField({
      type: 'image',
      name: 'image',
    }),
  ],
})
