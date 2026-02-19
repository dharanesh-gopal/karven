import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const { name, email, phone, sector, service, requirements } = data

        if (!email || !name || !requirements) {
            return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 })
        }

        // Send to SubmitBox
        const response = await fetch('https://submitbox.app/api/f/d4a317f3-c4e7-4e06-a296-a7ef282f0458', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                sector,
                service,
                requirements,
                source: 'Consultation Request',
                _subject: `New Consultation Request from: ${name}`
            })
        })

        if (!response.ok) {
            throw new Error('Failed to submit to SubmitBox')
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Consultation API Error:', error)
        return NextResponse.json({ success: false, message: 'Failed to send request.' }, { status: 500 })
    }
}
