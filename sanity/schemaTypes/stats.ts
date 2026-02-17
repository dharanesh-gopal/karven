import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'stats',
    title: 'Statistics (Old - Do Not Use)',
    type: 'document',
    // Hide from the "New Document" menu and effectively disable
    // @ts-ignore
    __experimental_actions: ['update', 'publish', 'delete'],
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'value',
            title: 'Value',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            readOnly: true,
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            readOnly: true,
        }),
    ],
})
