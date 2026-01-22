import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');

    // 1. Configure Transporter (Uses your existing .env variables)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Email to the Candidate
    const mailOptions = {
      from: `KarVenSen Talent <${process.env.EMAIL_USER}>`,
      to: email as string,
      subject: 'Welcome to the KarVenSen Talent Network',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0284c7;">You're on our radar.</h2>
          <p>Hi ${firstName},</p>
          <p>Thanks for joining the KarVenSen Talent Network.</p>
          <p>We have added <strong>${email}</strong> to our database. When a role opens up that matches your profile, our recruiting team will reach out directly.</p>
          <br>
          <p>Best,<br>KarVenSen Team</p>
        </div>
      `,
    };

    // 3. Email to You (Admin)
    const adminOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Talent Network Joiner: ${firstName} ${lastName}`,
      text: `${firstName} ${lastName} (${email}) has joined the talent network.`,
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(adminOptions)
    ]);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}