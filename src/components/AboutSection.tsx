import React, { useEffect, useRef, useState } from 'react';
import handsHelpingSvg from '../images/hands-helping.svg'
import AboutCard from './AboutCard';

function AboutSection() {
  const heading = useRef<HTMLHeadingElement>(null);
  const cardsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (heading.current && cardsContainer.current) {
        const cards = [...cardsContainer.current.children as HTMLCollectionOf<HTMLElement>];
        const headingBoundingRect = heading.current.getBoundingClientRect();
        const headingHeight = (headingBoundingRect.y + headingBoundingRect.bottom) / 2

        const closestCard = cards.reduce((prev, curr) => {
          const prevDistance = headingHeight - (prev.getBoundingClientRect().y + prev.getBoundingClientRect().bottom) / 2;
          const currDistance = headingHeight - (curr.getBoundingClientRect().y + curr.getBoundingClientRect().bottom) / 2;
          return Math.abs(currDistance) < Math.abs(prevDistance) ? curr : prev;
        })

        cards.forEach((card) => {
          if (card === closestCard) {
            card.style.scale = '1.10';
            card.style.marginLeft = '4rem';
            card.classList.remove('text-red-400');
            card.classList.add('text-white');
          } else {
            card.style.scale = '1';
            card.style.marginLeft = '6rem';
            card.classList.remove('text-white');
            card.classList.add('text-red-400');
          }
        })
      }
    })
  }, [])

  return (
    <div id="about">
      <svg height="10vh" width="100%" preserveAspectRatio="none" viewBox="0 0 500 20">
        <path className="text-red-500 fill-current" d="M0,0 C200,20 300,20 500,0 L500,150 L0,20 Z" />
      </svg>
      <div className="bg-red-500 text-white fill-current py-16">
        <div className="flex">
          <div className="w-50v py-10 text-center font-extrabold text-5xl">
            <h1 ref={heading} className="sticky top-1/2 w-max float-right mr-16" >WHAT ARE WE?</h1>
          </div>
          <div ref={cardsContainer} className="flex flex-col w-max">
            <AboutCard title="100% FREE Canadian Registered Non Profit" svg={handsHelpingSvg} />
            <AboutCard title="Students Helping Students" svg={handsHelpingSvg} />
            <AboutCard title="Promoting Collaboration Among Youth" svg={handsHelpingSvg} />
            <AboutCard title="Accepting" svg={handsHelpingSvg} />
            <AboutCard title="Everyone is welcome!" svg={handsHelpingSvg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
