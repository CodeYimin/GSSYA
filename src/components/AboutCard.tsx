import React, { ReactElement } from 'react';
import SVG from 'react-inlinesvg';

interface CardProps {
  svg: string,
  title: string,
}

function AboutCard(props: CardProps): ReactElement {
  return (
    <div className="w-80 text-center py-10 transition-all duration-250">
      <SVG src={props.svg} />
      <h1 className="font-bold text-3xl pt-6">{props.title}</h1>
    </div>
  )
}

export default AboutCard;
