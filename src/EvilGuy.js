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
var EvilGuy = /** @class */ (function (_super) {
    __extends(EvilGuy, _super);
    function EvilGuy(name, power) {
        var _this = _super.call(this, name, power) || this;
        _this.criminals = 0;
        _this.isAttacking = false;
        _this.attack = 20;
        return _this;
    }
    Object.defineProperty(EvilGuy.prototype, "Criminals", {
        get: function () {
            return this.criminals;
        },
        set: function (criminals) {
            this.criminals = criminals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EvilGuy.prototype, "IsAttacking", {
        get: function () {
            return this.isAttacking;
        },
        set: function (isAttacking) {
            this.isAttacking = isAttacking;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EvilGuy.prototype, "Attack", {
        get: function () {
            return this.attack;
        },
        set: function (attack) {
            this.attack = attack;
        },
        enumerable: false,
        configurable: true
    });
    EvilGuy.prototype.AddCriminals = function (criminals) {
        this.criminals += criminals;
        this.power += criminals;
    };
    EvilGuy.prototype.toString = function () {
        return _super.prototype.toString.call(this) + ", Criminals: " + this.criminals + ", IsAttacking: " + this.isAttacking + ", Attack: " + this.attack;
    };
    EvilGuy.prototype.Print = function () {
        console.log(this.toString());
    };
    return EvilGuy;
}(Person_1.default));
exports.default = EvilGuy;
