import { defineType, defineField } from 'sanity'

// Reusable SEO object for all pages
export default defineType({
  name: 'seoObject',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title tag (50-60 characters recommended)',
      validation: (Rule) => Rule.max(60).warning('Keep it under 60 characters for optimal display'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'SEO description tag (150-160 characters recommended)',
      validation: (Rule) => Rule.max(160).warning('Keep it under 160 characters for optimal display'),
    }),
    defineField({
      name: 'keywords',
      title: 'Focus Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Target keywords for this page (5-10 recommended)',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Title for social media shares (falls back to Meta Title if empty)',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 2,
      description: 'Description for social media shares (falls back to Meta Description if empty)',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for social media shares (1200x630px recommended)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Preferred URL for this page (leave empty to use default)',
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page',
      initialValue: false,
    }),
    defineField({
      name: 'noFollow',
      title: 'No Follow',
      type: 'boolean',
      description: 'Prevent search engines from following links on this page',
      initialValue: false,
    }),
  ],
})
