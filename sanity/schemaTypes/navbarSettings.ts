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
      description: 'Toggle to enable/disable this navbar configuration',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'object',
      description: 'Logo configuration for the navbar',
      fields: [
        { 
          name: 'text', 
          type: 'string', 
          title: 'Logo Text', 
          initialValue: 'Karvensen',
          description: 'Text displayed if image is not available',
          validation: (Rule) => Rule.required()
        },
        { 
          name: 'image', 
          type: 'image', 
          title: 'Logo Image',
          options: {
            hotspot: true,
          },
          description: 'Upload logo image (PNG recommended, min 200x70px)'
        }
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'mainMenu',
      title: 'Main Navigation Items',
      type: 'array',
      description: 'Top-level navigation menu items (Home, About, Contact, etc.)',
      of: [
        {
          type: 'object',
          name: 'menuItem',
          title: 'Menu Item',
          fields: [
            { 
              name: 'label', 
              type: 'string', 
              title: 'Label',
              description: 'Text to display in menu',
              validation: (Rule) => Rule.required()
            },
            { 
              name: 'href', 
              type: 'string', 
              title: 'Link',
              description: 'URL path (e.g., /, /about, /contact)',
              validation: (Rule) => Rule.required()
            },
            { 
              name: 'order', 
              type: 'number', 
              title: 'Display Order',
              description: 'Lower numbers appear first',
              validation: (Rule) => Rule.required().min(0)
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'serviceDropdown',
      title: 'Services Dropdown Items',
      type: 'array',
      description: 'Dropdown menu items under Services',
      of: [
        {
          type: 'object',
          name: 'serviceItem',
          title: 'Service Item',
          fields: [
            { 
              name: 'title', 
              type: 'string', 
              title: 'Title',
              description: 'Service name',
              validation: (Rule) => Rule.required()
            },
            { 
              name: 'href', 
              type: 'string', 
              title: 'Link',
              description: 'URL path to service page',
              validation: (Rule) => Rule.required()
            },
            { 
              name: 'description', 
              type: 'text', 
              title: 'Description',
              rows: 2,
              description: 'Brief service description',
              validation: (Rule) => Rule.required().max(100)
            },
            { 
              name: 'icon', 
              type: 'string', 
              title: 'Icon Name (Lucide)', 
              description: 'Icon from Lucide React (e.g., Cpu, Plane, BookOpen, Cloud, Server, Map)',
              validation: (Rule) => Rule.required()
            },
            { 
              name: 'order', 
              type: 'number', 
              title: 'Display Order',
              description: 'Lower numbers appear first',
              validation: (Rule) => Rule.required().min(0)
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              order: 'order'
            },
            prepare({ title, subtitle, order }) {
              return {
                title: `${order}. ${title}`,
                subtitle: subtitle
              }
            }
          }
        }
      ],
      validation: (Rule) => Rule.min(1)
    }),
    defineField({
      name: 'trainingDropdown',
      title: 'Training Dropdown Items',
      type: 'array',
      description: 'Dropdown menu items under Training',
      of: [
        {
          type: 'object',
          name: 'trainingItem',
          title: 'Training Item',
          fields: [
            { 
              name: 'title', 
              type: 'string', 
              title: 'Title',
              description: 'Training program name',
              validation: (Rule) => Rule.required()
            },
            { 
              name: 'href', 
              type: 'string', 
              title: 'Link',
              description: 'URL path to training page',
              validation: (Rule) => Rule.required()
            },
            { 
              name: 'description', 
              type: 'text', 
              title: 'Description',
              rows: 2,
              description: 'Brief program description',
              validation: (Rule) => Rule.required().max(100)
            },
            { 
              name: 'icon', 
              type: 'string', 
              title: 'Icon Name (Lucide)',
              description: 'Icon from Lucide React (e.g., Plane, GraduationCap, BookOpen)',
              validation: (Rule) => Rule.required()
            },
            { 
              name: 'order', 
              type: 'number', 
              title: 'Display Order',
              description: 'Lower numbers appear first',
              validation: (Rule) => Rule.required().min(0)
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              order: 'order'
            },
            prepare({ title, subtitle, order }) {
              return {
                title: `${order}. ${title}`,
                subtitle: subtitle
              }
            }
          }
        }
      ],
      validation: (Rule) => Rule.min(1)
    }),
  ],
  preview: {
    select: {
      title: 'logo.text',
      subtitle: 'isActive',
      media: 'logo.image'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `Navbar: ${title}`,
        subtitle: subtitle ? '✅ Active' : '❌ Inactive',
        media: media
      }
    }
  }
})
