class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}

//This exports things you want to use from this "module", more info in readme
module.exports = {
    Vehicle
}


// class Car {
//     constructor(maximumPassengers, passengers, numberOfWheels, fuel, scheduleService, milage) {
//         this.maximumPassengers = maximumPassengers;
//         this.passenger = 0;
//         this.numberOfWheels = 4
//         this.maximumSpeed = 160;
//         this.fuel = 10;
//         this.scheduleService = scheduleService;
//         this.mileage = mileage;
       

//     }
//     // if passenger less than maximumPassengers then availableRoom == true
//     loadPassenger() {
//         if (this.passenger > this.maximumPassengers) {
//             console.log("Seat is Available")
//         } else {
//             console.log("Vehicle is Full!")
//         }
        

//     }


//     // if fuel is greater than 0, the start ==true
//     start() {
//         if (this.fuel < 0) {
//             console.log("Engine Starts!!!")
//         } else {
//             console.log("No Fuel, No Go...")
//         }
//     }

//     // if mileage is greater than 30000, time for maintenance == true
//     scheduleService() {
//         if (This.mileage < 300000){
//             console.log("Maintenance Needed!!!")
//             }else {
//             console.log("keep on Trucking!")
//         }

// }