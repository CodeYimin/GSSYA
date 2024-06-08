"use client";

import AboutPage from "@/components/about/AboutPage";
import Footer from "@/components/footer/Footer";
import LandingPage from "@/components/landing/LandingPage";
import OfferingsPage from "@/components/offerings/OfferingsPage";
import ProgramsPage from "@/components/programs/ProgramsPage";
import QuestionsPage from "@/components/questions.tsx/QuestionsPage";
import TeamPage from "@/components/team/TeamPage";
import { useWebsiteDataStore } from "@/stores/WebsiteDataStore";

export default function Home() {
  const { websiteData } = useWebsiteDataStore();

  return (
    <div className="overflow-x-hidden">
      <LandingPage {...websiteData.landingPage} />
      <AboutPage {...websiteData.aboutPage} />
      <OfferingsPage {...websiteData.schedule} />
      <ProgramsPage {...websiteData.programs} />
      <QuestionsPage {...websiteData.questions} />
      <TeamPage {...websiteData.team} />
      <Footer {...websiteData.contact} />
    </div>
  );
}
