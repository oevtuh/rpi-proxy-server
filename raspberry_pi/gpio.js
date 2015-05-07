/**
 * Created by Олег on 29.04.2015.
 */
var gpio = require('rpi-gpio');

var devices = {
	redLed: 1,
	greenLed: 2
};

function directWrite(pin, value, callback) {
	return gpio.write(pin, value, callback);
}

module.exports.Turn = function(device , state){
	console.log(device + " " +state);
	var pin = devices[device];
	directWrite(pin, state, function(){
		console.log('foo');
	})
}










