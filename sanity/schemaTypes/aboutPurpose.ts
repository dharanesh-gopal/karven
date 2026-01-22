import { defineType } from 'sanity'

export default defineType({
  name: 'aboutPurpose',
  type: 'document',
  title: 'Purpose, Vision & Mission',
  fields: [
    {
      name: 'purposeTitle',
      type: 'string',
      title: 'Purpose Title',
      initialValue: 'PURPOSE',
    },
    {
      name: 'purposeDescription',
      type: 'text',
      title: 'Purpose Description',
      rows: 3,
    },
    {
      name: 'visionTitle',
      type: 'string',
      title: 'Vision Title',
      initialValue: 'VISION',
    },
    {
      name: 'visionDescription',
      type: 'text',
      title: 'Vision Description',
      rows: 3,
    },
    {
      name: 'missionTitle',
      type: 'string',
      title: 'Mission Title',
      initialValue: 'MISSION',
    },
    {
      name: 'missionDescription',
      type: 'text',
      title: 'Mission Description',
      rows: 3,
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Enable/disable this section',
      initialValue: true,
    },
  ],
})
