export default interface ISchedule {
  year: number;
  month: number;
  daysOfWeek: number[];
  dates?: number[];
  excludeDates?: number[];
  time: string;
}