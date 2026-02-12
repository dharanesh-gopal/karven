/**
 * Seed Script for Leadership Team and Board Members
 * Run this script to populate initial team member data in Sanity
 * 
 * Usage: node scripts/seed-team-members.mjs
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

// Sanity client configuration
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2024-01-01',
})

// Leadership Team Members Data
const leadershipMembers = [
    {
        _type: 'leadershipMember',
        name: 'Prateek Srivastava',
        position: 'Founder & Managing Director',
        linkedinUrl: '',
        order: 1,
        isActive: true,
    },
    {
        _type: 'leadershipMember',
        name: 'Amit Takte',
        position: 'CTO',
        linkedinUrl: '',
        order: 2,
        isActive: true,
    },
    {
        _type: 'leadershipMember',
        name: 'Major General (Dr) Mandip Singh, SM, VSM (Retd)',
        position: 'President – Strategic Alliances',
        linkedinUrl: '',
        order: 3,
        isActive: true,
    },
    {
        _type: 'leadershipMember',
        name: 'Karthika Venkatesan',
        position: 'Chief Innovation Officer',
        linkedinUrl: '',
        order: 4,
        isActive: true,
    },
    {
        _type: 'leadershipMember',
        name: 'Rajesh Kumar',
        position: 'VP Engineering',
        linkedinUrl: '',
        order: 5,
        isActive: true,
    },
    {
        _type: 'leadershipMember',
        name: 'Dr. Suresh Patel',
        position: 'Head of Research',
        linkedinUrl: '',
        order: 6,
        isActive: true,
    },
    {
        _type: 'leadershipMember',
        name: 'Priya Sharma',
        position: 'Director of Operations',
        linkedinUrl: '',
        order: 7,
        isActive: true,
    },
]

// Board of Directors Data
const boardMembers = [
    {
        _type: 'boardMember',
        name: 'Prateek Srivastava',
        position: 'Founder & Managing Director',
        linkedinUrl: '',
        order: 1,
        isActive: true,
    },
    {
        _type: 'boardMember',
        name: 'Nikita Srivastava',
        position: 'Director & CFO',
        linkedinUrl: '',
        order: 2,
        isActive: true,
    },
    {
        _type: 'boardMember',
        name: 'Mangina Srinivas Rao',
        position: 'Independent Director',
        linkedinUrl: '',
        order: 3,
        isActive: true,
    },
]

async function seedTeamMembers() {
    console.log('🚀 Starting team members seed...\n')

    try {
        // Check if documents already exist
        const existingLeadership = await client.fetch(
            `*[_type == "leadershipMember"]`
        )
        const existingBoard = await client.fetch(`*[_type == "boardMember"]`)

        if (existingLeadership.length > 0 || existingBoard.length > 0) {
            console.log('⚠️  Warning: Team member documents already exist!')
            console.log(`   - Leadership members: ${existingLeadership.length}`)
            console.log(`   - Board members: ${existingBoard.length}`)
            console.log('\n❌ Aborting to prevent duplicates.')
            console.log('   Delete existing documents first if you want to re-seed.\n')
            return
        }

        // Create Leadership Team Members
        console.log('📝 Creating Leadership Team Members...')
        for (const member of leadershipMembers) {
            const result = await client.create(member)
            console.log(`   ✅ Created: ${member.name} (${member.position})`)
        }

        // Create Board Members
        console.log('\n📝 Creating Board of Directors...')
        for (const member of boardMembers) {
            const result = await client.create(member)
            console.log(`   ✅ Created: ${member.name} (${member.position})`)
        }

        console.log('\n🎉 Success! All team members have been created.')
        console.log('\n📌 Next steps:')
        console.log('   1. Go to Sanity Studio (localhost:3000/studio)')
        console.log('   2. Navigate to About Page → Leadership Team Members')
        console.log('   3. Upload images for each member')
        console.log('   4. Add LinkedIn URLs (optional)')
        console.log('   5. Publish the changes\n')
    } catch (error) {
        console.error('\n❌ Error seeding team members:', error.message)
        console.error('\nTroubleshooting:')
        console.error('   1. Make sure SANITY_API_TOKEN is set in your .env.local file')
        console.error('   2. Create a token at: https://sanity.io/manage')
        console.error('   3. Token needs "Editor" permissions\n')
        process.exit(1)
    }
}

// Run the seed function
seedTeamMembers()
