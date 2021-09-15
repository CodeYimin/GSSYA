import React, { ReactElement } from 'react';
import ITeamMemberInfo from '../interfaces/ITeamMemberInfo';
import '../styles/flipCard.css';

function TeamMemberCard({ firstName, lastName, title, description, photo }: ITeamMemberInfo): ReactElement {
  return (
    <div className="flip-card-container w-64 h-64">
      <div className="flip-card-body transition duration-300">
        <div className="flip-card-front text-center">
          <img 
            src={photo || 'images/team/defaultAvatar.svg'} 
            className={`rounded-full w-40 h-40 bg-blue-500 mx-auto ${photo ? 'object-cover' : 'object-contain'}`}
          />
          <h1 className="mt-3 font-medium text-3xl">{firstName} {lastName}</h1>
          <h2 className="">{title}</h2>
        </div>
        <div className="flip-card-back bg-blue-500 text-center">
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
    
  )
}

export default TeamMemberCard;
