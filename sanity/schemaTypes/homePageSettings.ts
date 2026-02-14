import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePageSettings',
  title: 'Home Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sectionType',
              title: 'Section Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Hero Section', value: 'hero'},
                  {title: 'Features/Gallery Section', value: 'features'},
                  {title: 'How We Work', value: 'howWeWork'},
                  {title: 'Testimonials', value: 'testimonials'},
                  {title: 'CTA Section', value: 'cta'},
                  {title: 'Stats Section', value: 'stats'},
                  {title: 'Why Choose Us', value: 'whyChoose'},
                ],
              },
              validation: (rule) => rule.required(),
            },
            {
              name: 'isVisible',
              title: 'Is Visible',
              type: 'boolean',
              initialValue: true,
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number',
              validation: (rule) => rule.required().min(1),
            },
          ],
          preview: {
            select: {
              sectionType: 'sectionType',
              order: 'order',
              isVisible: 'isVisible',
            },
            prepare({sectionType, order, isVisible}) {
              return {
                title: `${order}. ${sectionType || 'Section'}`,
                subtitle: isVisible ? 'Visible' : 'Hidden',
              }
            },
          },
        },
      ],
      description: 'Configure which sections appear on the home page and in what order',
    }),
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
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
    },
    prepare({title, isActive}) {
      return {
        title: title || 'Home Page Settings',
        subtitle: isActive ? 'Active' : 'Inactive',
      }
    },
  },
})
