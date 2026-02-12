import { defineType } from 'sanity'

export default defineType({
    name: 'aboutLeadershipSection',
    type: 'document',
    title: 'About - Leadership Section Header',
    fields: [
        {
            name: 'badge',
            type: 'string',
            title: 'Badge Text',
            initialValue: 'Pioneers & Innovators',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Section Title',
            validation: (Rule) => Rule.required(),
            initialValue: 'Leadership Team',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 2,
            initialValue: 'Meet the innovators & leaders shaping and driving growth for the fastest growing industrial drone company.',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
