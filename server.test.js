'use strict';

const { server } = require('./server.js');
const supertest = require('supertest')(server);

describe('Middleware error handlers', () => {

  it('returns 500 for error', () => {
    return supertest
      .get('/test/error')
      .expect(500);
  });
});

it('Should respond with a 404 on an missing page', () => {

  return supertest
    .get('/zebra')
    .then(results => {
      expect(results.status).toBe(404);
    });
      
});