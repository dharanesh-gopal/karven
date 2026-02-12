import { defineType } from 'sanity'

export default defineType({
    name: 'aboutShapingFuture',
    type: 'document',
    title: 'About - Shaping Future Section',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Section Title',
            validation: (Rule) => Rule.required(),
            initialValue: 'Shaping a Smarter, Sustainable Future with Technology',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
