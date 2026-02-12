import { defineType } from 'sanity'

export default defineType({
    name: 'aboutAwardsSection',
    type: 'document',
    title: 'About - Awards Section Header',
    fields: [
        {
            name: 'badge',
            type: 'string',
            title: 'Badge Text',
            initialValue: 'Accolades',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Section Title',
            validation: (Rule) => Rule.required(),
            initialValue: 'Awards and Recognitions: A Testament to Excellence',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 2,
            initialValue: 'KarVenSen proudly holds prestigious recognitions. Our accolades include:',
        },
        {
            name: 'footerText',
            type: 'text',
            title: 'Footer Text',
            rows: 2,
            initialValue: 'These prestigious recognitions validate our commitment to innovation, excellence, and leadership in the drone technology sector.',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
