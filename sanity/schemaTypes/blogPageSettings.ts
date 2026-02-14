import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPageSettings',
  title: 'Blog Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroBadgeText',
      title: 'Hero Badge Text',
      type: 'string',
      description: 'Text for the badge above the title (e.g., "Insights & Updates")',
    }),
    defineField({
      name: 'heroBackgroundVideo',
      title: 'Hero Background Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Background video for hero section',
    }),
    // defineField({
    //   name: 'heroVideoUrl',
    //   title: 'Hero Video URL',
    //   type: 'url',
    //   description: 'Alternative: Use a video URL instead of uploading (e.g., /ai-background.mp4)',
    // }),
    defineField({
      name: 'categories',
      title: 'Blog Categories',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of blog categories',
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'featuredPosts',
    //   title: 'Featured Posts',
    //   type: 'array',
    //   of: [{type: 'reference', to: [{type: 'blog'}]}],
    //   description: 'Select posts to feature on the blog page',
    //   validation: (rule) => rule.max(3),
    // }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoObject',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
      description: 'Only one blog page settings can be active at a time',
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
      isActive: 'isActive',
    },
    prepare({title, isActive}) {
      return {
        title: title || 'Blog Page Settings',
        subtitle: isActive ? 'Active' : 'Inactive',
      }
    },
  },
})
