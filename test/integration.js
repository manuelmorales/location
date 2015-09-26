var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('../location.js');
var assert = chai.assert;

describe('GET /ips/:ip', function () {
	var path = '/ips/127.0.0.1';

	describe('when successful', function () {
		it('has status 200 OK', function (done) {
			request(app)
				.get(path)
				.expect(200)
				.end(done);
		});

		it('returns JSON', function (done) {
			request(app)
				.get(path)
				.expect('Content-Type', /json/)
				.end(done);
		});

		it('returns the IP', function (done) {
			request(app)
			.get(path)
			.end(function (error, response) {
				if (error) { done(error) };

				body = JSON.parse(response.text);

				assert.equal(body.host,'127.0.0.1');

				done();
			})
		});
	});
});
