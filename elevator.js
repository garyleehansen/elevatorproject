


function elevator(number, floors) {
    this.number = number;
    this.floors = floors;
    this.passengers = 0;
    this.passedFloors = 0;
    this.trips = 0;
    this.currentFloor = 1;
}

elevator.prototype.inMainenance = function() {
    return (this.trips >= 100);
} 

elevator.prototype.reportFloor = function() {
    console.log('Elevator ' + this.number + (this.passengers > 0) ? '(occupied)' : '' + 'at floor: ' + this.currentFloor);
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

elevator.prototype.summon = function(start) {
    this.move(start);
}

elevator.prototype.travel = function(start) {
    this.passengers++;
    this.move(end);
}

 


module.exports = elevator;