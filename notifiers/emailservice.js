

const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: '24legeandwarrior@gmail.com',
        pass: "giplvkrnjiobzwtp"
    },
    secure: true
})

// const mailDataObj = {
//     from: 'no-reply@gmail.com',
//     to: "09himanshusah@gmail.com",
//     subject: "Testing the code to send email",
//     text: "Sample text content",
//     html: "<b> Hello World !!!!!!!!!!</b>"
// }

// transpoter.sendMail(mailDataObj, (err, data) => {
//     if(err) console.log(err.message);
//     console.log('email sent successfully');
// })
