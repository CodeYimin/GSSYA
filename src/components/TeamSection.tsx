import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { teamMembers, teamQuotes } from '../util/mocks';
import QuoteCard from './QuoteCard';
import TeamMemberCard from './TeamMemberCard';

function TeamSection(): ReactElement {
  return (
    <div id="team" className="bg-blue-500 pb-5">
      <div className="bg-blue-400">
        <svg className="h-15 bg-indigo-900" width="100%" preserveAspectRatio="none" viewBox="0 0 500 20">
          <path className="text-blue-400 fill-current" d="M0,0 L500,20 L0,20 Z" />
        </svg>
        <h1 className="section-header my-8 text-white">MEET OUR TEAM!</h1>
        <svg className="h-15 bg-blue-400" width="100%" preserveAspectRatio="none" viewBox="0 0 500 20">
          <path className="text-blue-500 fill-current" d="M0,0 L500,20 L0,20 Z" />
        </svg>
      </div>
      <div className="text-white flex flex-wrap justify-center">
        {teamMembers.map((member) => <TeamMemberCard name={member.name} role={member.role}/>)}
      </div>
      {/* <h1 className="section-header">FROM OUR TEAM</h1>
      <div className="flex absolute justify-center -left-5">
        {teamQuotes.map((quote) => <QuoteCard name={quote.name} quote={quote.quote} readMoreLink={quote.readMoreLink}/>)}
      </div> */}
    </div>
  )
}

export default TeamSection
