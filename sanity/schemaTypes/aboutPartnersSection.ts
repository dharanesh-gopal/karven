import { defineType } from 'sanity'

export default defineType({
    name: 'aboutPartnersSection',
    type: 'document',
    title: 'About - Partners Section Header',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Section Title',
            validation: (Rule) => Rule.required(),
            initialValue: 'Trusted by Industry Leaders',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 3,
            initialValue: 'Our growing clientele includes government agencies, defense forces, and leading enterprises that rely on our drone solutions for innovation, efficiency, and mission-critical success.',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
