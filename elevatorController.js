var elevator = require('./elevator');



function elevatorController(count) {
    this.count = count;

    this.elevators = [];
    for (var l = 0; l < count; ++l) {
        this.elevators.push(new elevator());
    }
}


module.exports = elevatorController;