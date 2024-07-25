"use client";

import AboutPage from "@/components/about/AboutPage";
import DonatePage from "@/components/donate/DonatePage";
import Footer from "@/components/footer/Footer";
import LandingPage from "@/components/landing/LandingPage";
import ProgramsPage from "@/components/programs/ProgramsPage";
import QuestionsPage from "@/components/questions.tsx/QuestionsPage";
import TeamPage from "@/components/team/TeamPage";
import TestimonialsPage from "@/components/testimonials/TestimonialsPage";
import { API_URL } from "@/data/consts";
import { useWebsiteDataStore } from "@/stores/WebsiteDataStore";
import { Testimonial } from "@/types/Testimonials";
import { IVolunteerCard } from "@/types/Volunteers";
import { useEffect, useState } from "react";

export default function Home() {
  const { websiteData } = useWebsiteDataStore();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [volunteers, setVolunteers] = useState<IVolunteerCard[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}/testimonials`);
      const data = await response.json();
      setTestimonials(data);
    })();

    (async () => {
      const response = await fetch(`${API_URL}/volunteers`);
      const data = await response.json();
      setVolunteers(data);
    })();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <LandingPage {...websiteData.landingPage} />
      <AboutPage {...websiteData.aboutPage} />
      {/* <OfferingsPage {...websiteData.schedule} /> */}
      <ProgramsPage {...websiteData.programs} />
      <TestimonialsPage
        {...{ ...websiteData.testimonials, testimonials: testimonials }}
      />
      <TeamPage {...{ ...websiteData.team, volunteers: volunteers }} />
      <QuestionsPage {...websiteData.questions} />
      <DonatePage {...websiteData.donate} />
      <Footer {...websiteData.contact} />
    </div>
  );
}
