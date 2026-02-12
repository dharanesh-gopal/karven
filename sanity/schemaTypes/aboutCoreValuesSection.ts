import { defineType } from 'sanity'

export default defineType({
    name: 'aboutCoreValuesSection',
    type: 'document',
    title: 'About - Core Values Section Header',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Section Title',
            validation: (Rule) => Rule.required(),
            initialValue: 'Our Core Values',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 2,
            initialValue: 'The principles that guide everything we do at KarVenSen',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
