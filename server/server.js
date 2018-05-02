const express = require('express');
const path = require('path');

const config = require('./config');
const helloRoute = require('./routes/hello');

const app = express();

app.use('/api', helloRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(config.port);

module.exports = app;
