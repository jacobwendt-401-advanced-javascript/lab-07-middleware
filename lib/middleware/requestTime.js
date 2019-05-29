'use strict';

module.exports = (req, res, next) => {
  console.log('getting time');

  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let dateTime = date+' '+time;

  req.requestTime = dateTime;
  next();

}; 

