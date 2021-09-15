import React, { ReactElement } from 'react'
import IClassInfo from '../interfaces/IClassInfo';
import SVG from 'react-inlinesvg';

function ProgramCard({ name, description, grade, svg }: IClassInfo): ReactElement {
  return (
    <div className="text-center p-5 w-96">
      <div className="w-52 h-52 my-8 mx-auto">
        {
          svg ?
          <SVG 
            src={svg} 
            className="w-full h-full object-contain fill-current"
          /> :
          <div className="w-full h-full rounded-full bg-white" />
        }
      </div>
      <h2 className="text-xl font-medium">Grade {grade}</h2>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="my-2">{description}</p>
    </div>
  )
}

export default ProgramCard;
