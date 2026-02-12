import { defineType } from 'sanity'

export default defineType({
    name: 'aboutWelcomeSection',
    type: 'document',
    title: 'About - Welcome Section',
    fields: [
        {
            name: 'iconTagline',
            type: 'string',
            title: 'Icon Tagline',
            description: 'Small text next to the icon',
            initialValue: 'Unlocking the Skies, Transforming Industries',
        },
        {
            name: 'mainTitle',
            type: 'string',
            title: 'Main Title',
            validation: (Rule) => Rule.required(),
            initialValue: 'Welcome to',
        },
        {
            name: 'companyName',
            type: 'string',
            title: 'Company Name',
            validation: (Rule) => Rule.required(),
            initialValue: 'KarVenSen',
        },
        {
            name: 'companyTagline',
            type: 'string',
            title: 'Company Tagline',
            initialValue: 'Aerial Innovations',
        },
        {
            name: 'paragraph1',
            type: 'text',
            title: 'First Paragraph',
            rows: 4,
            initialValue: 'Established in 2023, KarVenSen is a distinguished AI-First IT Software Services Company, standing at the forefront of innovation in Artificial Intelligence, Drone Technology, Learning Management Systems (LMS), Enterprise Resource Planning (ERP), Cloud Services, and Information Technology. Our core team comprises seasoned professionals with expertise in cutting-edge technologies, including AI specialists, certified drone pilots, and enterprise software architects.',
        },
        {
            name: 'founderName',
            type: 'string',
            title: 'Founder Name',
            initialValue: 'Karthika Venkatesan',
        },
        {
            name: 'paragraph2',
            type: 'text',
            title: 'Second Paragraph',
            rows: 4,
            initialValue: 'we are driven by a passion for leveraging technology to solve real-world challenges. From precision agriculture using drones to enterprise-grade software solutions and technical awareness programs, we are committed to making advanced technology accessible and impactful across India and beyond.',
        },
        {
            name: 'sideText',
            type: 'string',
            title: 'Vertical Side Text',
            initialValue: 'Aerial Innovations',
        },
        {
            name: 'stat1Value',
            type: 'string',
            title: 'Stat 1 Value',
            initialValue: '1500+',
        },
        {
            name: 'stat1Label',
            type: 'string',
            title: 'Stat 1 Label',
            initialValue: 'DGCA Pilots Trained',
        },
        {
            name: 'stat2Value',
            type: 'string',
            title: 'Stat 2 Value',
            initialValue: '40+',
        },
        {
            name: 'stat2Label',
            type: 'string',
            title: 'Stat 2 Label',
            initialValue: 'UAV Surveys',
        },
        {
            name: 'stat3Value',
            type: 'string',
            title: 'Stat 3 Value',
            initialValue: '9+',
        },
        {
            name: 'stat3Label',
            type: 'string',
            title: 'Stat 3 Label',
            initialValue: 'Countries',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
