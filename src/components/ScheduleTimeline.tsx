import React from 'react';

interface ScheduleTimelineProps {
  timeStart?: Date,
  timeEnd?: Date,
}

const ScheduleTimeline: React.FC<ScheduleTimelineProps> = ({}) => {
  return (
    <div>
      <div className="bg-white h-12 mx-auto rounded-full">
        <div className="bg-red-500 w-1/4 h-full ml-20">
          <h1 className="text-xl">CLASS</h1>
        </div>
      </div>
    </div>
  )
}

export default ScheduleTimeline;