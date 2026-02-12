import { defineType } from 'sanity'

export default defineType({
    name: 'aboutJourneySection',
    type: 'document',
    title: 'About - Journey Section Header',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Section Title',
            validation: (Rule) => Rule.required(),
            initialValue: 'Our Journey',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 2,
            initialValue: 'Key milestones in our growth story',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
