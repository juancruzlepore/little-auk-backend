"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Exercise_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
// Exercise
const typeormExports_1 = require("./typeormExports");
let Exercise = Exercise_1 = class Exercise {
    constructor(name) {
        this.name = name;
        this.id = Exercise_1.last_id++;
    }
};
Exercise.last_id = 0;
__decorate([
    typeormExports_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Exercise.prototype, "id", void 0);
__decorate([
    typeormExports_1.Column(),
    __metadata("design:type", String)
], Exercise.prototype, "name", void 0);
Exercise = Exercise_1 = __decorate([
    typeormExports_1.Entity(),
    __metadata("design:paramtypes", [String])
], Exercise);
exports.Exercise = Exercise;
//# sourceMappingURL=Exercise.entity.js.map