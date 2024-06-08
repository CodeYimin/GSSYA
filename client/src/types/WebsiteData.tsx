import { AboutPageProps } from "./AboutPage";
import { ContactPageProps } from "./Contact";
import { LandingPageProps } from "./LandingPage";
import { NavbarProps } from "./Navbar";
import { ProgramsPageProps } from "./ProgramsPage";
import { QuestionsPageProps } from "./Questions";
import { SchedulePageProps } from "./Schedule";
import { TeamPageProps } from "./Volunteers";

export interface WebsiteData {
  navbar: NavbarProps;
  language: Language;
  landingPage: LandingPageProps;
  aboutPage: AboutPageProps;
  schedule: SchedulePageProps;
  programs: ProgramsPageProps;
  questions: QuestionsPageProps;
  team: TeamPageProps;
  contact: ContactPageProps;
}

export type Language = "English" | "Français" | "简体" | "繁體";
