import { Category, SchedulePageProps } from "@/types/Schedule";
import { ReactElement, useState } from "react";

const schedules: {
  category: Category;
  scheduleLink: string;
  registerLink: string;
  registerStudentLink?: string;
  registerTutorLink?: string;
}[] = [
  {
    category: "Art4Earth",
    scheduleLink:
      "https://sites.google.com/view/vibrant-living-biodiversity/schedule",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdP4VaKrFvBlLDNGRJgemTEbRJo-q_ccD4cdX8mRNfegMX6xg/viewform",
  },
  {
    category: "Clubs",
    scheduleLink: "https://sites.google.com/view/gssya/schedule",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdP4VaKrFvBlLDNGRJgemTEbRJo-q_ccD4cdX8mRNfegMX6xg/viewform",
  },
  {
    category: "Mental Health",
    scheduleLink: "https://sites.google.com/view/mentalhealthgssya/schedule",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdP4VaKrFvBlLDNGRJgemTEbRJo-q_ccD4cdX8mRNfegMX6xg/viewform",
  },
  {
    category: "Multiculturalism",
    scheduleLink:
      "https://sites.google.com/view/confident-youth-program/schedule",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdP4VaKrFvBlLDNGRJgemTEbRJo-q_ccD4cdX8mRNfegMX6xg/viewform",
  },
  {
    category: "Tutoring",
    scheduleLink: "https://sites.google.com/view/gssyatutoringcamp/schedule",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeGZ85GMYRqHe3Rer-sG8xHMneEAhhHDfRMsmbAiTwceHEz7g/viewform",
    registerStudentLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeGZ85GMYRqHe3Rer-sG8xHMneEAhhHDfRMsmbAiTwceHEz7g/viewform",
    registerTutorLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfnOYgMnBMiraAaAon810HWXBJS3N3Er3WJV_Ino9T7XUdiCw/viewform",
  },
];

export default function OfferingsPage({
  offerings,
}: SchedulePageProps): ReactElement {
  const [selectedSchedule, setSelectedSchedule] = useState<{
    category: Category;
    scheduleLink: string;
    registerLink: string;
    registerStudentLink?: string;
    registerTutorLink?: string;
  }>(schedules[0]);

  return (
    <div id="schedule" className="pt-20">
      <div className="font-bold text-center text-3xl md:text-4xl flex flex-col gap-3">
        <p>
          CHECK OUT OUR <span className="text-red-500">SCHEDULE</span>
        </p>
      </div>
      {/* <div className="mt-8 w-[85%] mx-auto">
        <OfferingsBrowser offerings={offerings} />
      </div> */}
      <div className="flex flex-col gap-5 mx-auto w-full mt-6 items-center">
        <div className="flex flex-col gap-5 mx-auto w-max items-start">
          {schedules.map((schedule) => (
            <div
              key={schedule.category}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setSelectedSchedule(schedule)}
            >
              <div className="h-4 aspect-square rounded-full border-2 border-zinc-800 flex justify-center items-center">
                {schedule === selectedSchedule && (
                  <div className="absolute w-2 aspect-square rounded-full bg-zinc-700" />
                )}
              </div>
              <div className="text-zinc-800">{schedule.category}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-x-3 gap-y-2 max-w-[80%] flex-wrap justify-center">
          <a
            href={selectedSchedule.scheduleLink}
            target="_self"
            className="inline-block text-zinc-50 rounded-md bg-zinc-800 py-2 px-5 text-sm hover:bg-zinc-950 mt-2 whitespace-nowrap text-center cursor-pointer"
          >
            Get schedule
          </a>
          {selectedSchedule.registerStudentLink &&
          selectedSchedule.registerTutorLink ? (
            <>
              <a
                href={selectedSchedule.registerStudentLink}
                target="_self"
                className="inline-block text-zinc-50 rounded-md bg-zinc-800 py-2 px-5 text-sm hover:bg-zinc-950 mt-2 whitespace-nowrap text-center cursor-pointer"
              >
                Register Student
              </a>
              <a
                href={selectedSchedule.registerTutorLink}
                target="_self"
                className="inline-block text-zinc-50 rounded-md bg-zinc-800 py-2 px-5 text-sm hover:bg-zinc-950 mt-2 whitespace-nowrap text-center cursor-pointer"
              >
                Register Tutor
              </a>
            </>
          ) : (
            <a
              href={selectedSchedule.registerLink}
              target="_self"
              className="inline-block text-zinc-50 rounded-md bg-zinc-800 py-2 px-5 text-sm hover:bg-zinc-950 mt-2 whitespace-nowrap text-center cursor-pointer"
            >
              Register
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
