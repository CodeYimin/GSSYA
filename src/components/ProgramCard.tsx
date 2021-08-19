import React, { ReactElement } from 'react';

interface ProgramCardProps {
  grade: string,
  name: string,
  description: string,
  buttonName: string,
  buttonLink: string,
}

const ProgramCard: React.FC<ProgramCardProps> = ({ grade, name, description, buttonName, buttonLink }) => {
  return (
    <div className="flex flex-col items-center text-center w-min p-10 border-white border-8 rounded-3xl my-10">
      <h2 className="text-xl font-medium">Grade {grade}</h2>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="mt-2 mb-4">{description}</p>
      <a 
        href={buttonLink} 
        target="_blank" 
        className="btn justify-self-end mt-auto bg-white text-blue-400"
      >
        {buttonName}
        <i className="bi bi-box-arrow-up-right ml-2"/>
      </a>
    </div>
  )
}

export default ProgramCard;
