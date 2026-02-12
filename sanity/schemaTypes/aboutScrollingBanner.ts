import { defineType } from 'sanity'

export default defineType({
    name: 'aboutScrollingBanner',
    type: 'document',
    title: 'About - Scrolling Text Banner',
    fields: [
        {
            name: 'text1',
            type: 'string',
            title: 'First Text',
            validation: (Rule) => Rule.required(),
            initialValue: 'Aerial Innovations',
        },
        {
            name: 'text1Color',
            type: 'string',
            title: 'First Text Color',
            options: {
                list: [
                    { title: 'Yellow', value: 'yellow' },
                    { title: 'Red', value: 'red' },
                    { title: 'Blue', value: 'blue' },
                    { title: 'Gray', value: 'gray' },
                ],
            },
            initialValue: 'yellow',
        },
        {
            name: 'text2',
            type: 'string',
            title: 'Second Text',
            validation: (Rule) => Rule.required(),
            initialValue: 'A new Revolution',
        },
        {
            name: 'text2Color',
            type: 'string',
            title: 'Second Text Color',
            options: {
                list: [
                    { title: 'Yellow', value: 'yellow' },
                    { title: 'Red', value: 'red' },
                    { title: 'Blue', value: 'blue' },
                    { title: 'Gray', value: 'gray' },
                ],
            },
            initialValue: 'gray',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
