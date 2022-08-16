import {
  SMTPClient
} from 'emailjs';

export default async function handler(req, res) {

  const {
    text,
    html,
    email,
    subject
  } = req.body;

  const client = new SMTPClient({
    user: process.env.SMTP_EMAIL,
    password: process.env.SMTP_PASSWORD,
    host: process.env.SMTP_HOST,
    ssl: true
  });

  try {
    const messageSend = await client.sendAsync({
        text: text,
        from: email,
        to: process.env.SMTP_RECEIVE,
        subject: subject,
        attachment: [{
          data: '<html>'+html+'</html>',
          alternative: true
        }]
      },
      (err, message) => {
        res.status(400).end(JSON.stringify({
          message: err || message
        }))
      }
    )
    res.status(200).end(JSON.stringify({
      message: messageSend
    }))
  } catch (e) {
    res.status(400).end(JSON.stringify({
      message: "Error"
    }))
    return;
  }
}