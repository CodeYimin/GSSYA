import React, { ReactElement } from 'react';

interface CalendarDateProps {
  date: Date,
  onClick: (date: Date) => void,
  disabled?: boolean,
  selected?: boolean,
  isCurrentDate?: boolean,
}

function CalendarDate({ date, onClick, disabled, selected, isCurrentDate}: CalendarDateProps): ReactElement {
  return (
    <div className="p-2" style={date.getDate() === 1 ? {"gridColumn": date.getDay() + 1} : {}}>
      <button 
        className={
          "w-12 h-12 rounded-xl text-xl text-center outline-none focus:outline-none transition-all" + 
          (isCurrentDate && !selected ? " bg-gray-900" : "") + 
          (selected ? " bg-red-500" : "") + 
          (disabled ? " text-gray-500 cursor-default" : " text-white")
        }
        onClick={() => !disabled && onClick(date)}
      >
        {date.getDate()}
      </button>
    </div>
    
  )
}

export default CalendarDate;
