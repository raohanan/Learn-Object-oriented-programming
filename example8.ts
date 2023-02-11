// overwriting Methods and Inheritance.

class car8 {
    constructor(color: string, location: string, vin: string) {
      this.color = color;
      this.location = location;
      this.vin = vin;
    }
    color: string;
    location: string;
    owner!: string;
    readonly vin: string;
    power(state: boolean):string { //we have to define here expilcitly the type of method during overwriting.
      if (state === true) {
        return"Starting engine";
      } else {
        return"Turning off engine";
      }
    }
  }
  
  class Mercedes extends car8 {
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
    power(state: boolean):string { //we have to define here expilcitly the type of method during overwriting.
        if (state === true) {
          return"Starting Mercedes engine";
        } else {
          return"Turning off Mercedes engine";
        }
      }
  }
  
  let myCar = new Mercedes("silver", "california", "1A", true);
  console.log(myCar);
  myCar.power(true)
  
  export {};