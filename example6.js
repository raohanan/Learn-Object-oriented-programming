"use strict";
// Extending a class.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var car6 = /** @class */ (function () {
    function car6(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    car6.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting engine");
        }
        else {
            console.log("Turning off engine");
        }
    };
    return car6;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allowreems = true;
        _this.adjestablesuspention = true;
        return _this;
    }
    return Mercedes;
}(car6));
var myCar = new Mercedes("silver", "california", "1A");
console.log(myCar);
