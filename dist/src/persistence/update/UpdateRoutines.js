"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoutines = void 0;
const RoutineProvider_1 = require("../../services/RoutineProvider");
const Routine_entity_js_1 = require("../../entities/Routine.entity.js");
const typeorm_1 = require("typeorm");
class UpdateRoutines {
    static run() {
        return __awaiter(this, void 0, void 0, function* () {
            let connection = typeorm_1.getConnection();
            yield connection
                .createQueryBuilder()
                .delete()
                .from(Routine_entity_js_1.Routine)
                .execute();
            let routines = RoutineProvider_1.RoutineProvider.routines();
            yield connection.manager.save(routines);
        });
    }
}
exports.UpdateRoutines = UpdateRoutines;
//# sourceMappingURL=UpdateRoutines.js.map