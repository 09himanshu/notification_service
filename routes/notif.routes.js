const controller = require('../controllers/notification.controller');

module.exports = (app) => {
    app.post('/crm/api/v1/create_notification', controller.acceptNotificationRequest);
    app.get('/crm/api/v1/fetch_notification', controller.fetch);
}