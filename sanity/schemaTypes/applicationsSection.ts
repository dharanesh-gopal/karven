import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'applicationsSection',
    title: 'Applications Section Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Applications',
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
                title: 'Applications Section Settings',
            }
        },
    },
})
