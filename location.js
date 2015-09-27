var express = require('express');
var app = express();
var MMDBReader = require('mmdb-reader');
var reader = new MMDBReader('./vendor/GeoLite2-Country.mmdb');

app.get('/ips/:ip', function (req, res) {
	var ip = req.params.ip;
	var record = reader.lookup(ip);

	if (record) {
		res.send({
			'host': ip,
			'country': {
				'iso_code': record.country.iso_code,
				'geoname_id': record.country.geoname_id,
				'name': record.country.names.en
			}
		});

	} else {
		res.status(404);
		res.send({
			'host': ip,
			'error': "The address " + ip + " is not in the database."
		});
	};
});

module.exports = app;
