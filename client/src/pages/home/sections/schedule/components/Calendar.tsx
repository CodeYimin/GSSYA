import React, { ReactElement, useState } from "react";
import {
  daysInMonth,
  getCurrentDateWithoutTime,
  isSameDay,
} from "../../../../../util/dateUtil";
import CalendarDate from "./CalendarDate";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface CalendarProps {
  onDateClick: (date: Date) => void;
  enabledDates: Date[];
}

function Calendar({ onDateClick, enabledDates }: CalendarProps): ReactElement {
  const todaysDate = getCurrentDateWithoutTime();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [displayedDate, setDisplayedDate] = useState<Date>(
    getCurrentDateWithoutTime()
  );

  const displayedYear = displayedDate.getFullYear();
  const displayedMonth = displayedDate.getMonth();

  function handleDateClick(date: Date): void {
    setSelectedDate(date);
    onDateClick(date);
  }

  function renderDates(): ReactElement[] {
    const dates = [];
    for (let i = 1; i <= daysInMonth(displayedYear, displayedMonth); i++) {
      const targetDate = new Date(displayedYear, displayedMonth, i);
      dates.push(
        <CalendarDate
          key={targetDate.getTime()}
          date={targetDate}
          selected={
            selectedDate !== null && isSameDay(targetDate, selectedDate)
          }
          isCurrentDate={isSameDay(targetDate, todaysDate)}
          onClick={handleDateClick}
          disabled={
            !enabledDates.some((enabledDate) =>
              isSameDay(enabledDate, targetDate)
            )
          }
        />
      );
    }
    return dates;
  }

  function changeBrowsingMonth(increment: number) {
    setDisplayedDate(new Date(displayedYear, displayedMonth + increment));
  }

  return (
    <div className="w-max text-center mx-auto">
      <div className="flex justify-between text-white text-3xl">
        <button
          className="bi-chevron-left focus:outline-none"
          onClick={() => changeBrowsingMonth(-1)}
        />
        <h1 className="">{monthNames[displayedMonth] + " " + displayedYear}</h1>
        <button
          className="bi-chevron-right focus:outline-none"
          onClick={() => changeBrowsingMonth(1)}
        />
      </div>
      <div className="grid grid-cols-7 text-black bg-white h-12 mt-5 rounded-full">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="my-auto">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 rounded-2xl">{renderDates()}</div>
    </div>
  );
}

export default Calendar;
