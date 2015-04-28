var gpio = require('rpi-gpio');
var io = require('socket.io-client'),
	socket = io.connect('nodejs-rpiproxy.rhcloud.com', {
		port: 80
	});

socket.emit('createRoom', {Room: 'myRoom', UserName: 'Oleg'});

socket.on('chat message', function(msg){
	console.log(msg);
});
