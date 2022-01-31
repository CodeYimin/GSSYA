import React, { ReactElement } from 'react';
import IAboutCard from '../interfaces/IAboutCard';

function AboutCard({title, imageLink}: IAboutCard): ReactElement {
  return (
    <div className="w-60 md:w-80 text-center py-10 transition-all duration-250">
      <img src={imageLink} alt="" />
      <h1 className="font-bold text-3xl pt-6">{title}</h1>
    </div>
  )
}

export default AboutCard;
