import { defineType } from 'sanity'

export default defineType({
    name: 'aboutBoardSection',
    type: 'document',
    title: 'About - Board of Directors Section Header',
    fields: [
        {
            name: 'badge',
            type: 'string',
            title: 'Badge Text',
            initialValue: 'Catalysts of Vision',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Section Title',
            validation: (Rule) => Rule.required(),
            initialValue: 'Board of Directors',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 2,
            initialValue: 'Our Board of Directors, the guiding force behind our trajectory, shaping the future of industrial drone innovation and driving unparalleled growth.',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
