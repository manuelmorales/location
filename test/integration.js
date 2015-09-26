var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('../location.js');

describe('GET /ips/:ip', function () {
	var path = '/ips/127.0.0.1';

	describe('when successful', function () {
		it('has status 200 OK', function () {
			request(app)
				.get(path)
				.expect(200)
		});

		it('returns the IP', function () {
			request(app)
			.get(path)
			.expect('127.0.0.1')
		});
	});
});
