var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var request = require('supertest');

var app = require('../location.js');

describe('GET /ips/:ip', function () {
	var ip = '8.8.8.8';
	var path = '/ips/' + ip;

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

		it('returns the geographical information', function (done) {
			request(app)
			.get(path)
			.end(function (error, response) {
				if (error) { done(error) };

				body = JSON.parse(response.text);

				assert.equal(body.host,'8.8.8.8');
				assert.deepEqual(body.country, {
					'name': "United States",
					'geoname_id': 6252001,
					'iso_code': "US"
				});

				done();
			})
		});
	});
});
