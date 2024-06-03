import { Category, SchedulePageProps } from "@/types/Schedule";
import { ReactElement, useState } from "react";

const schedules: { category: Category; link: string }[] = [
  {
    category: "Mental Health",
    link: "https://sites.google.com/view/mentalhealthgssya/schedule",
  },
  {
    category: "Art4Earth",
    link: "https://sites.google.com/view/vibrant-living-biodiversity/schedule",
  },
  {
    category: "Clubs",
    link: "https://sites.google.com/view/gssya/schedule",
  },
  {
    category: "Multiculturalism",
    link: "https://sites.google.com/view/confident-youth-program/schedule",
  },
];

export default function OfferingsPage({
  offerings,
}: SchedulePageProps): ReactElement {
  const [selectedSchedule, setSelectedSchedule] = useState<{
    category: Category;
    link: string;
  }>(schedules[3]);

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
      <div className="flex flex-col gap-5 mx-auto w-max mt-6">
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
        <a
          href={selectedSchedule.link}
          target="_blank"
          className="inline-block text-zinc-50 rounded-md bg-zinc-800 py-2 px-5 text-sm hover:bg-zinc-950 mt-2 whitespace-nowrap text-center cursor-pointer"
        >
          Get schedule
        </a>
      </div>
    </div>
  );
}
