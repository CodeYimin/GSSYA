import React from 'react';
import Navigation from './components/sections/Navigation';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ProgramsSection from './components/sections/ProgramsSection';
import ClassesSection from './components/sections/ClassesSection';
import ScheduleSection from './components/sections/ScheduleSection';
import QuestionSection from './components/sections/QuestionSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';

const App = () => {
  return (
    <div className="font-inter bg-yellow-50">
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ProgramsSection />
      <ClassesSection />
      <ScheduleSection />
      <QuestionSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default App;