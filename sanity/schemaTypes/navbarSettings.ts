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
