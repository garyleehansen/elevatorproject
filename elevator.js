


function elevator(number, floors) {
    this.number = number;
    this.floors = floors;
    this.occupied = 0;
    this.currentFloor = 1;
}

elevator.prototype.reportFloor = function() {
    console.log('Elevator 1 ' + (this.occupied == 1) ? '(occupied)' : '' + 'at floor: ' + this.currentFloor);
} 

elevator.prototype.reportDoorOpen = function() {
    console.log('Elevator 1 at opening door at floor: ' + this.currentFloor);
} 

elevator.prototype.reportDoorClosed = function() {
    console.log('Elevator 1 at closing door at floor: ' + this.currentFloor);
}

elevator.prototype.summon = function(start) {
    
}

 


module.exports = elevator;