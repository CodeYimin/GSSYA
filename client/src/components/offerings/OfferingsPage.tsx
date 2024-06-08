import { Offering, SchedulePageProps } from "@/types/Schedule";
import { ReactElement, useEffect, useState } from "react";

export default function OfferingsPage({
  offerings,
  title1,
  title2,
}: SchedulePageProps): ReactElement {
  const [selectedSchedule, setSelectedSchedule] = useState<Offering>(
    offerings[0]
  );

  useEffect(() => {
    setSelectedSchedule(offerings[0]);
  }, [offerings]);

  return (
    <div id="schedule" className="pt-10">
      <div className="font-bold text-center text-3xl md:text-4xl flex flex-col gap-3">
        <p>
          {title1}
          <span className="text-red-500">{title2}</span>
        </p>
      </div>
      {/* <div className="mt-8 w-[85%] mx-auto">
        <OfferingsBrowser offerings={offerings} />
      </div> */}
      <div className="flex flex-col gap-5 mx-auto w-full mt-6 items-center">
        <div className="flex flex-col gap-5 mx-auto w-max items-start">
          {offerings.map((offering) => (
            <div
              key={offering.category}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setSelectedSchedule(offering)}
            >
              <div className="h-4 aspect-square rounded-full border-2 border-zinc-800 flex justify-center items-center">
                {offering === selectedSchedule && (
                  <div className="absolute w-2 aspect-square rounded-full bg-zinc-700" />
                )}
              </div>
              <div className="text-zinc-800">{offering.category}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-x-3 gap-y-2 max-w-[80%] flex-wrap justify-center">
          {selectedSchedule.buttons.map((button) => (
            <a
              key={button.label}
              href={button.link}
              target="_self"
              className="inline-block text-zinc-50 rounded-md bg-zinc-800 py-2 px-5 text-sm hover:bg-zinc-950 mt-2 whitespace-nowrap text-center cursor-pointer"
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
