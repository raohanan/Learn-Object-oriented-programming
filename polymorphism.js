"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var country = /** @class */ (function () {
    function country(name, language, population, populationGrowthRate, _statePrivacy, _leader, religon) {
        this.planet = "Earth";
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader;
        this.religon = religon;
    }
    country.prototype.populationGrowth = function () {
        return 1;
    };
    Object.defineProperty(country.prototype, "privateData", {
        get: function () {
            return this._statePrivacy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(country.prototype, "leader", {
        set: function (newLeader) {
            this._leader = newLeader;
        },
        enumerable: false,
        configurable: true
    });
    country.prototype.greeting = function () {
        return "Hello";
    };
    return country;
}());
var OICCountry = /** @class */ (function (_super) {
    __extends(OICCountry, _super);
    function OICCountry(name, language, population, populationGrowthRate, statePrivacy, leader, religon) {
        if (religon === void 0) { religon = "Islam"; }
        return _super.call(this, name, language, population, populationGrowthRate, statePrivacy, leader, religon) || this;
    }
    OICCountry.prototype.populationGrowth = function () {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    };
    OICCountry.prototype.greeting = function () {
        return "Assalamoalikum";
    };
    return OICCountry;
}(country));
var pakistan = new OICCountry("pakistan", "urdu", 30000000, 2.5, "Pakistan's Private Data", "Pakistan's leader");
console.info(pakistan);
console.info(pakistan.greeting());
var china = new country("China", "Mandrin", 1500000000, 0, "China's private Data", "China's leader", "Budaism");
console.info(china);
console.info(china.greeting());
