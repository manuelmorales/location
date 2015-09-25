var express = require('express');
var app = express();

app.get('/ips/:ip', function (req, res) {
	res.send(req.params.ip);
});

module.exports = app;
