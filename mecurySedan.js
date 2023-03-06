//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class mercurySedan extends VehicleModule{
    constructor(make, model, year, color, mileage, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passengers = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

    loadPassenger(num){

    }

    start(){
        if(this.fuel > 0){
            return started === true
        }
        else{
            return started === false
        }
    }

    scheduleService(mileage){
        if(mileage > 30000){
            return timeForMaintenance === true
        }
        else{
            return timeForMaintenance === false
        }
    }
}