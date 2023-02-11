var car2 = /** @class */ (function () {
    function car2() {
        this.color = "silver";
    }
    car2.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting engine");
        }
        else {
            console.log("Turning off engine");
        }
    };
    return car2;
}());
var myCar = new car2();
myCar.power(true);
