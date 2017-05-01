var elevator = require('./elevator');
var request = require('./request');



function elevatorController(count, floors) {
    this.elevators = [];
    this.requests = [];
    for (var l = 0; l < count; ++l) {
        this.elevators.push(new elevator(floors));
    }
}

elevatorController.prototype.requestElevator = function(start, end) {
    this.requests.push(new request(start, end));
}

module.exports = elevatorController;