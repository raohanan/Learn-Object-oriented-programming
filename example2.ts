// Class and object in OOP.

class car2 {
  color = "silver";
  power(state: boolean) {
    if (state === true) {
      console.log("Starting engine");
    } else {
      console.log("Turning off engine");
    }
  }
}

let myCar = new car2();

myCar.power(true);
