import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { fullName, email, phone, enquiryType, country, city, message, source } = data

    if (!email || !fullName || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 })
    }

    const sourceLabel = source || 'General Contact Form'

    // Send to SubmitBox instead of Nodemailer
    const response = await fetch('https://submitbox.app/api/f/d4a317f3-c4e7-4e06-a296-a7ef282f0458', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: fullName,
        email: email,
        phone: phone,
        enquiryType: enquiryType,
        location: `${city ? city + ', ' : ''}${country}`,
        message: message,
        source: sourceLabel,
        _subject: `New Inquiry from [${sourceLabel}]: ${fullName}`
      })
    })

    if (!response.ok) {
      throw new Error('Failed to submit to SubmitBox')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 })
  }
}

