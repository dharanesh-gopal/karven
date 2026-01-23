import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navbarSettings',
  title: 'Navbar Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to enable/disable this navbar configuration'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Logo Text', initialValue: 'Karvensen' },
        { name: 'imagePath', type: 'string', title: 'Logo Image Path', initialValue: '/logo karven.png' }
      ]
    }),
    defineField({
      name: 'mainMenu',
      title: 'Main Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'href', type: 'string', title: 'Link' },
            { name: 'order', type: 'number', title: 'Display Order' }
          ]
        }
      ]
    }),
    defineField({
      name: 'serviceDropdown',
      title: 'Services Dropdown Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'href', type: 'string', title: 'Link' },
            { name: 'description', type: 'string', title: 'Description' },
            { name: 'icon', type: 'string', title: 'Icon Name (Lucide)', description: 'e.g., Cpu, Plane, BookOpen' },
            { name: 'order', type: 'number', title: 'Display Order' }
          ]
        }
      ]
    }),
    defineField({
      name: 'trainingDropdown',
      title: 'Training Dropdown Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'href', type: 'string', title: 'Link' },
            { name: 'description', type: 'string', title: 'Description' },
            { name: 'icon', type: 'string', title: 'Icon Name (Lucide)' },
            { name: 'order', type: 'number', title: 'Display Order' }
          ]
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'logo.text',
      subtitle: 'isActive'
    },
    prepare({ title, subtitle }) {
      return {
        title: `Navbar: ${title}`,
        subtitle: subtitle ? '✅ Active' : '❌ Inactive'
      }
    }
  }
})
