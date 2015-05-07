/**
 * Created by Олег on 29.04.2015.
 */
var gpio = require('rpi-gpio');

(function(){
	gpio.setup(7, gpio.DIR_OUT);
}());

var devices = {
	redLed: 7,
	greenLed: 2
};

function directWrite(pin, state, callback) {
	return gpio.write(pin, state, callback);
}

module.exports.Turn = function(device , state){
	console.log(device + " " +state);
	var pin = devices[device];
	directWrite(pin, state);

}










