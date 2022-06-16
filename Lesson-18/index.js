// program min object and functions

let car = {automaker: 'Opel',
    model: 'Astra',
    graduationYear: '1998',
    averageSpeed: 80,
    tankVolume: 52,
    averageFuelConsumption: 7.3,
    amountOfFuel: 15,
    drivers: ['John', 'Michael', 'Bryan']
};

function carInfo(){
    for (key in car) {
        console.log( key + ': '+ car[key] );
      };
};

function addDriver(arrayDrivers, nameDriver){
    arrayDrivers.push(nameDriver);
};

function refuelingTheCar(amount){

    let tempAmount = amount + car.amountOfFuel;

    if (tempAmount<=car.tankVolume && amount >= 0) {
        car.amountOfFuel = tempAmount;
    }

    else{
      console.log('Sorry! The amount of fuel is more than you can refuel.')
    }
}

function travelTime(distance, nameDriver){

let time = distance/car.averageSpeed;
let timeToRest = Math.trunc(time/4);
let allTime = time + timeToRest;

console.log('Traver time: ' + allTime.toFixed(2));

let arrayDrivers = car.drivers;

if (arrayDrivers.includes(nameDriver) != true){
    return alert('This driver cannot drive.');
}

let fuelToTrip = distance * car.averageFuelConsumption/100;

if (car.amountOfFuel < fuelToTrip) {

    let refuelCar =  prompt('There is not enough fuel for the trip. Refuel the car?');

    if (refuelCar != null){
        amount = fuelToTrip - car.amountOfFuel;
        refuelingTheCar(amount);
    }
}

}

// program norm object and functions
const dateObj = new Date();

const timeObj= { 
      
    hours: dateObj.getHours(),
    minute:dateObj.getMinutes(),
    second: dateObj.getSeconds(),
    timeInfo() {    

         let stringHours = this.hours < 10 ?('0' + String(this.hours)) : String(this.hours);
         let stringminute = this.minute < 10 ? ('0' + String(this.minute)) : String(this.minute);
         let stringsecond = this.second < 10 ? ('0' + String(this.second)) : String(this.second);
    
         timeString = stringHours +':' + stringminute +':' + stringsecond;

        console.log(timeString);
    },   
};


function addSecond(second){
 
    let tempSecond = timeObj.second + second;

    if (tempSecond <= 59){
        timeObj.second =  tempSecond;
    }
    else{

    let tempMinute = Math.trunc(tempSecond/60);
       
        timeObj.second = tempSecond - tempMinute*60;
        timeObj.minute = timeObj.minute + tempMinute;
    };

};

function addMinute(minute){

    let tempMinute = timeObj.minute  + minute;

    if (tempMinute <= 59){
        timeObj.minute =  tempMinute;
    }
    else{
        let tempHours = Math.trunc(tempMinute/60);
   
        timeObj.minute = tempMinute - tempHours*60;
        timeObj.hours = timeObj.hours + tempHours;

        if(timeObj.hours > 24){
            tempHours = Math.trunc(timeObj.hours/24);
            timeObj.hours = timeObj.hours - tempHours*24;
        }
    }
}

function addHours(hours){

    let tempHours = timeObj.hours + hours;

    if(tempHours >= 24){
        newDay = Math.trunc(tempHours/24);
        timeObj.hours = tempHours - newDay*24;
    }
    else{
        timeObj.hours = timeObj.hours + hours;  
    }
}



// program min

// 1
 carInfo();

// 2
 addDriver(car.drivers, 'Petro');
 carInfo();

// 3
 refuelingTheCar(19);
 carInfo();

// 4
travelTime(600, 'Petro');
carInfo();

// program norm

// 1
timeObj.timeInfo();

// 2
addSecond(15);
timeObj.timeInfo();

// 3
addMinute(5);
timeObj.timeInfo();

// 4
addHours(7);
timeObj.timeInfo();