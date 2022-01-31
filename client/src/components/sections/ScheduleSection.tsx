import React, { ReactElement, useRef } from 'react'
import ISchedule from '../../interfaces/ISchedule'
import { dateIsInSchedule } from '../../util/dateUtil'
import Calendar from '../Calendar'

export interface ScheduleSectionProps {
  header?: string
  schedules: ISchedule[] | null
}

function ScheduleSection({ schedules, header }: ScheduleSectionProps): ReactElement {
  const timeElement = useRef<HTMLParagraphElement>(null)
  const selectedDateElement = useRef<HTMLParagraphElement>(null)

  function handleDateClick(date: Date): void {
    if (!schedules) {
      return
    }

    const targetSchedules = schedules.filter(
      schedule => schedule.year === date.getFullYear() && schedule.month - 1 === date.getMonth(),
    )
    const targetSchedule = targetSchedules.find(schedule => dateIsInSchedule(date, schedule))
    const time = targetSchedule?.time

    timeElement.current && (timeElement.current.innerHTML = time || 'No time set')
    selectedDateElement.current && (selectedDateElement.current.innerHTML = date.toLocaleDateString())
  }

  return (
    <div id="schedule" className="">
      <svg className="h-15 bg-blue-900" width="100%" preserveAspectRatio="none" viewBox="0 0 500 20">
        <path className="text-black fill-current" d="M0,20 C180,-6 320,-6 500,20 L500,150 L0,20 Z" />
      </svg>
      <div className="bg-black pb-16">
        <h1 className="section-header text-white">{header}</h1>
        <div className="w-max mx-auto mt-12">
          <Calendar onDateClick={handleDateClick} schedules={schedules} />
          <div className="bg-white py-3 mt-5 rounded-full">
            <p ref={selectedDateElement} className="text-center text-gray-500" />
            <p ref={timeElement} className="text-l md:text-2xl text-black text-center">
              Select a date to view class time
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleSection
