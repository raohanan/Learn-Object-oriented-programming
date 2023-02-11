// Initialization type Checking.

class car4 {
  constructor(color: string, location: string, vin: string) {
    // if you make a property in constructor then its nt a property of class and it'll not be in object, contructor is just a function you can inherit it in object.
    this.color = color;
    this.location = location; // Through this. property we are trying to access the properties of class.
    this.vin = vin;
  }
  color: string;
  location: string;
  owner!: string; //Asclamination "!", means we are assuring typescript that whenever owner used there will be some value. or we can make it optional by using "?"".
  readonly vin: string; // This line refers to readyonly proparty,means it can not be changed or re-assigned but read only.
  power(state: boolean) {
    if (state === true) {
      console.log("Starting engine");
    } else {
      console.log("Turning off engine");
    }
  }
}

let myCar = new car4("black", "California", "1A");
let hiraCar = new car4("Red", "Pakistan", "1B");
let alexanderCar = new car4("blue", "Macedonia", "1C");

export {};
