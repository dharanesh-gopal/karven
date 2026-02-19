import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');

    // Send to SubmitBox
    const response = await fetch('https://submitbox.app/api/f/d4a317f3-c4e7-4e06-a296-a7ef282f0458', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        source: 'Talent Network Joiner',
        _subject: `New Talent Network Joiner: ${firstName} ${lastName}`
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit to SubmitBox');
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Talent API Error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
