var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var request = require('supertest');

var app = require('../lib/location.js');

describe('GET /ips/:ip', function () {
	describe('when successful', function () {
		var ip = '8.8.8.8';
		var path = '/ips/' + ip;

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

		it('returns the geographical information', function (done) {
			request(app)
			.get(path)
			.end(function (error, response) {
				if (error) { done(error); }

				body = JSON.parse(response.text);

				assert.equal(body.host, ip);
				assert.deepEqual(body.country, {
					'name': "United States",
					'geoname_id': 6252001,
					'iso_code': "US"
				});

				done();
			});
		});
	});

	describe('when not found', function () {
		var ip = '127.0.0.1';
		var path = '/ips/' + ip;

		it('has status 404 NotFound', function (done) {
			request(app)
				.get(path)
				.expect(404)
				.end(done);
		});

		it('returns JSON', function (done) {
			request(app)
				.get(path)
				.expect('Content-Type', /json/)
				.end(done);
		});

		it('returns a JSON error', function (done) {
			request(app)
			.get(path)
			.end(function (error, response) {
				if (error) { done(error); }

				body = JSON.parse(response.text);

				assert.equal(body.host, ip);
				expect(body.error).to.be.a('string');

				done();
			});
		});
	});
});
