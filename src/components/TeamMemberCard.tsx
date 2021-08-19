import React, { ReactElement } from 'react';
import ITeamMemberCard from '../interfaces/ITeamMemberCard';
import '../styles/flipCard.css';

const TeamMemberCard: React.FC<ITeamMemberCard> = ({ name, role, avatarUrl }) => {
  return (
    <div className="flip-card-container w-64 h-64">
      <div className="flip-card-body transition duration-300">
        <div className="flip-card-front text-center">
          <div className="rounded-full w-40 h-40 bg-white mx-auto"/>
          <h1 className="mt-3 font-medium text-3xl">{name}</h1>
          <h2 className="">{role}</h2>
        </div>
        <div className="flip-card-back bg-blue-500 text-center">
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi saepe, asperiores ullam veritatis a, accusamus ducimus quod unde voluptatem voluptatibus totam ipsam explicabo enim, nobis fuga consequuntur! Velit, eos?</p>
        </div>
        
      </div>
    </div>
    
  )
}

export default TeamMemberCard;
