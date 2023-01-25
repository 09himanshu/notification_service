const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/system.config');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(config.mongo_url, () => {
    console.log(`Database connected`);
});

 
app.get('/', async (req, res) => {
    try {
        res.status(200).send({status: true, message: 'success', data: `Welcome to our notification service`});
    } catch (err) {
        console.log(err);
        res.status(500).send({status: false, message: 'failure', data: `Error occur at ${err.message}`});
    }
})

require('./routes/notif.routes')(app);

// connect node-corn
require('./schedulers/email.scheduler');

app.listen(config.port, () => console.log(`Server listen on port ${config.port}`));