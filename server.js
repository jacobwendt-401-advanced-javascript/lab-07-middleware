'use strict';

const express = require('express');

const app = express();

const time = require('./lib/middleware/requestTime');


//use these middleware
app.use(time);

//ROUTES
app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
  res.status(200).send('Route B');
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.get('/d', (req,res) => {
  res.status(200).send('Route D');
});

app.get('/test/error', () => {
  throw 'ERROR';
});


//ERROR HANDLERS
const missing = require('./lib/middleware/missing');
app.use(missing);

const logger = require('./lib/middleware/logger');
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


