import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { classInfos } from '../util/mocks';
import ClassCard from './ClassCard';

function ClassesSection(): ReactElement {
  const [classesExpanded, setClassesExpanded] = useState<boolean>(false);
  const [originalClassDivHeight, setOriginalClassDivHeight] = useState<string>('');
  const cardsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOriginalClassDivHeight(`${cardsContainer.current!.clientHeight}px`);
  }, []);

  useEffect(() => {
    const cards = [...cardsContainer.current!.children];
    cardsContainer.current!.style.height = classesExpanded ? originalClassDivHeight : `${cards[0].clientHeight}px`;
  }, [classesExpanded]);

  return (
    <div id="classes" className="text-white fill-current">
      <div className="relative h-20">
        <svg className="h-20 bg-blue-500 absolute" width="100%" preserveAspectRatio="none" viewBox="0 0 500 20">
            <path className="text-blue-600 fill-current" d="M0,0 C250,30 300,-20 500,12 L500,150 L0,150 Z" />
        </svg>
          <svg className="h-20 absolute z-10" width="100%" preserveAspectRatio="none" viewBox="0 0 500 20">
          <path className="text-blue-900 fill-current" d="M0,12 C250,-20 300,30 500,0 L500,150 L0,150 Z" />
        </svg>
      </div>
      {/* <svg className="h-20 bg-blue-400" width="100%" preserveAspectRatio="none" viewBox="0 0 500 20">
        <path className="text-blue-900 fill-current" d="M0,12 C250,-20 300,30 500,0 L500,150 L0,150 Z" />
      </svg> */}
      <div className="bg-blue-900 pb-12">
        <h1 className="section-header">CLASSES</h1>
        <div 
          ref={cardsContainer} 
          className="flex flex-wrap justify-evenly overflow-hidden transition-all duration-500"
        >
          {classInfos.map((classInfo) => <ClassCard classInfo={classInfo}/>)}
        </div>
        <div className="w-max mx-auto text-center mt-5 leading-3">
          <p>{classesExpanded ? 'Less' : 'More'}</p>
          <i 
            onClick={() => setClassesExpanded(!classesExpanded)} 
            className={`bi bi-chevron-${classesExpanded ? 'up' : 'down'} text-6xl hover:cursor-pointer`}
          />
        </div>
      </div>
    </div>
  )
}

export default ClassesSection
