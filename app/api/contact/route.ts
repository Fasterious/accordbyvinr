import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Vérifier si les variables d'environnement sont disponibles
const hasEnvVariables = process.env.EMAIL_USER && process.env.EMAIL_PASS;

// Configuration du transporteur
const getTransporter = () => {
  // Mode production avec OVH SMTP
  if (hasEnvVariables) {
    return nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true, // true pour le port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  } 
  
  // Mode développement - utilise Ethereal (service d'email de test)
  console.log('ATTENTION: Variables EMAIL_USER/EMAIL_PASS non définies. Utilisation du mode test.');
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'ethereal.user@ethereal.email',
      pass: 'ethereal_pass',
    },
  });
};

// Interface pour l'objet mailOptions
interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  cc?: string[];
}

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

    const senderEmail = process.env.EMAIL_USER || 'noreply@example.com';
    const recipientEmail = process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER || 'contact@example.com';

    // Préparation du mail
    const mailOptions: MailOptions = {
      from: senderEmail,
      to: recipientEmail,
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

    // En mode développement sans variables d'environnement, simuler l'envoi
    if (!hasEnvVariables) {
      console.log('Mode développement: Email simulé');
      console.log('Mail options:', mailOptions);
      
      return NextResponse.json({ 
        success: true, 
        messageId: 'dev-mode-' + Date.now(),
        devMode: true
      });
    }

    // Envoi du mail en production
    const transporter = getTransporter();
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