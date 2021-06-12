"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DateUtil {
    static toTimeStamp(date) {
        return Math.floor(date.getTime() / 1000);
    }
    static toDate(timestamp) {
        return new Date(timestamp * 1000);
    }
    static todayFirstSecond() {
        let now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        return this.toTimeStamp(now);
    }
}
exports.default = DateUtil;
//# sourceMappingURL=DateUtil.js.map