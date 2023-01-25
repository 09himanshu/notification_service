/**
 * Here we are going to have the logic to schedule the sending of the mail
 */

const cron = require('node-cron');
const Notification = require('../models/notif.model');
const {status} = require('../utils/constant.util.js');
const emailTranspoter = require('../notifiers/emailservice');

cron.schedule("*/10 * * * * *", async() => {
    
    // Fetch all unsent emails and send it
    let un_sent_emails = await Notification.find({status: status.un_sent});
    if(un_sent_emails.length != 0) {
        console.log('Number of unsent emails', un_sent_emails.length);
        un_sent_emails.forEach(ele => {
            const mailObj = {
                to: ele.recepientEmails,
                subject: ele.subject,
                text: ele.content
            }
            emailTranspoter.sendMail(mailObj, async (err, info) => {
                if(err) return console.log(err);
                else {
                    console.log("Successfully sent emails");
                    ele.status = status.sent;
                    await ele.save();
                }
            })
        })
    }
})