import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, jobTitle } = body;

    // 1. Configure the Email Transporter
    // TIP: For Gmail, you need an "App Password" (not your login password).
    // Search "Google App Passwords" to generate one.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email (e.g., careers@karvensen.com)
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    // 2. Email to the HR Team (You)
    const mailOptionsHR = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Application: ${jobTitle} - ${firstName} ${lastName}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Role:</strong> ${jobTitle}</p>
        <p><strong>Candidate:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><em>Resume handling requires AWS S3 storage (Advanced). For now, contact candidate directly.</em></p>
      `,
    };

    // 3. Confirmation Email to the Candidate
    const mailOptionsCandidate = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Application Received - KarVenSen`,
      html: `
        <h2>Hi ${firstName},</h2>
        <p>Thanks for applying to the <strong>${jobTitle}</strong> position at KarVenSen.</p>
        <p>Our team is reviewing your profile and will reach out if there is a match.</p>
        <br>
        <p>Best,<br>KarVenSen Recruiting Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsHR);
    await transporter.sendMail(mailOptionsCandidate);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}