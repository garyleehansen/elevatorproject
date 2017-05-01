var elevator = require('./elevator');
var request = require('./request');



function elevatorController(count, floors) {
    this.floors = floors;
    this.elevators = [];
    this.requests = [];
    for (var l = 0; l < count; ++l) {
        this.elevators.push(new elevator(floors));
    }
}

elevatorController.prototype.manageElevators = function(start, end) {

    while (true) {
        var request = this.requests.shift();
        if (request != null) {
            this.requestElevator(request)
        }
    }


}

elevatorController.prototype.requestElevator = function(request) {
    var selectedElevator = this.selectElevator(request);
    if (selectedElevator != null) {
        selectedElevator.travel(request);
    }
}

elevatorController.prototype.selectElevator = function(request) {
    // if the elevator is currently on the floor return the first as the selectedElevator as long as not in maintenance.
    // if any occupied elevator will pass the room return the first as the selectedElevator as long as not in maintenance.
    // otherwise return the closest non-occupied room not in mainenance
}

elevatorController.prototype.requestElevator = function(start, end) {
    start = (start < 1) ? 1 : start;
    start = (start > this.floors) ? this.floors : start;

    end = (end < 1) ? 1 : end;
    end = (end > this.floors) ? this.floors : end;
    
    this.requests.push(new request(start, end));
}

elevatorController.prototype.requestElevator = function(start, end) {
    start = (start < 1) ? 1 : start;
    start = (start > this.floors) ? this.floors : start;

    end = (end < 1) ? 1 : end;
    end = (end > this.floors) ? this.floors : end;
    
    this.requests.push(new request(start, end));
}

module.exports = elevatorController;