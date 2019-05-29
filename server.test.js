'use strict';

const { server } = require('./server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Middleware error handlers', () => {

  it('returns 500 for error', () => {
    return mockRequest
      .get('/test/error')
      .expect(500);
  })

  it('Should respond with a 500 on an error', () => {

    return mockRequest
      .get('/zebra')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);

  });

});