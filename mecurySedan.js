//this includes the vehicle class as a module
// const VehicleModule = require("./vehicle.js")

import {Vehicle} from "./vehicle.js";

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class mercurySedan extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passengers = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.timeForMaintenance = false
        this.started = false
    }

    loadPassenger(num){

    }

    start(){
        if(this.fuel > 0){
            console.log(`${this.make} ${this.model} roars!!`)
            return this.started === true
        }
        else{
            console.log('Add fuel')
            return this.started === false
        }
    }

    scheduleService(mileage){
        if(mileage > 30000){
            console.log('Get it in the shop ASAP!')
            return this.timeForMaintenance === true
        }
        else{
            console.log('It is all good mechanically')
            return this.timeForMaintenance === false
        }
    }
}

let newSedan = new mercurySedan("Mecury", "Sedan", "1965", "Blue")

newSedan.start()
newSedan.typeOfVehicle(4)
newSedan.scheduleService(50000)