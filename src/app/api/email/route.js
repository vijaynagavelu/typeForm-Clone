import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// import generatePDF from '../../temp.js'


export async function POST(req) {
    const body = await req.text();
    const parsedData = JSON.parse(body);
    const data = JSON.parse(parsedData.body);
    console.log("post in process", data[1].titleValue)

    try {
        // const pdfBuffer = await generatePDF(data);
        // console.log('AttachedMent:', pdfBuffer)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vijay.n.2015.eee@rajalakshmi.edu.in',
                pass: process.env.PASS,
            },
        });

        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });


        const mailOptions = {
            from: 'vijay.n.2015.eee@rajalakshmi.edu.in',
            to: data[0].titleValue,
            subject: `Statement of Purpose for ${data[1].titleValue}`,
            text: `Dear ${data[1].titleValue},

Please find attached the Statement of Purpose template for your student
visa application to Canada. Kindly edit it as per your scenario and
needs.

In case you would like to get the full statement of purpose drafted by
our experts, do not hesitate to contact us

Here is the doc file in case you would like to edit it:
https://docs.google.com/document/d/1jFb8KAaQejbR1rC7tJNBNJp4wxoZiieZfozbJUXxPw/edit?usp=drivesdk

Leave us a Google review if you liked our service:
https://g.pagge/r/CQT2Q8IwOnqpEB0/review

Best Regards,
Team Teffizient
www.teffizient.ca
Ph: 226-774-9168
Email: info@teffizient.ca`,
            // attachments: [
            //     {
            //         filename: `Statement_of_Purpose for ${data[1].titleValue}.pdf`, // Change the filename as needed
            //         content: pdfBuffer, // Provide the path to your file
            //     }
            // ],
        };

        await new Promise((resolve, reject) => {
            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    reject(error);
                } else {
                    console.log('Email sent:', info.response);
                    resolve(info);
                }
            });
        });

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error generating PDF or sending email:', error);
        return NextResponse.json({ error: 'An error occurred while sending the email' });
    }
}





