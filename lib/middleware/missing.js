'use strict';

module.exports = function(req, res) {
  console.log('404', `${req.path}`);
  res.status(404);
  res.send('The page you are looking for cannot be found');
};

