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
    function country(name, language, population, populationGrowthRate, _statePrivacy, _leader) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader;
    }
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
    return country;
}());
var OICCountry = /** @class */ (function (_super) {
    __extends(OICCountry, _super);
    function OICCountry(name, language, population, populationGrowthRate, statePrivacy, leader) {
        return _super.call(this, name, language, population, populationGrowthRate, statePrivacy, leader) || this;
    }
    OICCountry.prototype.populationGrowth = function () {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    };
    return OICCountry;
}(country));
var pakistan = new OICCountry("pakistan", "urdu", 30000000, 2.5, "Pakistan Private Data", "Pakistan's leader");
console.info(pakistan);
// pakistan.name=("Islamic Republic of Pakistan")
// console.info(pakistan);
// Error beacuse _statePrivacy is private property
// pakistan._statePrivacy
//Success
console.info(pakistan.privateData);
//Error beacuse _leader is private property
// pakistan._leader="New Leader"
//Success
pakistan.leader = "New Leader";
console.info(pakistan);
