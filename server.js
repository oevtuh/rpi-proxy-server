var express = require('express');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function (req, res) {
	res.sendfile('index.html');
});

app.get('register', function (req, res) {
	
});

app.post('/send/:command', function (req, res) {
	io.emmit('command');
});

io.on('connection', function(socket){
	console.log('a user connected');
});


var server = app.listen(1337,
	function () {
		console.info('Listening on port %d', server.address().port);
	}
);