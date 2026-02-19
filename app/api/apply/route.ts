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
    submitboxData.append('source', 'Careers Application')
    submitboxData.append('_subject', `New Application: ${jobTitle} - ${firstName} ${lastName}`)

    const response = await fetch('https://submitbox.app/api/f/6cec5b09-8e63-4f71-906c-948317a7ac97', {
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
