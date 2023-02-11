// Extending a class.

class car6 {
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

  class Mercedes extends car6 {
    allowreems = true;
    adjestablesuspention = true
  }

  let myCar = new Mercedes("silver","california","1A")
  console.log(myCar);
  


  export{}