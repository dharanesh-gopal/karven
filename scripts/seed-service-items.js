import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
    apiVersion: '2023-05-03',
});

const serviceItems = [
    // Drone Services
    {
        _type: 'serviceItem',
        title: 'Drone Survey and Mapping',
        slug: { _type: 'slug', current: 'survey-mapping' },
        category: 'drone',
        icon: 'Camera',
        description: 'Our drone survey and mapping services revolutionize traditional surveying methods. We provide high-precision aerial data collection, processing, and analysis for various industries including construction, agriculture, mining, and urban planning.',
        order: 1,
        isActive: true,
    },
    {
        _type: 'serviceItem',
        title: 'Precision Spraying',
        slug: { _type: 'slug', current: 'precision-spraying' },
        category: 'drone',
        icon: 'Sprout',
        description: 'Our precision drone spraying services deliver targeted application of pesticides, fertilizers, and nutrients. Using advanced GPS and sensor technology, we ensure optimal coverage with minimal waste and environmental impact.',
        order: 2,
        isActive: true,
    },
    // Software Services
    {
        _type: 'serviceItem',
        title: 'AI Software Development',
        slug: { _type: 'slug', current: 'ai-software' },
        category: 'software',
        icon: 'Cpu',
        description: 'Our AI software development services leverage cutting-edge machine learning algorithms and deep learning techniques to solve complex business problems. We create custom AI solutions that integrate seamlessly with your existing systems.',
        order: 3,
        isActive: true,
    },
    {
        _type: 'serviceItem',
        title: 'Learning Management Systems',
        slug: { _type: 'slug', current: 'lms' },
        category: 'software',
        icon: 'BookOpen',
        description: 'We develop comprehensive Learning Management Systems that make online education engaging and effective. Our platforms support live classes, recorded content, assessments, and detailed analytics.',
        order: 4,
        isActive: true,
    },
    // Educational Services
    {
        _type: 'serviceItem',
        title: 'Educational Programs',
        slug: { _type: 'slug', current: 'training' },
        category: 'education',
        icon: 'GraduationCap',
        description: 'We offer comprehensive training programs designed to build practical skills in drone operations, AI/ML, and modern technology. Our courses combine theoretical knowledge with hands-on experience, industry certifications, and real-world project exposure.',
        order: 5,
        isActive: true,
    },
];

async function seed() {
    console.log('Starting Clean Service Items seeding (5 items)...');

    try {
        // 1. Delete existing service items to prevent duplicates
        console.log('Cleaning up existing serviceItem documents...');
        await client.delete({ query: '*[_type == "serviceItem"]' });
        console.log('Cleanup complete.');

        // 2. Create new service items
        console.log(`Creating ${serviceItems.length} selected service items...`);

        let successCount = 0;
        for (const item of serviceItems) {
            try {
                await client.create(item);
                console.log(`Successfully created: ${item.title}`);
                successCount++;
            } catch (err) {
                console.error(`Failed to create ${item.title}:`, err.message);
            }
        }

        console.log(`Seeding complete! Successfully created ${successCount} service items (matched to frontend).`);
    } catch (error) {
        console.error('Seeding failed:', error);
    }
}

seed();
