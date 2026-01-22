import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const MAX_RESUME_BYTES = 5 * 1024 * 1024

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

    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json({ success: false, message: 'Resume file is too large. Please upload under 5MB.' }, { status: 400 })
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer())

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptionsHR = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Application: ${jobTitle} - ${firstName} ${lastName}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Role:</strong> ${jobTitle}</p>
        <p><strong>Candidate:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>The candidate's resume is attached.</p>
      `,
      attachments: [
        {
          filename: resume.name || 'resume',
          content: resumeBuffer,
          contentType: resume.type || 'application/octet-stream',
        },
      ],
    }

    const mailOptionsCandidate = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Application Received - KarVenSen',
      html: `
        <h2>Hi ${firstName},</h2>
        <p>Thanks for applying to the <strong>${jobTitle}</strong> position at KarVenSen.</p>
        <p>Our team is reviewing your profile and will reach out if there is a match.</p>
        <br>
        <p>Best,<br>KarVenSen Recruiting Team</p>
      `,
    }

    await Promise.all([
      transporter.sendMail(mailOptionsHR),
      transporter.sendMail(mailOptionsCandidate),
    ])

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Email Error:', error)
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 })
  }
}