import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'industryInsightsSection',
    title: 'Industry Insights Section Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'badge',
            title: 'Section Badge',
            type: 'string',
            initialValue: 'Transforming Industries',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Industry Insights Section Settings',
            }
        },
    },
})
