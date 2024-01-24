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
exports.Sandwich = exports.Salade = exports.Tomate = exports.Boeuf = exports.Poulet = exports.Legume = exports.Viande = void 0;
// Déclaration d'une classe Générique
var Viande = /** @class */ (function () {
    function Viande(type) {
        this.type = type;
    }
    return Viande;
}());
exports.Viande = Viande;
var Legume = /** @class */ (function () {
    function Legume(type) {
        this.type = type;
    }
    return Legume;
}());
exports.Legume = Legume;
var Poulet = /** @class */ (function (_super) {
    __extends(Poulet, _super);
    function Poulet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Poulet;
}(Viande));
exports.Poulet = Poulet;
var Boeuf = /** @class */ (function (_super) {
    __extends(Boeuf, _super);
    function Boeuf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Boeuf;
}(Viande));
exports.Boeuf = Boeuf;
var Tomate = /** @class */ (function (_super) {
    __extends(Tomate, _super);
    function Tomate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tomate;
}(Legume));
exports.Tomate = Tomate;
var Salade = /** @class */ (function (_super) {
    __extends(Salade, _super);
    function Salade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Salade;
}(Legume));
exports.Salade = Salade;
var Sandwich = /** @class */ (function () {
    function Sandwich(viande, legume) {
        this.viande = viande;
        this.legume = legume;
    }
    Sandwich.prototype.afficher = function () {
        console.log("Sandwitch " + this.viande.type + "/" + this.legume.type);
    };
    return Sandwich;
}());
exports.Sandwich = Sandwich;
