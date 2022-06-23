class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get radiusCircle() {
    return `${this.radius}`;
  }

  set radiusCircle(r) {
    this.radius = r;
  }

  get diameterCircle() {
    return `${this.radius}` * 2;
  }

  circleArea() {
    const circleArea = Math.PI * Math.pow(Number(this.radiusCircle), 2);
    console.log(circleArea.toFixed(2));
  }

  circleLength() {
    const circleLength = Math.PI * Number(this.diameterCircle);
    console.log(circleLength.toFixed(2));
  }
}

const radiusCircle = +prompt('Specify the radius of the circle ...');

const circle = new Circle(radiusCircle);
console.log(circle);
console.log(circle.radiusCircle);
console.log(circle.diameterCircle);
circle.circleArea();
circle.circleLength();

let car = {
  automaker: 'Opel',
  model: 'Astra',
  graduationYear: '1998',
  averageSpeed: 80,
  tankVolume: 52,
  averageFuelConsumption: 7.3,
  amountOfFuel: 15,
  drivers: ['John', 'Michael', 'Bryan'],
};

class Car {
  constructor(
    automaker,
    model,
    graduationYear,
    averageSpeed,
    tankVolume,
    averageFuelConsumption,
    amountOfFuel,
    drivers
  ) {
    this.automaker = automaker;
    this.model = model;
    this.graduationYear = graduationYear;
    this.averageSpeed = averageSpeed;
    this.tankVolume = tankVolume;
    this.averageSpeed = averageFuelConsumption;
    this.amountOfFuel = amountOfFuel;
    this.drivers = drivers;
  }
}

function getInfo(autoCar) {
  for (key in autoCar) {
    console.log(key + ': ' + autoCar[key]);
  }
}

const Opel = new Car('Opel', 'Astra', '1998', 80, 52, 7.3, 15, [
  'John',
  'Michael',
  'Bryan',
]);

getInfo(Opel);
