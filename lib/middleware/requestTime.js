'use strict';

module.exports = (req, res, next) => {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let dateTime = date+' '+time;

  console.log(`The Date and Time of request was ${dateTime}`);

  req.requestTime = dateTime;
  next();

}; 

