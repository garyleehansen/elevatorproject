var elevatorController = require('./elevatorController');

var elevators = new elevatorController(10, 100);

elevators.manageElevators();

// asynchronously make requests
elevators.requestElevator(1, 50);

