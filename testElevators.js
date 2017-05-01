var elevatorController = require('./elevatorController');

var elevators = new elevatorController(10, 100);

elevators.requestElevator(1, 50);