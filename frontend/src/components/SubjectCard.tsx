import React, { ReactElement } from 'react'
import ISubject from '../interfaces/ISubject';

function SubjectCard({ name, description, grade, imageLink }: ISubject): ReactElement {
  return (
    <div className="text-center p-5 w-96">
      <div className="w-52 h-52 my-8 mx-auto">
        {
          imageLink ?
          <img 
            src={imageLink} 
            className="w-full h-full object-contain"
          /> :
          <div className="w-full h-full rounded-full bg-white" />
        }
      </div>
      <h2 className="text-xl font-medium">{grade}</h2>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="my-2">{description}</p>
    </div>
  )
}

export default SubjectCard;
