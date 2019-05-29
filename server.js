'use strict';

const express = require('express');

const app = express();

const missing = require('./lib/middleware/missing');
const logger = require('./lib/middleware/error-logger');
const time = require('./lib/middleware/requestTime');
const log = require('./lib/middleware/console-log');
const selfDestruct = require('./lib/middleware/selfDestruct');

//use these middleware
app.use(time);
app.use(log);

//ROUTES
app.get('/', (req,res) => {
  res.status(200).send('Home');
});

app.get('/b', (req,res) => {
  res.status(200).send('Route B');
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.get('/d', selfDestruct, (req,  res) => {
  res.status(200).send('Route D');
});

app.get('/test/error', () => {
  throw 'ERROR';
});


//ERROR HANDLERS

app.use(missing);

app.use(logger);



module.exports = {
  server: app,
  start: port => {
    let PORT = process.env.PORT || port || 3000;
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}...`);
    });
  }
};


