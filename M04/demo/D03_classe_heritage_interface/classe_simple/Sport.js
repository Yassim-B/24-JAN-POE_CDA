"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sport = void 0;
var Sport = /** @class */ (function () {
    function Sport(nom, description) {
        this.nom = nom;
        this.description = description;
        this.prive = "valeur cache";
    }
    Sport.prototype.afficher = function () {
        console.log("".concat(this.nom, " - ").concat(this.description));
    };
    return Sport;
}());
exports.Sport = Sport;
