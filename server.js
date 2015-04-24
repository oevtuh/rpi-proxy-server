var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 1337
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
    console.log("connected");
	socket.on('createRoom', function(data) {
        console.log("room created " + data.Room);
		socket.join(data.Room);
		socket.on('chat message', function(msg){
			console.log(msg);
			io.to(data.Room).emit('chat message', data.UserName+' : ' +  msg + '  --> in room ' + data.Room);
		});
	});
    socket.on('leaveRoom', function(data) {
        console.log("room leaved " + data.Room);
        socket.leave(data.Room);
    });

});

app.get('/send/:command', function (req, res) {
	res.end('ds');
});

http.listen(server_port,server_ip_address ,function(){
    console.log('listening on '+server_ip_address+' : '+server_port);
});
