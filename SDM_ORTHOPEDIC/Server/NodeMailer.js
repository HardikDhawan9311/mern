import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Email sending route
app.post('/send-email', async (req, res) => {
    const { to, subject, html } = req.body;

    try {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Prabhjeet" <prabhjeetjimsrohini@gmail.com>', // sender address
            to, // list of receivers
            subject, // Subject line
            html, 
        });

        console.log('Message sent: %s', info.messageId);
        console.log(info.accepted);
        console.log(info.rejected);

        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});