'use strict';

const express = require('express');

const app = express();

const time = require('./lib/middleware/requestTime');
const log = require('./lib/middleware/console-log');
const selfDestruct = require('./lib/middleware/selfDestruct');
const number = require('./lib/middleware/squareANumber');

//use these middleware
app.use(time);
app.use(log);

//ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Home');
});

app.get('/b', number, (req, res) => {
  res.status(200).send(`Route B ${req.numberSquared}`);
});

app.get('/c', (req, res) => {
  res.status(200).send('Route C');
});

app.get('/d', selfDestruct, (req,  res) => {
  res.status(200).send('Route D');
});

app.get('/test/error', () => {
  throw new Error('It exploded intentionally');
});


//ERROR HANDLERS
const missing = require('./lib/middleware/missing');
app.use(missing);

const logger = require('./lib/middleware/error-logger');
app.use(logger);



module.exports = {
  server: app,
  start: port => {
    let PORT = process.env.PORT || port || 3000;
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}...`);
    });
  },
};


