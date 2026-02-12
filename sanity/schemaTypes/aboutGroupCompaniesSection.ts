import { defineType } from 'sanity'

export default defineType({
    name: 'aboutGroupCompaniesSection',
    type: 'document',
    title: 'About - Group Companies Section Header',
    fields: [
        {
            name: 'badge',
            type: 'string',
            title: 'Badge Text',
            initialValue: 'KarVenSen',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Section Title',
            validation: (Rule) => Rule.required(),
            initialValue: 'Group Companies',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 2,
            initialValue: 'Collaborations & integrations to make our skies more accessible and the future generations more skillful.',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
