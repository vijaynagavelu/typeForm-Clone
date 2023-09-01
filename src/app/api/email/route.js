import axios from 'axios';
import { NextResponse } from 'next/server';

// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export async function POST(req) {
    console.log("post")

    // if (req.method === 'POST') {
    console.log("post in process")
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
            subject: 'Statement of Purpose for Paul',
            text: `Dear Paul,

Please find attached the Statement of Purpose template for your student
visa application to Canada. Kindly edit it as per your scenario and
needs.

In case you would like to get the full statement of purpose drafted by
our experts, do not hesitate to contact us

Here is the doc file in case you would like to edit it:
https://docs.google.com/document/d/1jFb8KAaQejbR1rC7tJNBNJp4wxyoZiieZfozbJUXxPw/edit?usp=drivesdk

Leave us a Google review if you liked our service:
https://g.page/r/CQT2Q8IwOnqpEB0/review

Best Regards,
Team Effizient
www.effizient.ca
Ph: 226-774-9168
Email: info@effizient.ca`,
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
// }



