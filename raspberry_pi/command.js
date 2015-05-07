var gpio = require('./gpio');

module.exports.Execute = function (param){
	var commandArray = param.split('-');
	var command = commandArray[0];
	var device = commandArray[1];
	var state = commandArray[2];
	gpio[command](device, state );
}