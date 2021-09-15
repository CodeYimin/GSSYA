import React, { ReactElement } from 'react';
import SVG from 'react-inlinesvg';
import IAboutCard from '../interfaces/IAboutCard';

function AboutCard({title, img}: IAboutCard): ReactElement {
  return (
    <div className="w-80 text-center py-10 transition-all duration-250">
      <SVG src={img} />
      <h1 className="font-bold text-3xl pt-6">{title}</h1>
    </div>
  )
}

export default AboutCard;
