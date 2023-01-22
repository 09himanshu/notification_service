const notifEmails = require('../models/notif.model');

// Controller to create the notification

exports.acceptNotificationRequest = async(req, res) => {
    try {
        // Create notification to be inserted based on the re body
        const notifObj = {
            subject: req.body.subject,
            recepientEmails: req.body.recepientEmails,
            content: req.body.content,
            requester: req.body.requester,
            status: req.body.status
        } 

        // Save the notification request
        let receive = await notifEmails.create(notifObj);

        // Send the tracking _id back to the caller
        res.status(201).send({status: true, message: `Request accepted`, data: receive._id});

    } catch (err) {
        console.log(err.message);
        res.status(500).send({status: false, message: 'failure', message: `Error occur at ${err.message}`});
    }
}

// controller for get the notification
exports.fetch = async (req, res) => {
    let _id = req.params._id;
    try {
        let receive = await notifEmails.findById(_id);
        res.status(200).send({status: true, message: 'success', data: receive});
    } catch (err) {
        console.log(err);
        res.status(500).send({message: `Error occur at ${err.message}`});
    }
}