import React, { useState } from 'react';
import Navigation from './components/sections/Navigation';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ProgramsSection from './components/sections/ProgramsSection';
import SubjectsSection from './components/sections/SubjectsSection';
import ScheduleSection from './components/sections/ScheduleSection';
import QuestionSection from './components/sections/QuestionSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';
import { useApiData } from './services/apiService';
import IAboutCard from './interfaces/IAboutCard';
import IContact from './interfaces/IContact';
import INavigationItem from './interfaces/INavigationItem';
import IProgram from './interfaces/IProgram';
import IQuestion from './interfaces/IQuestion';
import ISchedule from './interfaces/ISchedule';
import ISubject from './interfaces/ISubject';
import ITeamMember from './interfaces/ITeamMember';
import IHome from './interfaces/IHome';
import IHeaders from './interfaces/IHeaders';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [language, setLanguage] = useState<string>('English');

  const languages = useApiData<string[]>('languages');

  const aboutData = useApiData<IAboutCard[]>('about');
  const contactData = useApiData<IContact[]>('contact');
  const homeData = useApiData<IHome[]>('home');
  const navigationData = useApiData<INavigationItem[]>('navigation');
  const programsData = useApiData<IProgram[]>('programs');
  const questionsData = useApiData<IQuestion[]>('questions');
  const schedulesData = useApiData<ISchedule[]>('schedules');
  const subjectsData = useApiData<ISubject[]>('subjects');
  const teamMembersData = useApiData<ITeamMember[]>('teamMembers');

  const allHeaders = useApiData<IHeaders[]>('headers');
  const headers = allHeaders?.find((headers) => headers.language === language);

  if (languages && aboutData && contactData && homeData && navigationData && programsData && questionsData && schedulesData && subjectsData && teamMembersData && allHeaders) {
    return (
      <div className="font-inter bg-yellow-50">
        <Navigation items={navigationData?.filter((data) => data.language === language)} languages={languages ?? []} onLanguageSelect={(language) => setLanguage(language)} />
        <HomeSection content={homeData?.find((data) => data.language === language)}/>
        <AboutSection header={headers?.about} aboutCardsData={aboutData?.filter((data) => data.language === language)} />
        <ProgramsSection header={headers?.programs} programs={programsData?.filter((data) => data.language === language)} />
        <SubjectsSection header={headers?.subjects} subjects={subjectsData?.filter((data) => data.language === language)} />
        <ScheduleSection header={headers?.schedules} schedules={schedulesData} />
        <QuestionSection header={headers?.questions} questions={questionsData?.filter((data) => data.language === language)} />
        <TeamSection header={headers?.teamMembers} members={teamMembersData?.filter((data) => data.language === language)} />
        <ContactSection header={headers?.contact} contact={contactData?.filter((data) => data.language === language)[0]} />
      </div>
    );
  } else {
    return (
      <LoadingScreen />
    )
  }
};

export default App;