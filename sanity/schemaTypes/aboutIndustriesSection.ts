import { defineType } from 'sanity'

export default defineType({
    name: 'aboutIndustriesSection',
    type: 'document',
    title: 'About - Industries Section Header',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Section Title',
            validation: (Rule) => Rule.required(),
            initialValue: 'Industries We Cater To',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 2,
            initialValue: 'Complete UAV Hardware, Software and Service Solution. Expert level Data Analysis, Training & Consultancy.',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
