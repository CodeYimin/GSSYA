import React, { useEffect } from 'react';
import Home from "./components/HomeSection";
import Navigation from './components/Navigation';
import { navigationItems } from './util/mocks';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import ClassesSection from './components/ClassesSection';
import ScheduleSection from './components/ScheduleSection';
import QuestionSection from './components/QuestionSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="font-inter bg-yellow-50">
      <Navigation navigationItems={navigationItems}></Navigation>
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