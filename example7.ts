// overwriting constructors and Inheritance.

class car7 {
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

class Mercedes extends car7 {
  constructor(
    color: string,
    location: string,
    vin: string,
    alloywheels: boolean
  ) {
    super(color, location, vin);
    this.alloywheels = alloywheels;
  }
  alloywheels: boolean;
  adjestablesuspention = true;
}

let myCar = new Mercedes("silver", "california", "1A", true);
console.log(myCar);

export {};
