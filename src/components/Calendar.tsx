import React, { ReactElement } from 'react'
import { useState } from 'react';
import IClassInfo from '../interfaces/IClassInfo';
import IMonthSchedule from '../interfaces/IMonthSchedule';
import CalendarDate from './CalendarDate';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function getCurrentDateWithoutTime(): Date {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function dateInSchedules(targetDate: Date, schedules: IMonthSchedule[]): boolean {
  const year = targetDate.getFullYear();
  const correctedMonth = targetDate.getMonth() + 1;
  const date = targetDate.getDate();
  const day = targetDate.getDay();

  const targetSchedule = schedules.filter((schedule) => (
    schedule.year === year && schedule.month === correctedMonth
  ))[0];

  if (!targetSchedule) {
    return false;
  }

  if (targetSchedule.excludeDates?.includes(date)) {
    return false;
  }

  if (targetSchedule.days?.includes(day) || targetSchedule.dates?.includes(date)) {
    return true
  }
}

interface CalendarProps {
  onDateClick: (date: Date) => void
  schedules: IMonthSchedule[],
}

const Calendar: React.FC<CalendarProps> = ({onDateClick, schedules}) => {
  const currentDate = getCurrentDateWithoutTime();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [browsingDate, setBrowsingDate] = useState<Date>(getCurrentDateWithoutTime());

  const browsingYear = browsingDate.getFullYear();
  const browsingMonth = browsingDate.getMonth();

  function handleDateClick(date: Date): void {
    setSelectedDate(date);
    onDateClick(date);
  }

  function renderDates(): ReactElement[] {
    const dates = [];
    for (let i = 1; i <= daysInMonth(browsingYear, browsingMonth); i++) {
      const targetDate = new Date(browsingYear, browsingMonth, i);
      dates.push(
        <CalendarDate 
          key={targetDate.getTime()}
          date={targetDate} 
          selected={targetDate.getTime() === selectedDate?.getTime()}
          isCurrentDate={targetDate.getTime() === currentDate.getTime()}
          onClick={handleDateClick}
          disabled={!dateInSchedules(targetDate, schedules)}
        />
      );
    }
    return dates;
  }

  function changeBrowsingMonth(increment: number) {
    setBrowsingDate(new Date(browsingYear, browsingMonth + increment));
  }

  return (
    <div className="w-max text-center">
      <div className="flex justify-between text-white text-3xl">
        <button 
          className="bi-chevron-left focus:outline-none"
          onClick={() => changeBrowsingMonth(-1)}
        />
        <h1 className="">{monthNames[browsingMonth] + ' ' + browsingYear}</h1>
        <button 
          className="bi-chevron-right focus:outline-none" 
          onClick={() => changeBrowsingMonth(1)}
        />
      </div>
      <div className="grid grid-cols-7 text-black bg-white h-12 mt-5 rounded-full">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => <div key={index} className="my-auto">{day}</div>)}
      </div>
      <div className="grid grid-cols-7 rounded-2xl">
        {renderDates()}
      </div>
    </div>
  )
}

export default Calendar;
