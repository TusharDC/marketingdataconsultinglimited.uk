import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('res:', req.body);
    try {
      const { name, email, message, phone } = req.body;
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'finance@marketingdataconsultinglimited.uk',
          pass: 'zilueogxfkieedfm',
        },
      });

      await transporter.sendMail({
        from: 'finance@marketingdataconsultinglimited.uk',
        to: 'finance@marketingdataconsultinglimited.uk',
        subject: `Lead for ${req.body.subject}`,
        text: 'message' + message + ' | Sent from: ' + email,
        html: `
                    <p>Name:
                    ${req.body.name}</p>
                    <p>Email:
                    ${req.body.email}</p>
                    <p>Phone:
                    ${req.body.phone}</p>
                    <p>Subject:
                    ${req.body.subject}</p>
                    <p>Message:
                    ${req.body.message}</p>
                    `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(404).json({ message: 'Route not found' });
  }
}
