// Constuctor Function.

class car3 {
  constructor(color: string, location: string) {
    this.color = color;
    this.location = location;
  }
  color: string;
  location: string;
  power(state: boolean) {
    if (state === true) {
      console.log("Starting engine");
    } else {
      console.log("Turning off engine");
    }
  }
}

let myCar = new car3("black", "California");
let hiraCar = new car3("Red", "Pakistan");
let alexanderCar = new car3("blue", "Macedonia");

console.log(`Adil's car is ${myCar.color} and is in ${myCar.location}`);
console.log(`Hira's car is ${hiraCar.color} and is in ${hiraCar.location}`);
console.log(
  `Alexander's car is ${alexanderCar.color} and is in ${alexanderCar.location}`
);

export {};
