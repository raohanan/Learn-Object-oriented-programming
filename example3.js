"use strict";
exports.__esModule = true;
var car3 = /** @class */ (function () {
    function car3(color, location) {
        this.color = color;
        this.location = location;
    }
    car3.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting engine");
        }
        else {
            console.log("Turning off engine");
        }
    };
    return car3;
}());
var myCar = new car3("black", "California");
var hiraCar = new car3("Red", "Pakistan");
var alexanderCar = new car3("blue", "Macedonia");
console.log("Adil's car is ".concat(myCar.color, " and is in ").concat(myCar.location));
console.log("Hira's car is ".concat(hiraCar.color, " and is in ").concat(hiraCar.location));
console.log("Alexander's car is ".concat(alexanderCar.color, " and is in ").concat(alexanderCar.location));
