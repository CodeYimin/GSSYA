import React, { ReactElement } from 'react';
import IProgram from '../interfaces/IProgram';

function ProgramCard({ grade, name, description, buttonName, buttonLink }: IProgram): ReactElement {
  return (
    <div className="flex flex-col items-center text-center w-80 md:w-96 p-10 border-white border-8 rounded-3xl my-10">
      <h2 className="text-l md:text-xl font-medium">{grade}</h2>
      <h1 className="text-3xl md:text-5xl font-bold">{name}</h1>
      <p className="mt-2 mb-4">{description}</p>
      <a 
        href={buttonLink} 
        target="_blank" 
        rel="noreferrer"
        className="btn justify-self-end mt-auto bg-white text-blue-400"
      >
        {buttonName}
        <i className="bi bi-box-arrow-up-right ml-2"/>
      </a>
    </div>
  )
}

export default ProgramCard;
