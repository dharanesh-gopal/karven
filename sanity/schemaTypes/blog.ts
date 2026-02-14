import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'cta',
      title: 'Call to Action',
    },
    {
      name: 'settings',
      title: 'Settings',
    },
  ],
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
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    name: 'openInNewTab',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: true,
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{type: 'blog'}, {type: 'training'}],
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          fields: [
            {name: 'alt', type: 'string', title: 'Alternative Text'},
            {name: 'caption', type: 'string', title: 'Caption'},
          ],
        },
        {type: 'buttonBlock'},
        {type: 'badgeBlock'},
        {type: 'calloutBlock'},
        {type: 'codeBlock'},
        {type: 'alertBlock'},
        {type: 'quoteBlock'},
        {type: 'statsBlock'},
        {type: 'videoBlock'},
        {type: 'dividerBlock'},
        {type: 'accordionBlock'},
      ],
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      description: 'Call to action title (e.g., "Interested in Precision Farming Drones?")',
      group: 'cta',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Subtitle',
      type: 'text',
      rows: 2,
      description: 'Call to action subtitle text',
      group: 'cta',
    }),
    defineField({
      name: 'ctaButton1Text',
      title: 'CTA Button 1 Text',
      type: 'string',
      description: 'First button text (e.g., "Contact Our Experts")',
      group: 'cta',
    }),
    defineField({
      name: 'ctaButton1Link',
      title: 'CTA Button 1 Link',
      type: 'string',
      description: 'First button link (e.g., "/contact")',
      group: 'cta',
    }),
    defineField({
      name: 'ctaButton2Text',
      title: 'CTA Button 2 Text',
      type: 'string',
      description: 'Second button text (e.g., "Explore Our Services")',
      group: 'cta',
    }),
    defineField({
      name: 'ctaButton2Link',
      title: 'CTA Button 2 Link',
      type: 'string',
      description: 'Second button link (e.g., "/services")',
      group: 'cta',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Show this post in featured section',
      initialValue: false,
      group: 'settings',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
      group: 'settings',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to publish/unpublish this post',
      initialValue: true,
      group: 'settings',
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
