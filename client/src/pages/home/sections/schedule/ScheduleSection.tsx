import { WebsiteDataScheduleSection } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement, useRef } from "react";
import { isSameDay } from "../../../../util/dateUtil";
import Calendar from "./components/Calendar";

function ScheduleSection({
  title,
  activeDates,
}: WebsiteDataScheduleSection): ReactElement {
  const timeElement = useRef<HTMLParagraphElement>(null);
  const selectedDateElement = useRef<HTMLParagraphElement>(null);

  function handleDateClick(clickedDate: Date): void {
    const clickedActiveDate = activeDates.find((activeDate) =>
      isSameDay(activeDate.date, clickedDate)
    );

    if (!clickedActiveDate) {
      return;
    }

    timeElement.current &&
      (timeElement.current.innerHTML = clickedActiveDate.time || "No time set");
    selectedDateElement.current &&
      (selectedDateElement.current.innerHTML =
        clickedActiveDate.date.toLocaleDateString());
  }

  return (
    <div id="schedule" className="">
      <svg
        className="h-15 bg-blue-900"
        width="100%"
        preserveAspectRatio="none"
        viewBox="0 0 500 20"
      >
        <path
          className="text-black fill-current"
          d="M0,20 C180,-6 320,-6 500,20 L500,150 L0,20 Z"
        />
      </svg>
      <div className="bg-black pb-16">
        <h1 className="section-header text-white">{title}</h1>
        <div className="w-min mx-auto mt-12">
          <Calendar
            onDateClick={handleDateClick}
            enabledDates={activeDates.map((activeDate) => activeDate.date)}
          />
          <div className="bg-white p-3 mt-5 rounded-2xl w-full">
            <p
              ref={selectedDateElement}
              className="text-center text-gray-500"
            />
            <p
              ref={timeElement}
              className="text-l md:text-2xl text-black text-center"
            >
              Select a date to view class time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleSection;
