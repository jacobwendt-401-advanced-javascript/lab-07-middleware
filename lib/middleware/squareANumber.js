'use strict';

module.exports = (req, res, next) => {

  let squareNumber = function(number) {
    number = number*number; 
    return number;
  };

  req.numberSquared = squareNumber(4);
  console.log(req.numberSquared);

  next();
};