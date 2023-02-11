// Type inheritance.

class car5 {
  constructor(color: string, location: string, vin: string) {
    this.color = color;
    this.location = location;
    this.vin = vin;
  }
  color: string;
  location: string;
  owner!: string;
  readonly vin: string;
  power(state: boolean) {
    if (state === true) {
      console.log("Starting engine");
    } else {
      console.log("Turning off engine");
    }
  }
}

let myCar = new car5("black", "California", "1A");
let hiraCar = new car5("Red", "Pakistan", "1B");

let alexanderCar: car5;

alexanderCar = {
  color: "black",
  location: "karachi",
  owner: "adil",
  vin: "1A",
  power() {},
};

export {};
