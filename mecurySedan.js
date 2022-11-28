//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle //importing it from vehicle.js line 64
class Car extends VehicleModule { //The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage) //super calls the Parent Constructor
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
      
    }
    // if passenger less than maximumPassengers then availableRoom == true
    //num
    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) { //equation of invoke "loadPassenger" arguments + "this.Passenger"
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full")
        }
            

    }
    // if fuel is greater than 0, the start ==true
    start() {
        if (this.fuel > 0) {
            console.log("engine started.");
            return this.started = true
        } else {
            console.log("no fuel, no go.");
            return this.started = false;
        }
    }
    // if mileage is greater than 30000, time for maintenance == true
    service() {
        if (this.mileage > 300000) {
            this.scheduleService == true;
            return this.scheduleService
        } 
    }
}

//this shows how to call from this module...
let v = new Car('Mercury', 'Sedan', '1965', 'Silver', '50000');
// "new Car" has to be the same as your "class Car" in line 3


v.loadPassenger(5)
v.start()
v.service()

console.log(v)

