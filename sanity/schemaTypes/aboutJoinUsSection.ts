import { defineType } from 'sanity'

export default defineType({
    name: 'aboutJoinUsSection',
    type: 'document',
    title: 'About - Join Us CTA Section',
    fields: [
        {
            name: 'title',
            type: 'text',
            title: 'Section Title',
            rows: 2,
            validation: (Rule) => Rule.required(),
            initialValue: 'Join Us on the Journey: Explore, Learn, Soar',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 3,
            initialValue: "Explore the endless potential of drone technology, learn from the best in the field, and together, let's soar to new heights.",
        },
        {
            name: 'buttonText',
            type: 'string',
            title: 'Button Text',
            validation: (Rule) => Rule.required(),
            initialValue: 'Join our team',
        },
        {
            name: 'buttonLink',
            type: 'string',
            title: 'Button Link',
            validation: (Rule) => Rule.required(),
            initialValue: '/careers',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
