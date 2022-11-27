//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")
class Car extends VehicleModule { //The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage) //super is link to the parent js this is vehicle.js
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
      
    }
    // if passenger less than maximumPassengers then availableRoom == true
    loadPassenger() {
        if (this.passenger < this.maximumPassengers) {
            return this.availableRoom == true;
            console.log("Seat is Available")
        } else {
            return this.availableRoom == false;
            console.log("Vehicle is Full!")
        }
            

    }
    // if fuel is greater than 0, the start ==true
    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started.");
        } else {
            return this.started = false;
            console.log("no fuel, no go.");
        }
    }
    // if mileage is greater than 30000, time for maintenance == true
    scheduleService() {
        if (this.mileage > 300000) {
            return this.mileage == true;
            console.log("Maintenance Needed!!!")
        } 
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");

console.log(v.make)





