import React, { ReactElement, useEffect } from 'react'
import IClassInfo from '../interfaces/IClassInfo';

interface ClassCardProps {
  classInfo: IClassInfo
}

const ProgramCard: React.FC<ClassCardProps> = ({ classInfo }) => {
  return (
    <div className="text-center p-5 w-96">
      <div className="h-52 w-52 rounded-full bg-white mx-auto my-8"></div>
      <h2 className="text-xl font-medium">Grade {classInfo.grade}</h2>
      <h1 className="text-5xl font-bold">{classInfo.name}</h1>
      <p className="my-2">{classInfo.description}</p>
    </div>
  )
}

export default ProgramCard;
