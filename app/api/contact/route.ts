import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuration du transporteur SMTP OVH
const transporter = nodemailer.createTransport({
  host: 'ssl0.ovh.net',
  port: 465,
  secure: true, // true pour le port 465
  auth: {
    user: process.env.EMAIL_USER, // Sera défini dans .env.local
    pass: process.env.EMAIL_PASS, // Sera défini dans .env.local
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, sendCopy } = body;

    // Validation de base
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Préparation du mail
    const mailOptions = {
      from: process.env.EMAIL_USER, // Votre adresse email OVH
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER, // Où recevoir les formulaires
      subject: `Formulaire de contact - ${name} de ${company}`,
      text: `
Nom: ${name}
Email: ${email}
Entreprise: ${company}

Message:
${message}
      `,
      html: `
<h2>Nouveau message de ${name}</h2>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Entreprise:</strong> ${company}</p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Ajouter le CC si l'utilisateur veut une copie
    if (sendCopy) {
      mailOptions.cc = [email];
    }

    // Envoi du mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 