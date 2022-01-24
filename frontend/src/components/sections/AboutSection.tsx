import React, { useEffect, useRef } from 'react';
import IAboutCard from '../../interfaces/IAboutCard';
import AboutCard from '../AboutCard';

export interface AboutSectionProps {
  header?: string;
  aboutCardsData?: IAboutCard[] | null;
}

function AboutSection({ aboutCardsData, header }: AboutSectionProps) {
  const heading = useRef<HTMLHeadingElement>(null);
  const cardsContainer = useRef<HTMLDivElement>(null);

  // Add special effects to the card closest to header
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (!heading.current || !cardsContainer.current) {
        return;
      }
      
      const cards = [...cardsContainer.current.children] as HTMLElement[];
      const headingBoundingRect = heading.current.getBoundingClientRect();

      // Center of the header's document height
      const headingDocHeight = (headingBoundingRect.y + headingBoundingRect.bottom) / 2;

      const closestCard = cards.reduce((prev, curr) => {
        const prevDistance = headingDocHeight - (prev.getBoundingClientRect().y + prev.getBoundingClientRect().bottom) / 2;
        const currDistance = headingDocHeight - (curr.getBoundingClientRect().y + curr.getBoundingClientRect().bottom) / 2;
        return Math.abs(currDistance) < Math.abs(prevDistance) ? curr : prev;
      });

      // Add/Remove special effects
      cards.forEach((card) => {
        if (card === closestCard) {
          card.style.scale = '1.10';
          card.style.marginLeft = '4rem';
          card.style.opacity = '100%'
        } else {
          card.style.scale = '1';
          card.style.marginLeft = '6rem';
          card.style.opacity = '30%'
        }
      })
    })
  }, [])

  return (
    <div id="about">
      <svg height="10vh" width="100%" preserveAspectRatio="none" viewBox="0 0 500 20">
        <path className="text-red-500 fill-current" d="M0,0 C200,20 300,20 500,0 L500,150 L0,20 Z" />
      </svg>
      <div className="bg-red-500 text-white fill-current py-16">
        <div className="md:flex">
          <div className=" md:visible md:w-50v py-10 text-center font-extrabold text-5xl">
            <h1 ref={heading} className="md:sticky top-1/2 w-max m-auto md:float-right md:mr-16" >{header}</h1>
          </div>
          <div ref={cardsContainer} className="flex flex-col w-max">
            {aboutCardsData?.map((card) => <AboutCard key={card.title} {...card} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
