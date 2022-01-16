// Constructor Notation 
function Car (model, color, year, fuel, fuelConsumption) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.fuel = fuel;
    //per 100km
    this.fuelConsumption = fuelConsumption;
    this.fuelNeeded = function (distance) {
        console.log(`====FUEL=${this.fuel} ====`)

        //distance in km times the fuelConsumption / 100
        let neededFuel = distance * (this.fuelConsumption/100)
        console.log(`You need ${neededFuel}L for ${distance}km`)
        //check to see if you have enough fuel for that distance
        if(this.fuel >= neededFuel) {
            console.log("You have enogh fuel for this trip.")
        }
        else {
            console.log("You don't have enogh fuel for this trip.")
            console.log(`You are missing ${neededFuel - this.fuel}L to finish this trip`)
        }
    }
}

//create a car object
let myCar = new Car('Ford Focus', 'red', 2017, 20, 6)

myCar.fuelNeeded(32);
myCar.fuelNeeded(21);

myCar.fuelNeeded(422);

//fill up the car
myCar.fuel = 30;
myCar.fuelNeeded(422);

