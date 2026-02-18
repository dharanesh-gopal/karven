import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'industryInsightItem',
    title: 'Industry Insight Tab',
    type: 'document',
    fields: [
        defineField({
            name: 'tabTitle',
            title: 'Tab Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Content Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 5,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Training / Layout', value: 'layout' },
                    { title: 'Services / Group', value: 'users' },
                    { title: 'Certification / Graduation', value: 'graduation-cap' },
                    { title: 'Briefcase', value: 'briefcase' },
                ],
            },
            initialValue: 'layout',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'tabTitle',
            subtitle: 'title',
            media: 'image',
        },
    },
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
})
