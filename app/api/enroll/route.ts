import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const {
            fullName, email, phone, address, city, state, pincode,
            education, experience, message, courseTitle, price
        } = data

        if (!email || !fullName || !courseTitle) {
            return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 })
        }

        // Send to SubmitBox
        const response = await fetch('https://submitbox.app/api/f/d4a317f3-c4e7-4e06-a296-a7ef282f0458', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: fullName,
                email: email,
                phone: phone,
                address: address,
                city: city,
                state: state,
                pincode: pincode,
                education: education,
                experience: experience,
                message: message,
                course: courseTitle,
                price: price,
                source: 'Training Course Enrollment',
                _subject: `New Course Enrollment: ${courseTitle} - ${fullName}`
            })
        })

        if (!response.ok) {
            throw new Error('Failed to submit to SubmitBox')
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Enroll API Error:', error)
        return NextResponse.json({ success: false, message: 'Failed to submit enrollment.' }, { status: 500 })
    }
}
