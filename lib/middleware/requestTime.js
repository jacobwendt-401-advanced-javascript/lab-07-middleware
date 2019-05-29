'use strict';

module.exports = (req, res, next) => {
  console.log('getting time');
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  res.send(date);

}; 

