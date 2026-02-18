import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const { fullName, email, phone, enquiryType, country, city, message, source } = data

        if (!email || !fullName || !message) {
            return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 })
        }

        // Configure Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        const sourceLabel = source || 'General Contact Form'

        // Email to Admin
        const mailOptionsAdmin = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Inquiry from [${sourceLabel}]: ${fullName}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #d1d5db; background: #111827; padding: 15px; border-radius: 8px;">New Website Inquiry</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p><strong>Source:</strong> ${sourceLabel}</p>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${enquiryType ? `<p><strong>Inquiry Type:</strong> ${enquiryType}</p>` : ''}
            ${country ? `<p><strong>Location:</strong> ${city ? city + ', ' : ''}${country}</p>` : ''}
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-line;">${message}</p>
            </div>
          </div>
        </div>
      `,
        }

        // Email to Candidate (Confirmation)
        const mailOptionsUser = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Inquiry Received - KarVenSen',
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #ef4444;">Hello ${fullName},</h2>
          <p>Thank you for reaching out to KarVenSen. We have received your message regarding <strong>${enquiryType || 'your inquiry'}</strong>.</p>
          <p>Our team has been notified and will review your request shortly. Expect a response within 24-48 business hours.</p>
          <br>
          <p>Best regards,<br>The KarVenSen Team</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">This is an automated confirmation of your website submission.</p>
        </div>
      `,
        }

        await Promise.all([
            transporter.sendMail(mailOptionsAdmin),
            transporter.sendMail(mailOptionsUser),
        ])

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Contact API Error:', error)
        return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 })
    }
}
