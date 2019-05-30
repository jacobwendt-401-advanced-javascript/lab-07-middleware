'use strict'; 

module.exports = (req, res, next) => {
  console.log(`The method of this request is ${req.method}`);
  console.log(`The path of this request is ${req.path}`);
  console.log(`The Date and Time of this response was ${req.requestTime}`);
  next();
};