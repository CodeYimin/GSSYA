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

export function isSameDay(dateA: Date, dateB: Date) {
  return (
    new Date(dateA).setHours(0, 0, 0, 0) ===
    new Date(dateB).setHours(0, 0, 0, 0)
  );
}
