'use strict';

module.exports = (req, res, next) => {
  let bomb = new Error('Self Destruct');
  next(bomb);
};
