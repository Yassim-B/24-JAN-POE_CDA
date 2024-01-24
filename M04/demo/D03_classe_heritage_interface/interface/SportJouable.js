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
exports.SportJouable = void 0;
var Sport_1 = require("../classe_simple/Sport");
var SportJouable = /** @class */ (function (_super) {
    __extends(SportJouable, _super);
    function SportJouable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SportJouable.prototype.jouer = function (joueur1, joueur2) {
        var vainqueur = joueur1;
        if (Math.floor(Math.random() * Math.floor(2)) == 0) {
            vainqueur = joueur2;
        }
        return vainqueur;
    };
    return SportJouable;
}(Sport_1.Sport));
exports.SportJouable = SportJouable;
