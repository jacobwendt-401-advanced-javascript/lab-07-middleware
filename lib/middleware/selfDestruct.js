'use strict';

module.exports = (req, res, next) => {
  throw Error;
  next();
};