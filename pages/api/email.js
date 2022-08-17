export default async function handler(req, res) {
  let nodemailer = require('nodemailer')
  
  const {
    text,
    html,
    email,
    subject
  } = req.body;

  
  const transporter = nodemailer.createTransport({
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: false,
  })

  const mailData = {
    from: email,
    to: process.env.SMTP_RECEIVE,
    subject: subject,
    text: text,
    html: html
   }

   transporter.sendMail(mailData, function (err, info) {
    if(err)
      res.status(400).end(JSON.stringify({
        message: err.message
      }))
    else
      res.status(200).end(JSON.stringify({
        message: info
      }))
  })
  
}