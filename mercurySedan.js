//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)


class Car extends Vehicle {
    constructor(make, model, year, color, mileage){ // The solution looks like it wants the car class to be specific to the sedan, but i interpreted it differently and made it so that you add the properties later. Probably not efficient so any feedback is appreciated.
        super(make, model, year, color, mileage);
        this.maximumPassengers;
        this.passengers;
        this.numberOfWheels = 4;
        this.maximumSpeed;
        this.fuel;
        this.scheduleService = false;
    }

    loadPassenger(num){
        if(this.passengers < this.maximumPassengers){
        	this.passengers += num;
        	console.log('the car has ' + this.passengers + ' passengers.')
        } else {
        		console.log('No more room in the car.')
        }
    }

    //START METHOD INHERITED

    serviceCheck(){
        if(this.mileage > 30000){
            this.scheduleservice = true
            console.log('Service needed.')
        } else {
        		console.log('No service needed')
        }
    }
}

const testCar = new Car("Mercury", "Sedan", "1965", "color", "15000");
testCar.maximumPassengers = 5;
testCar.passengers = 0;
testCar.numberOfWheels = 4;
testCar.maximumSpeed = 160;
testCar.fuel = 100;
