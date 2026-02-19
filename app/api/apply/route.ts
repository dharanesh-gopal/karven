import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const form = await request.formData()
    const firstName = form.get('firstName')?.toString().trim()
    const lastName = form.get('lastName')?.toString().trim()
    const email = form.get('email')?.toString().trim()
    const jobTitle = form.get('jobTitle')?.toString().trim()
    const resume = form.get('resume') as File | null

    if (!firstName || !lastName || !email || !jobTitle || !resume) {
      return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 })
    }

    // Prepare FormData for SubmitBox
    const submitboxData = new FormData()
    submitboxData.append('firstName', firstName)
    submitboxData.append('lastName', lastName)
    submitboxData.append('email', email)
    submitboxData.append('jobTitle', jobTitle)
    submitboxData.append('resume', resume)
    submitboxData.append('_subject', `New Application: ${jobTitle} - ${firstName} ${lastName}`)

    const response = await fetch('https://submitbox.app/api/f/d4a317f3-c4e7-4e06-a296-a7ef282f0458', {
      method: "POST",
      body: submitboxData,
    })

    if (!response.ok) {
      throw new Error('Failed to submit to SubmitBox')
    }

    return NextResponse.json({ success: true, message: 'Application submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('SubmitBox Error:', error)
    return NextResponse.json({ success: false, message: 'Failed to submit application' }, { status: 500 })
  }
}
