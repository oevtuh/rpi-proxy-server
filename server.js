var express = require('express');

var app = express();


app.get('/', function (req, res) {
	res.json({message: 'Hello world!'});
});


var server = app.listen(1337,
	function () {
		console.info('Listening on port %d', server.address().port);
	}
);