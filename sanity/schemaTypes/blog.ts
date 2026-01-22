import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Artificial Intelligence', value: 'Artificial Intelligence' },
          { title: 'Drone Technology', value: 'Drone Technology' },
          { title: 'Cloud Computing', value: 'Cloud Computing' },
          { title: 'LMS & EdTech', value: 'LMS & EdTech' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'branch',
      title: 'Branch/Subcategory',
      type: 'string',
      description: 'Specific topic area (e.g., "Computer Vision", "Edge AI")',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'heroVideo',
      title: 'Hero Video URL',
      type: 'url',
      description: 'Optional video URL for hero section (e.g., /ai-background.mp4)',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'Estimated reading time (e.g., "8 min read")',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [{name: 'alt', type: 'string', title: 'Alternative Text'}],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Show this post in featured section',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to publish/unpublish this post',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Published Date (Newest First)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'heroImage',
      category: 'category',
      isActive: 'isActive',
    },
    prepare(selection) {
      const {author, category, isActive} = selection
      return {
        ...selection, 
        subtitle: `${category || 'Uncategorized'} ${author ? `by ${author}` : ''} ${!isActive ? '(Inactive)' : ''}`
      }
    },
  },
})
