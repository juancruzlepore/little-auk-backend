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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routine = void 0;
// Routine
const typeormExports_1 = require("./typeormExports");
let Routine = class Routine {
    constructor(id, exerciseId, goal) {
        this.id = id;
        this.exerciseId = exerciseId;
        this.goal = goal;
    }
};
__decorate([
    typeormExports_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Routine.prototype, "id", void 0);
__decorate([
    typeormExports_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Routine.prototype, "exerciseId", void 0);
__decorate([
    typeormExports_1.Column(),
    __metadata("design:type", Number)
], Routine.prototype, "goal", void 0);
Routine = __decorate([
    typeormExports_1.Entity(),
    __metadata("design:paramtypes", [Number, Number, Number])
], Routine);
exports.Routine = Routine;
//# sourceMappingURL=Routine.entity.js.map