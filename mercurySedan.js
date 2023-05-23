//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)


class Car extends Vehicle {
    constructor(make, model, year, color, mileage, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage);
        this.maximumPassengers = maximumPassengers;
        this.passengers = passengers;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
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

const testCar = new Car("Mercury", "Sedan", "1965", "color", "15000", 0, 0, 4, 160, 100, false)