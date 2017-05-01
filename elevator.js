


function elevator(number, floors) {
    this.number = number;
    this.floors = floors;
    this.requests = [];
    this.passedFloors = 0;
    this.trips = 0;
    this.up = 0;
    this.currentFloor = 1;
}

elevator.prototype.inMainenance = function() {
    return (this.trips >= 100);
} 

elevator.prototype.reportFloor = function() {
    console.log('Elevator ' + this.number + (this.requests.length > 0) ? '(occupied)' : '' + 'at floor: ' + this.currentFloor);
} 

elevator.prototype.reportDoorOpen = function() {
    console.log('Elevator ' + this.number + ' at opening door at floor: ' + this.currentFloor);
} 

elevator.prototype.reportDoorClosed = function() {
    console.log('Elevator ' + this.number + ' at closing door at floor: ' + this.currentFloor);
}

elevator.prototype.move = function(target) {
    if (target < this.currentFloor) {
        this.reportFloor();
        this.passedFloors++;
        for (var l = this.currentFloor - 1; l <= target + 1; --l) {
            this.currentFloor--;
            this.passedFloors++;
            this.reportFloor();
        }
    }
    else {
        this.reportFloor();
        this.passedFloors++;
        for (var l = this.currentFloor + 1; l <= target - 1; ++l) {
            this.currentFloor--;
            this.passedFloors++;
            this.reportFloor();
        }
    }
}

elevator.prototype.move = function() {

    if (true /*check upper and lower bounds*/) {
        this.reportFloor();

        var on = this.requestStarting();
        var off = this.requestCompleted();
        if (on || off.length > 0) {
            this.reportDoorOpen();
            this.reportDoorClosed();
        }

        this.currentFloor = (this.up) ? this.currentFloor + 1 : this.currentFloor - 1;
        // delay to simulate.
        if (this.requests > 0) {
            this.move();
        }
    }
}



elevator.prototype.requestStarting = function() {
    // return true if request start on the current floor
}

elevator.prototype.requestCompleted = function() {
    // collect, remove (from this.requests) and return a list those requests that end on this floor.
}

elevator.prototype.travel = function(request, up) {
    this.requests.push(request);
    this.up = up;
    this.move();
}

 


module.exports = elevator;