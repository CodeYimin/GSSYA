import ISchedule from "../interfaces/ISchedule";

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
export function daysInMonth(year: number, zeroIndexMonth: number): number {
  return new Date(year, zeroIndexMonth + 1, 0).getDate();
}

export function getCurrentDateWithoutTime(): Date {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

export function dateIsInSchedule(targetDate: Date, schedule: ISchedule): boolean {
  const date = targetDate.getDate();
  const day = targetDate.getDay();

  if (!schedule) {
    return false;
  }

  if (schedule.excludeDates?.includes(date)) {
    return false;
  }

  if (schedule.daysOfWeek?.includes(day) || schedule.dates?.includes(date)) {
    return true;
  } else {
    return false;
  }
}

export function dateIsInSchedules(targetDate: Date, schedules: ISchedule[]): boolean {
  const year = targetDate.getFullYear();
  const correctedMonth = targetDate.getMonth() + 1;

  const targetSchedules = schedules.filter((schedule) => (
    schedule.year === year && schedule.month === correctedMonth
  ));

  for (const schedule of targetSchedules) {
    if (dateIsInSchedule(targetDate, schedule)) {
      return true;
    }
  }

  return false;
}