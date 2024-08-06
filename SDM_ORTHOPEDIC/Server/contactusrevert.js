

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';



const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;
  
    console.log('Received data for email:', req.body); // Log the received data
  
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'arshdeepsinghgaidu725@gmail.com',
    pass: 'fueq zswd zmbo fugc'
      }
    });
  
    // Define the email options
    const mailOptions = {
      from: 'arshdeepsinghgaidu725@gmail.com',
      to: to,
      subject: subject,
      text: text
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.send('Email sent successfully');
      }
    });
  });
  
  app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
     });