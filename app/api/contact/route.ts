import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Vérifier si les variables d'environnement sont disponibles
const hasEnvVariables = process.env.EMAIL_USER && process.env.EMAIL_PASS;

// Configuration du transporteur
const getTransporter = () => {
  // Mode production avec OVH SMTP
  if (hasEnvVariables) {
    console.log('Utilisation du mode production avec SMTP OVH');
    
    // Utiliser les configurations personnalisées si elles sont disponibles
    const host = process.env.EMAIL_HOST || 'ssl0.ovh.net';
    const port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 465;
    const secure = process.env.EMAIL_SECURE ? process.env.EMAIL_SECURE === 'true' : true;
    
    console.log('Configuration SMTP:', {
      host,
      port,
      secure,
      user: process.env.EMAIL_USER,
      // Ne pas afficher le mot de passe complet pour des raisons de sécurité
      passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0,
    });
    
    return nodemailer.createTransport({
      host,
      port,
      secure, // true pour le port 465, false pour d'autres ports comme 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Active les logs de débogage de nodemailer
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
    
    console.log('Nouvelle demande de contact reçue:', { name, email, company, hasMessage: !!message });

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
    console.log('Préparation à l\'envoi du mail...');
    const transporter = getTransporter();
    
    try {
      console.log('Vérification de la connexion SMTP...');
      await transporter.verify();
      console.log('Connexion SMTP vérifiée avec succès');
    } catch (verifyError: Error | unknown) {
      console.error('Erreur lors de la vérification SMTP:', verifyError);
      return NextResponse.json(
        { error: 'SMTP verification failed', details: verifyError instanceof Error ? verifyError.message : 'Unknown error' },
        { status: 500 }
      );
    }
    
    console.log('Envoi du mail en cours...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Message envoyé avec succès:', info.messageId);
    console.log('Informations complètes:', info);

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: Error | unknown) {
    console.error('Erreur détaillée lors de l\'envoi d\'email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 