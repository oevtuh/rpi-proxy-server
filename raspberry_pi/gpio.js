/**
 * Created by Олег on 29.04.2015.
 */
var gpio = require('rpi-gpio');

function GpioController(){
	this.devices = {
		redLed: 1,
		greenLed: 2
	};
}

GpioController.prototype ={
	TurnOn : function(pin){
		console.log(pin);
	},
	TurnOff : function(pin){
		console.log(pin);
	},

	Execute: function(device, command){
		var pin = this.devices[device];
		this[command](pin);
	}
}

