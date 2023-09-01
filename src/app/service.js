import { NextResponse } from 'next/server';


import nodemailer from 'nodemailer';

export default async function handler() {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vijay.n.2015.eee@rajalakshmi.edu.in',
                pass: 'vijayvijay', // Use the App Password you generated
            },
        });

        // Define the email message
        const mailOptions = {
            from: 'vijay.n.2015.eee@rajalakshmi.edu.in',
            to: 'vijaynaga.0503@gmail.com',
            subject: 'Hello from Node.js',
            text: 'This is a test email sent from Node.js using Nodemailer.',
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'An error occurred while sending the email' });
    }
} 