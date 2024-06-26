import { AboutPageProps } from "./AboutPage";
import { ContactPageProps } from "./Contact";
import { DonatePageProps } from "./Donate";
import { LandingPageProps } from "./LandingPage";
import { NavbarProps } from "./Navbar";
import { ProgramsPageProps } from "./ProgramsPage";
import { QuestionsPageProps } from "./Questions";
import { SchedulePageProps } from "./Schedule";
import { TestimonialsPageProps } from "./Testimonials";
import { TeamPageProps } from "./Volunteers";

export interface WebsiteData {
  navbar: NavbarProps;
  language: Language;
  landingPage: LandingPageProps;
  aboutPage: AboutPageProps;
  schedule: SchedulePageProps;
  programs: ProgramsPageProps;
  questions: QuestionsPageProps;
  testimonials: TestimonialsPageProps;
  team: TeamPageProps;
  donate: DonatePageProps;
  contact: ContactPageProps;
}

export type Language = "English" | "Français" | "简体" | "繁體";
