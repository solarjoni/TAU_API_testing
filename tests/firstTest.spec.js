const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first', function(err, res) {
  res.status(200).json({ "ok": "response" });
});

describe('First test', function() {
  // this.timeout(50000);

  it('OK response', function() {
  //this.timeout(600);
  //setTimeout(done, 500);

    request(app)
      .get('/first')
      .end(function(err, res) {
        expect(res.statusCode).to.be.equal(200);
      });
  });

  it('Mocky OK', function() {
    this.timeout(500);
    //setTimeout(done, 10);

    request('http://run.mocky.io')
      .get('/v3/9acb71fd-006d-4877-99d3-9b37e0a142ce')
      .expect(200);
  })
});