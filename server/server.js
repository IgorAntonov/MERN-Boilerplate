const express = require('express');

const config = require('./config');
const helloRoute = require('./routes/hello');

const app = express();

app.use('/api', helloRoute);

app.listen(config.port);

module.exports = app;
