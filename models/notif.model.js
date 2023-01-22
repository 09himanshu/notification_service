const mongoose = require('mongoose');
const {status} = require('../utils/constant.util')

const notif_Schema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    recepientEmails: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    requester: {
        type: String
    },
    status: {
        type: String,
        default: status.un_sent,
        enum: [status.sent, status.un_sent]
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {return Date.now()}
    },
    updatedAt: {
        type: Date,
        default: () => {return Date.now() }
    }
});

module.exports = mongoose.model('notif', notif_Schema); 