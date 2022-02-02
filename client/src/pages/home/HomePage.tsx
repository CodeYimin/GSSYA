import { WebsiteData } from "@server/src/interfaces/mongoose.gen";
import { typeSyncObjectWithSchema } from "@src/util/schemaUtil";
import { Schema } from "mongoose";
import React, { ReactElement, useEffect, useState } from "react";
import { useRestApiData } from "src/hooks/restApi";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HomeSection from "./sections/HomeSection";
import NavigationBar from "./sections/NavigationBar";
import ProgramsSection from "./sections/ProgramsSection";
import QuestionSection from "./sections/QuestionSection";
import ScheduleSection from "./sections/ScheduleSection";
import SubjectsSection from "./sections/SubjectsSection";
import TeamSection from "./sections/TeamSection";

const HomePage = (): ReactElement => {
  const [language, setLanguage] = useState<string>("English");

  const mongooseSchema = useRestApiData<Schema>(
    "http://localhost:4000/mongooseSchema"
  );
  const websiteDatas = useRestApiData<WebsiteData[]>(
    "http://localhost:4000/websitedatas"
  );
  const [websiteData, setWebsiteData] = useState<WebsiteData | null>(null);

  useEffect(() => {
    if (websiteDatas && mongooseSchema) {
      setWebsiteData(typeSyncObjectWithSchema(websiteDatas[0], mongooseSchema));
    }
  }, [websiteDatas]);

  if (!websiteData) {
    return <></>;
  }

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
};

export default HomePage;
