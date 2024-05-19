"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, power) {
        this.name = name;
        this.power = power;
    }
    Person.prototype.toString = function () {
        return "Name: " + this.name + ", Power: " + this.power;
    };
    Person.prototype.print = function () {
        console.log(this.toString());
    };
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Power", {
        get: function () {
            return this.power;
        },
        set: function (power) {
            this.power = power;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.default = Person;
