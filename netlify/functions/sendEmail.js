require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Message from ${name} via Contact Form`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 30px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px;">
            <header style="border-bottom: 2px solid #ddd; padding-bottom: 15px; margin-bottom: 25px;">
              <h2 style="color: #333; font-size: 24px; font-weight: bold; margin: 0;">New Contact Form Submission</h2>
            </header>
            
            <section style="margin-bottom: 20px;">
              <p style="font-size: 16px; color: #555;">
                <strong>Name:</strong> ${name} <br>
                <strong>Email:</strong> <a href="mailto:${email}" style="color: #1d72b8; text-decoration: none;">${email}</a> <br>
                <strong>Message:</strong>
              </p>
              <blockquote style="background-color: #f9f9f9; border-left: 5px solid #1d72b8; padding: 10px 20px; font-style: italic; color: #333; font-size: 16px;">
                "${message}"
              </blockquote>
            </section>
            
            <footer style="border-top: 2px solid #ddd; padding-top: 15px; margin-top: 25px;">
              <p style="font-size: 14px; color: #888;">This message was sent through your contact form. Please respond accordingly.</p>
              <p style="font-size: 14px; color: #888;">Best regards, <br>Your Website Team</p>
            </footer>
          </div>
        </body>
      </html>
    `,
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email.' }),
    };
  }
};
