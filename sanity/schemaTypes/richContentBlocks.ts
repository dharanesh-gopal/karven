import { defineType, defineField } from 'sanity'

// Custom content blocks for rich blog content
export const buttonBlock = defineType({
  name: 'buttonBlock',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Outline', value: 'outline' },
        ],
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
        ],
      },
      initialValue: 'md',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'text',
      variant: 'variant',
    },
    prepare({ title, variant }) {
      return {
        title: title || 'Button',
        subtitle: `Variant: ${variant || 'primary'}`,
      }
    },
  },
})

export const badgeBlock = defineType({
  name: 'badgeBlock',
  title: 'Badge',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Badge Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Success', value: 'success' },
          { title: 'Warning', value: 'warning' },
          { title: 'Error', value: 'error' },
          { title: 'Info', value: 'info' },
        ],
      },
      initialValue: 'default',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      variant: 'variant',
    },
    prepare({ title, variant }) {
      return {
        title: title || 'Badge',
        subtitle: `Variant: ${variant || 'default'}`,
      }
    },
  },
})

export const calloutBlock = defineType({
  name: 'calloutBlock',
  title: 'Callout',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Success', value: 'success' },
          { title: 'Warning', value: 'warning' },
          { title: 'Error', value: 'error' },
          { title: 'Note', value: 'note' },
        ],
      },
      initialValue: 'info',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
      type: 'type',
    },
    prepare({ title, content, type }) {
      return {
        title: title || 'Callout',
        subtitle: `${type || 'info'} - ${content?.substring(0, 50) || ''}...`,
      }
    },
  },
})

export const codeBlock = defineType({
  name: 'codeBlock',
  title: 'Code Block',
  type: 'object',
  fields: [
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      rows: 10,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'Python', value: 'python' },
          { title: 'Java', value: 'java' },
          { title: 'C++', value: 'cpp' },
          { title: 'C#', value: 'csharp' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'JSON', value: 'json' },
          { title: 'Bash', value: 'bash' },
          { title: 'SQL', value: 'sql' },
        ],
      },
      initialValue: 'javascript',
    }),
    defineField({
      name: 'filename',
      title: 'Filename (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'highlightLines',
      title: 'Highlight Lines (Optional)',
      type: 'string',
      description: 'Comma-separated line numbers (e.g., "1,3,5-7")',
    }),
  ],
  preview: {
    select: {
      language: 'language',
      filename: 'filename',
      code: 'code',
    },
    prepare({ language, filename, code }) {
      return {
        title: filename || `Code: ${language || 'text'}`,
        subtitle: code?.substring(0, 50) || '',
      }
    },
  },
})

export const alertBlock = defineType({
  name: 'alertBlock',
  title: 'Alert',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Success', value: 'success' },
          { title: 'Warning', value: 'warning' },
          { title: 'Error', value: 'error' },
        ],
      },
      initialValue: 'info',
    }),
    defineField({
      name: 'dismissible',
      title: 'Dismissible',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
    },
    prepare({ title, type }) {
      return {
        title: title || 'Alert',
        subtitle: `Type: ${type || 'info'}`,
      }
    },
  },
})

export const quoteBlock = defineType({
  name: 'quoteBlock',
  title: 'Quote',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      quote: 'quote',
      author: 'author',
    },
    prepare({ quote, author }) {
      return {
        title: author || 'Quote',
        subtitle: quote?.substring(0, 60) || '',
      }
    },
  },
})

export const statsBlock = defineType({
  name: 'statsBlock',
  title: 'Statistics',
  type: 'object',
  fields: [
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string', validation: (rule) => rule.required() },
            { name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required() },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
        },
      ],
      validation: (rule) => rule.required().min(2).max(4),
    }),
  ],
  preview: {
    select: {
      stats: 'stats',
    },
    prepare({ stats }) {
      return {
        title: 'Statistics',
        subtitle: `${stats?.length || 0} stats`,
      }
    },
  },
})

export const videoBlock = defineType({
  name: 'videoBlock',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or direct video URL',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      url: 'url',
      caption: 'caption',
    },
    prepare({ url, caption }) {
      return {
        title: caption || 'Video',
        subtitle: url || '',
      }
    },
  },
})

export const dividerBlock = defineType({
  name: 'dividerBlock',
  title: 'Divider',
  type: 'object',
  fields: [
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'Solid', value: 'solid' },
          { title: 'Dashed', value: 'dashed' },
          { title: 'Dotted', value: 'dotted' },
        ],
      },
      initialValue: 'solid',
    }),
    defineField({
      name: 'spacing',
      title: 'Spacing',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
        ],
      },
      initialValue: 'md',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Divider',
      }
    },
  },
})

export const accordionBlock = defineType({
  name: 'accordionBlock',
  title: 'Accordion',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Accordion Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() },
            { name: 'content', title: 'Content', type: 'text', rows: 4, validation: (rule) => rule.required() },
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({ items }) {
      return {
        title: 'Accordion',
        subtitle: `${items?.length || 0} items`,
      }
    },
  },
})

export default {
  buttonBlock,
  badgeBlock,
  calloutBlock,
  codeBlock,
  alertBlock,
  quoteBlock,
  statsBlock,
  videoBlock,
  dividerBlock,
  accordionBlock,
}
