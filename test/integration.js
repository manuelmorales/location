var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('../location.js');

describe('GET /ips/:ip', function () {
	it('returns the IP', function (done) {
		request(app)
		.get('/ips/127.0.0.1')
		.expect(200)
		.expect('127.0.0.1')
		.end(done);
	});
});
