"use client";

import Footer from "@/components/footer/Footer";
import LandingPage from "@/components/landing/LandingPage";
import OfferingsPage from "@/components/offerings/OfferingsPage";
import ProgramsPage from "@/components/programs/ProgramsPage";
import TeamPage from "@/components/team/TeamPage";
import { AboutPageProps } from "@/types/AboutPage";
import { LandingPageProps } from "@/types/LandingPage";
import { ProgramsPageProps } from "@/types/ProgramsPage";
import { SchedulePageProps } from "@/types/Schedule";
import { TeamPageProps } from "@/types/Volunteers";

const landingPageProps: LandingPageProps = {
  images: [
    "/images/programs/talent_show/11.jpg",
    "/images/programs/exchange/6.jpg",
    "/images/programs/exchange/7.jpg",
    "/images/programs/exchange/8.jpg",
    "/images/programs/art4earth/1.jpg",
    "/images/programs/art4earth/5.jpg",
    "/images/programs/exchange/2.jpg",
    "/images/programs/exchange/3.jpg",
    "/images/programs/exchange/4.jpg",
    "/images/programs/art4earth/6.jpg",
    "/images/programs/art4earth/7.jpg",
    "/images/programs/exchange/5.jpg",
    "/images/programs/volunteer_day/4.jpg",
    "/images/programs/art4earth/3.jpg",
  ],
  titles: [
    "100% FREE",
    "MULTICULTURAL",
    "REGISTERED CANADIAN CHARITY",
    "YOUTH LED",
    "VOLUNTEER DRIVEN",
    "COMMUNITY PARTNERSHIPS",
    "FOUNDED IN 2019",
    "100% NON PROFIT",
  ],
};

const aboutPageProps: AboutPageProps = {
  cards: [
    {
      image: "/images/about4.png",
      text: "Youth aged 15 to 24 are the most likely to experience MENTAL ILLNESS",
    },
    {
      image: "/images/about1.webp",
      text: "1 in 4 Youth feel LONELY",
    },
    {
      image: "/images/about2.png",
      text: "1 in 2 Ontario high school students feel STRESSED",
    },
    {
      image: "/images/about5.png",
      text: "1 in 3 Youth feel their parents' expectations are TOO HIGH",
    },
    {
      image: "/images/about3.webp",
      text: '6 in 10 Teen Girls feel PRESSURED to conform to unrealistic expectations of being a "girl"',
    },
  ],
};

const programsPageProps: ProgramsPageProps = {
  programs: [
    {
      title: "Art Exhibition",
      description:
        "Art4Earth is a series of successful art exhibition events that showcase the work of talented local artists.",
      buttons: [
        {
          label: "Learn more",
          link: "https://sites.google.com/view/vibrant-living-biodiversity/virtual-art-gallery",
        },
        {
          label: "Register",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSdP4VaKrFvBlLDNGRJgemTEbRJo-q_ccD4cdX8mRNfegMX6xg/viewform",
        },
      ],
      subheading1: "Artistic Expression",
      subheading2: "Art4Earth",
      polaroids: [
        {
          image: "/images/programs/art4earth/4.jpg",
          text: "",
        },
        {
          image: "/images/programs/art4earth/5.jpg",
          text: "",
        },
        {
          image: "/images/programs/art4earth/1.jpg",
          text: "Art4Earth Feb 2024",
        },
      ],
    },
    {
      title: "Clubs",
      description:
        "Celebrate diversity at our art, dance, chess, debate, and opera clubs. Join us for inclusive events, gain volunteer hours, and share cultural experiences.",
      buttons: [
        {
          label: "Learn more",
          link: "https://sites.google.com/view/gssya/clubs/chess-club",
        },
        {
          label: "Register",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSdP4VaKrFvBlLDNGRJgemTEbRJo-q_ccD4cdX8mRNfegMX6xg/viewform",
        },
      ],
      subheading1: "Social Support",
      subheading2: "",
      polaroids: [
        {
          image: "/images/programs/clubs/3.jpg",
          text: "",
        },
        {
          image: "/images/programs/clubs/2.jpg",
          text: "",
        },
        {
          image: "/images/programs/clubs/1.jpg",
          text: "Chess Club",
        },
      ],
    },
    {
      title: "Mental Health",
      description:
        "Our Mental Health Service offers compassionate and comprehensive care to individuals seeking support for their emotional well-being, fostering healing and resilience.",
      buttons: [
        {
          label: "Learn more",
          link: "https://sites.google.com/view/mentalhealthgssya/home",
        },
        {
          label: "Register",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSdP4VaKrFvBlLDNGRJgemTEbRJo-q_ccD4cdX8mRNfegMX6xg/viewform",
        },
      ],
      subheading1: "Mental Health Support",
      subheading2: "Charming Soul",
      polaroids: [
        {
          image: "/images/programs/mental/3.jpg",
          text: "",
        },
        {
          image: "/images/programs/mental/2.jpg",
          text: "",
        },
        {
          image: "/images/programs/mental/1.png",
          text: "Mental Health Day 2024",
        },
      ],
    },
    {
      title: "Multiculturalism",
      description:
        "The Multicultural Events are vibrant celebrations of diverse cultures, uniting communities through music, food, art, and traditions from around the world.",
      buttons: [
        {
          label: "Learn more",
          link: "https://sites.google.com/view/confident-youth-program/home",
        },
        {
          label: "Register",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSdP4VaKrFvBlLDNGRJgemTEbRJo-q_ccD4cdX8mRNfegMX6xg/viewform",
        },
      ],
      subheading1: "Multicultural support",
      subheading2: "Confident Youth",
      polaroids: [
        {
          image: "/images/programs/talent_show/11.jpg",
          text: "",
        },
        {
          image: "/images/programs/talent_show/4.jpg",
          text: "",
        },
        {
          image: "/images/programs/talent_show/5.jpg",
          text: "Youth Talent Show 2024",
        },
      ],
    },
    {
      title: "Tutoring",
      description:
        "Tutoring Camp provides an engaging and educational summer experience where students receive focused academic instruction in a fun and supportive environment.",
      buttons: [
        {
          label: "Learn more",
          link: "https://sites.google.com/view/gssya-tutoring-camp/home",
        },
        {
          label: "Register Student",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSeGZ85GMYRqHe3Rer-sG8xHMneEAhhHDfRMsmbAiTwceHEz7g/viewform",
        },
        {
          label: "Register Tutor",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfnOYgMnBMiraAaAon810HWXBJS3N3Er3WJV_Ino9T7XUdiCw/viewform",
        },
      ],
      subheading1: "Academic Support",
      subheading2: "",
      polaroids: [
        {
          image: "/images/programs/tutoring/2.png",
          text: "",
        },
        {
          image: "/images/programs/tutoring/4.png",
          text: "",
        },
        {
          image: "/images/programs/tutoring/3.png",
          text: "French Tutoring",
        },
      ],
    },
    {
      title: "Youth Exchange",
      description:
        "The Youth Exchange Program offers young people the opportunity to explore new cultures, build international friendships, and broaden their perspectives of the world through immersive cross-cultural experiences.",
      buttons: [
        {
          label: "Learn more",
          link: "https://sites.google.com/view/confident-youth-program/events/youth-exchange-program",
        },
        {
          label: "Register",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSdP4VaKrFvBlLDNGRJgemTEbRJo-q_ccD4cdX8mRNfegMX6xg/viewform",
        },
      ],
      subheading1: "Life-Changing Experience",
      subheading2: "",
      polaroids: [
        {
          image: "/images/programs/exchange/6.jpg",
          text: "",
        },
        {
          image: "/images/programs/exchange/8.jpg",
          text: "",
        },
        {
          image: "/images/programs/exchange/7.jpg",
          text: "Youth Exchange 2024",
        },
      ],
    },
  ],
};

const offeringsPageProps: SchedulePageProps = {
  offerings: [
    {
      title: "Tutoring Summer Camp 2024",
      description:
        "Tutoring Camp provides an engaging and educational summer experience where students receive focused academic instruction in a fun and supportive environment. The schedule is Monday to Friday from July 1st to July 12th, 9:00am to 11:00am. Grades are from 1-9. We offer tutoring in chess, math, english, computing, and science.",
      category: "Tutoring",
      type: "Sessional",
      startTime: new Date("July 1 2024"),
      endTime: new Date("July 12 2024"),
      buttons: [
        {
          label: "Register Student",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSeGZ85GMYRqHe3Rer-sG8xHMneEAhhHDfRMsmbAiTwceHEz7g/viewform",
        },
        {
          label: "Register Tutor",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfnOYgMnBMiraAaAon810HWXBJS3N3Er3WJV_Ino9T7XUdiCw/viewform",
        },
      ],
      images: [
        "/images/offerings/tutoring/1.jpg",
        "/images/offerings/tutoring/2.png",
        "/images/offerings/tutoring/3.png",
        "/images/offerings/tutoring/4.png",
      ],
      location: "Virtual via Zoom",
      thumbnail: "/images/offerings/tutoring/3.png",
    },
    {
      title: "Canadian Multiculturalism Day",
      description:
        "Celebrate with GSSYA - Global Share Support Youth Association at our annual ART4EARTH event where we highlight different cultures through the arts! We have partnered with multiple communities to participate in an afternoon of performances. Join us for a day of fun, food, and festivities!",
      category: "Multiculturalism",
      type: "One time",
      startTime: new Date("June 27 2024"),
      endTime: new Date("June 27 2024"),
      buttons: [],
      images: [
        "/images/offerings/multicultural/1.jpeg",
        "/images/offerings/multicultural/2.jpeg",
        "/images/offerings/multicultural/s1.png",
        "/images/offerings/multicultural/s2.png",
        "/images/offerings/multicultural/mayor.jpg",
      ],
      location:
        "York Woods Library Theatre | 1785 Finch Ave W, North York, ON M3N 1M6",
      thumbnail: "/images/offerings/multicultural/thumbnail.jpg",
    },
  ],
};

const teamPageProps: TeamPageProps = {
  volunteers: [
    {
      firstName: "Cera",
      lastName: "Wang",
      image:
        "https://drive.google.com/thumbnail?id=1f2NA2HelBQSUHSODfxaoukfM4h7iLBU3",
      role: "Tutor Leader",
      description:
        "Hi, I’m Cera Wang and I’m a grade 10 student. I enjoy drawing, designing, writing, and various forms of art. I have had many experiences tutoring students as well as writing and designing, such as being the web designer for this website. I look forward to meeting you guys and having an incrARTable time!\n",
    },
    {
      firstName: "Lily",
      lastName: "Dong",
      image: "",
      role: "Exec Leader",
      description:
        "Hi!! I'm a grade 10 student. I enjoy playing the piano, reading, and solving puzzles. I'm in charge of the overall leadership of GSSYA.",
    },
    {
      firstName: "Yimin",
      lastName: "Sun",
      image: "/images/team/1.jpg",
      role: "Head of Web Development",
      description:
        "Hello!!! I'm a Year 2 Student (2024) from the University of Toronto, but I've been with GSSYA since Grade 10 (2021). I designed, programmed, and created this website from scratch. I hope you like it :)",
    },
    {
      firstName: "Sophie",
      lastName: "Kong",
      image:
        "https://drive.google.com/thumbnail?id=1lMu-sck9-zxyH9jPRPV35ZQl9upQp0yn",
      role: "Tutor",
      description:
        "Hi, I’m Sophie and I’m a grade 9 student, I’ve been drawing for all my life and got into a high school for visual art. I spend most of my free time writing and reading. (I love books :)) I’m super excited to meet more kids and teach them art, especially since I’ve already had an amazing experience from the short time I’ve been teaching here. Excited to meet you all!",
    },
    {
      firstName: "Tyler",
      lastName: "Guo",
      image:
        "https://drive.google.com/thumbnail?id=1UzBZ5Wt-AxX-eOXkgOTSwBBEXhpPJg3p",
      role: "Web Maintenance",
      description:
        "Hi, I'm Tyler Guo. I'm a grade 12 student. I do my best to keep this website updated. I also teach math and coding during the summer!",
    },
    {
      firstName: "Angela",
      lastName: "Duan",
      image: "",
      role: "Tutor",
      description:
        "Angela is a grade 9 student. She is featured in the InCITE 2019 publication, and won many awards both in school and out of school. In her free time, she likes to draw and write, and she is working on her own novel. She enjoys working with children very much, and is eager to apply her knowledge of teaching children to her tutoring abilities as a volunteer in SSY.",
    },
    {
      firstName: "Jennifer",
      lastName: "Li",
      image: "",
      role: "Tutor",
      description:
        "Hi! My name is Jennifer and I'm a grade 10 student. Some of my hobbies include reading, listening to music, playing badminton and playing the piano. I've been playing piano for around 8 years now, and I hope I can use my experience to help others on their musical journeys! ",
    },
    {
      firstName: "Derek",
      lastName: "Xu",
      image:
        "https://drive.google.com/thumbnail?id=1aV7n4s1klojt1Dw06MGGFEgFgUyhNTCz",
      role: "Tutor",
      description:
        "Hi, my name is Derek. I am currently in grade 11 and have an interest in biology and creative writing and my hobbies include playing the piano and helping others. I believe tutoring allows both sides to gain something valuable from each other. The kids I work with will get to learn something new from me while I get to improve on my communication and explanation skills, which I think is very important. ",
    },
    {
      firstName: "Jack",
      lastName: "Liu",
      image: "",
      role: "Web Developer",
      description:
        "Hello, I’m Jack Liu, currently attending grade 10. I enjoy programming, chess, and mathematics. ",
    },
    {
      firstName: "Oven",
      lastName: "Chen",
      image:
        "https://drive.google.com/thumbnail?id=1FyrZxv7dcgeyJtQXSxEe_uqXXL7m25iE",
      role: "Tutor",
      description:
        "Hi, I’m Oven Chen and I’m a grade 8 student, I am good at Math and Coding, I spend most of my free time badminton and music. I’m happy to teach kids, especially teach math, I am proud to be the voluteer in GSSYA.",
    },
    {
      firstName: "Tianze",
      lastName: "Zhao",
      image:
        "https://drive.google.com/thumbnail?id=1c2WuJ58_crS9wcnmlZAifk2JgNgQ_Jon",
      role: "Tutor",
      description:
        "Hello, here is Tianze, I’m a grade 12 student. The subject that I am good at is mathematics. I love teaching basic math to lower-grade kids in order to help them make friends with figures, and also, I can help and support students in grade 12 who are learning calculus!",
    },
    {
      firstName: "Cissy",
      lastName: "Wen",
      image:
        "https://drive.google.com/thumbnail?id=1kS52P3lHUThiGauxXdMEN-jDmcwVnnrl",
      role: "Tutor",
      description:
        "I am a grade 12 student. I am a strong business ability, responsible and patient person. I am a person with strong self-control and I have leadership which means I can arrange my time reasonably",
    },
    {
      firstName: "Linda",
      lastName: "Gu",
      image:
        "https://drive.google.com/thumbnail?id=1lubsVF50o5uiCNJJUbofB5QqFWPCFQYL",
      role: "Tutor",
      description:
        "Hello! I’m Linda Gu, and I’m currently in grade 11. My hobbies include exploring nature, running, and playing the cello. The subjects I am most interested in are physics and literature. I can help with younger grades with science or English, or older grades in physics and essay writing. I’m super excited to be a tutor and be a part of others’ learning journeys!",
    },
    {
      firstName: "Tony",
      lastName: "Chai",
      image: "",
      role: "Tutor",
      description:
        "Hi! My name is Tony. I will be a grade 10 student in September. I love math, science, coding, handcrafting and many other sports like playing badminton and fencing. I like playing piano, drawing, and writing calligraphy in my free time too. I like cooperating with others, and I am very happy to help younger students with their studies like I did when I assist my calligraphy teacher in teaching other students.",
    },
    {
      firstName: "Alice",
      lastName: "Du",
      image: "",
      role: "Tutor",
      description:
        "Alice Du is a grade 10 student attending the Claude Watson Arts\nprogram. She has taken extracurricular visual art lessons for around 6 years, and she hopes to share the artistic knowledge she has accumulated over time with her community today.",
    },
    {
      firstName: "Jeffery",
      lastName: "",
      image:
        "https://drive.google.com/thumbnail?id=1a-OzmeTLtCdTEgj62kGkQfvDoGCAa6xs",
      role: "Tutor",
      description:
        "Hello, everyone. My name is Jeffery. I'm a tenth-grade student. I'm good at Junior English. Hahaha, I can recite words in my spare time. I also enjoy working with children very much. Everyone calls me child king. I would like to thank GSSYA for giving me this opportunity. Don't hesitate to join us!",
    },
    {
      firstName: "Max",
      lastName: "",
      image:
        "https://drive.google.com/thumbnail?id=1JeVQeKKs6oApAHfI69JGnWZb-oQ6WhFo",
      role: "Tutor",
      description:
        "Hello! I’m Max, an grade 11 Tutor at GSSYA. My friends call me the astronomy guy, which means I stand outside in the ice-cold wind staring at celestial objects through a metal tube on a daily basis. I currently tutor Maths at GSSYA, but if anyone wants to learn about astronomy I'd love to help. :)",
    },
    {
      firstName: "Daniel",
      lastName: "Guan",
      image:
        "https://drive.google.com/thumbnail?id=1rgmf37gn9hw7X8fMUfySueUGlcdyfPia",
      role: "Chess Club President",
      description:
        "I’m a Year 9 Student. I love playing chess and I am on the top 100 rating list for the United States Chess Federation Under 18 Online Regular Rating. (Ranking #64th)",
    },
    {
      firstName: "Jasmine",
      lastName: "Zhai",
      image:
        "https://drive.google.com/thumbnail?id=1EYz58DavGyZ7ZoLgp-ToIS74ajQWYgL2",
      role: "Tutor",
      description:
        "Hello everyone! I'm Jasmine, a grade 10 student. I love music and reading, especially science fiction and fantasy. I tutor debate at GSSYA and we look forward to having you join us! ",
    },
    {
      firstName: "Nathan",
      lastName: "Hu",
      image:
        "https://drive.google.com/thumbnail?id=1Y9pHGDkX0IBI-oT6dEWh-c0ld196hAdw",
      role: "Tutor",
      description:
        "- 5th Team and Quarterfinalist at CUSID Nationals\n- 2 time Octofinalist at Western HST\n- 18th Speaker at Queens and Western",
    },
    {
      firstName: "Sophia",
      lastName: "Lee",
      image: "",
      role: "Tutor",
      description:
        "Sophia Lee is a grade 9 student in the visual arts program at a high school. She likes to draw, especially character art, music, and reading during her spare time. She's excited to volunteer as a tutor and work with others in GSSYA.",
    },
    {
      firstName: "Thomas",
      lastName: "Wang",
      image:
        "https://drive.google.com/thumbnail?id=137Tzt0HMMBvK1bBMpeuoQfKoQrUlsOFW",
      role: "Chef de Camp de Tutorat",
      description:
        "Thomas Wang, grade 11. GSSYA tutor leader, joined GSSYA since 2021. Enthusiastic about volunteering and serving the community. Productive and studious student, rich and competitive sports commitments. AA level hockey, active School Athletics Council member, Rugby Varsity Team member, School outdoor program leader.",
    },
    {
      firstName: "James  ",
      lastName: "Pu",
      image:
        "https://drive.google.com/thumbnail?id=1L74iWBTOMNrdCFTtthGgvGmInQpAX9fe",
      role: "Special Projects Admin & Tutor Leader",
      description:
        "Bonjour everyone, I'm James, a grade 12 student very interested in helping others in STEM and utilizing the vast community of GSSYA to spread messages like environmental conservation through special events to our young audiences. I enjoy cubing, photography, stargazing, and music in my free time! \n\nThank you.",
    },
  ],
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <LandingPage {...landingPageProps} />
      {/* <AboutPage {...aboutPageProps} /> */}
      <OfferingsPage {...offeringsPageProps} />
      <ProgramsPage {...programsPageProps} />
      <TeamPage {...teamPageProps} />
      <Footer />
    </div>
  );
}
