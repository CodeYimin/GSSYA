import React, { ReactElement } from 'react';
import { IProgramCard } from '../../interfaces/IProgramCard';
import { useApiData } from '../../services/apiService';
import ProgramCard from '../ProgramCard';

function ProgramsSection(): ReactElement {
  const programs = useApiData<IProgramCard[]>('programs');
  
  return (
    <div id="programs" className="text-white fill-current">
      <div className="relative h-20">
        <svg className="h-20 bg-red-500 absolute" width="100%" preserveAspectRatio="none" viewBox="0 0 500 20">
          <path className="text-blue-400 fill-current" d="M0,0 C250,30 300,-20 500,12 L500,150 L0,150 Z" />
        </svg>
        <svg className="h-20 absolute z-10" width="100%" preserveAspectRatio="none" viewBox="0 0 500 20">
          <path className="text-blue-500 fill-current" d="M0,12 C250,-20 300,30 500,0 L500,150 L0,150 Z" />
        </svg>
      </div>
      <div className="bg-blue-500 pb-16">
        <h1 className="section-header">PROGRAMS</h1>
        <div className="flex justify-evenly flex-wrap">
          {programs?.map((program) => <ProgramCard key={program.name} {...program} />)}
        </div>
      </div>
    </div>
  )
}

export default ProgramsSection
