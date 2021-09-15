export default interface IMonthSchedule {
  year: number,
  month: number,
  days?: number[],
  dates?: number[],
  excludeDates?: number[],
  time?: string,
}