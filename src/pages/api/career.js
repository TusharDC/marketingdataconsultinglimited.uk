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
        subject: `Career : ${req.body.position}`,
        text: 'message' + message + ' | Sent from: ' + email,
        html: `
                    <p>Name:
                    ${req.body.name}</p>
                    <p>Email:
                    ${req.body.email}</p>
                    <p>Phone:
                    ${req.body.phone}</p>
                    <p>position:
                    ${req.body.position}</p>
                    <p>Experience:
                    ${req.body.experience}</p>
                    <p>Current Company:
                    ${req.body.currentCompany}</p>
                    <p>Skills:
                    ${req.body.skills}</p>
                    <p>Current Salary:
                    ${req.body.currentSalary}</p>
                    <p>Expected Salary:
                    ${req.body.expectedSalary}</p>
                    <p>Relocate:
                    ${req.body.relocate}</p>
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
