import { WebsiteData } from "@server/src/interfaces/mongoose.gen";
import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { useRestApiData } from "./hooks/restApi";
import AboutSection from "./pages/home/sections/AboutSection";
import ContactSection from "./pages/home/sections/ContactSection";
import HomeSection from "./pages/home/sections/HomeSection";
import NavigationBar from "./pages/home/sections/NavigationBar";
import ProgramsSection from "./pages/home/sections/ProgramsSection";
import QuestionSection from "./pages/home/sections/QuestionSection";
import ScheduleSection from "./pages/home/sections/ScheduleSection";
import SubjectsSection from "./pages/home/sections/SubjectsSection";
import TeamSection from "./pages/home/sections/TeamSection";

const App = () => {
  const [language, setLanguage] = useState<string>("English");

  const websiteDatas = useRestApiData<WebsiteData[]>(
    "http://localhost:4000/websitedatas"
  );
  const websiteData = websiteDatas?.find((data) => data.language === language);

  // Website date comes from the server as a string but the types are still date, so we convert them to date type
  // Hard coding but this is the only time we use the date type
  if (websiteData?.scheduleSection.activeDates) {
    websiteData.scheduleSection.activeDates = websiteData.scheduleSection.activeDates.map(
      (activeDate) => ({
        ...activeDate,
        date: new Date(activeDate.date),
      })
    );
  }

  if (websiteData) {
    return (
      <div className="font-inter bg-yellow-50">
        <NavigationBar
          languages={
            websiteDatas ? websiteDatas.map((data) => data.language) : []
          }
          onLanguageSelect={(language) => setLanguage(language)}
          data={websiteData.navigationBar}
        />
        <HomeSection {...websiteData.homeSection} />
        <AboutSection {...websiteData.aboutSection} />
        <ProgramsSection {...websiteData.programsSection} />
        <SubjectsSection {...websiteData.subjectsSection} />
        <ScheduleSection {...websiteData.scheduleSection} />
        <QuestionSection {...websiteData.questionsSection} />
        <TeamSection {...websiteData.teamSection} />
        <ContactSection {...websiteData.contactSection} />
      </div>
    );
  } else {
    return <LoadingScreen />;
  }
};

export default App;
