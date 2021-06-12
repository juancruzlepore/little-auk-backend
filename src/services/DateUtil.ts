export default class DateUtil {
    public static toTimeStamp(date: Date): number {
        return Math.floor(date.getTime() / 1000);
    }

    public static toDate(timestamp: number): Date {
        return new Date(timestamp * 1000);
    }

    public static todayFirstSecond(): number {
        let now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        return this.toTimeStamp(now);
    }
}