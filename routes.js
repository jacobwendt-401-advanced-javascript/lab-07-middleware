'use strict';

const Router = require('express').Router;
const selfDestruct = require('./lib/middleware/selfDestruct');

const router = module.exports = new Router();

router.get('/c', (req, res) => {
  res.send(200).sent('Route C');
});

router.get('/d', selfDestruct, (req, res) => {
  res.send('route D');
});




