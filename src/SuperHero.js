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
var Person_1 = require("./Person");
var SuperHero = /** @class */ (function (_super) {
    __extends(SuperHero, _super);
    function SuperHero(name, power, attacks, attacksValue) {
        var _this = _super.call(this, name, power) || this;
        _this.saveTheWorld = false;
        _this.isAttacked = false;
        _this.attacks = attacks;
        _this.attacksValue = attacksValue;
        return _this;
    }
    SuperHero.prototype.SaveTheWorld = function () {
        this.saveTheWorld = true;
    };
    //משתנה "iAttacked"
    //נועד כדי לבדוק אם הגיבור מותקף, משתנה זה ישתנה כאשר הנבל מתקיף.
    SuperHero.prototype.Rest = function () {
        if (!this.isAttacked) {
            this.Power += 1;
        }
        else
            console.log("Cant rest right now!");
    };
    SuperHero.prototype.toString = function () {
        return _super.prototype.toString.call(this) + ", Attacks: " + this.attacks;
    };
    SuperHero.prototype.Print = function () {
        console.log(this.toString());
    };
    return SuperHero;
}(Person_1.default));
exports.default = SuperHero;
