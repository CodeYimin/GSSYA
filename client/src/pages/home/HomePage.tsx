import React, { ReactElement, useEffect, useState } from "react";
import { useWebsiteDatas } from "src/hooks/restApi";
import AboutSection from "./sections/about/AboutSection";
import ContactSection from "./sections/contact/ContactSection";
import EventsSection from "./sections/events/EventsSection";
import HomeSection from "./sections/home/HomeSection";
import NavigationBar from "./sections/navigation/NavigationBar";
import ProgramsSection from "./sections/programs/ProgramsSection";
import QuestionsSection from "./sections/questions/QuestionsSection";
import ScheduleSection from "./sections/schedule/ScheduleSection";
import SubjectsSection from "./sections/subjects/SubjectsSection";
import TeamSection from "./sections/team/TeamSection";
import TestinomialsSection from "./sections/testinomials/TestimonialsSection";

const HomePage = (): ReactElement => {
  const [language, setLanguage] = useState<string>("English");

  const websiteDatas = useWebsiteDatas();
  const websiteData = websiteDatas?.find((data) => data.language === language);

  // Set first language on load
  useEffect(() => {
    if (websiteDatas) {
      setLanguage(websiteDatas[0].language);
    }
  }, [websiteDatas]);

  if (!websiteData) {
    return <>Loading</>;
  }

  return (
    <div className="font-rubik" style={{ backgroundColor: "white" }}>
      <NavigationBar
        languages={
          websiteDatas ? websiteDatas.map((data) => data.language) : []
        }
        onLanguageSelect={(language) => setLanguage(language)}
        data={websiteData.navigationBar}
      />
      <HomeSection {...websiteData.homeSection} />
      <AboutSection {...websiteData.aboutSection} />
      <EventsSection {...websiteData.eventsSection} />
      <ProgramsSection {...websiteData.programsSection} />
      <SubjectsSection {...websiteData.subjectsSection} />
      <ScheduleSection {...websiteData.scheduleSection} />
      <QuestionsSection {...websiteData.questionsSection} />
      <TeamSection {...websiteData.teamSection} />
      <TestinomialsSection {...websiteData.testimonialsSection} />
      <ContactSection {...websiteData.contactSection} />
    </div>
  );
};

export default HomePage;
