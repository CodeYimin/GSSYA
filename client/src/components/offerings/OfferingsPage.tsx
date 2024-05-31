import { SchedulePageProps } from "@/types/Schedule";
import { ReactElement } from "react";
import OfferingsBrowser from "./OfferingsBrowser";

export default function OfferingsPage({
  offerings,
}: SchedulePageProps): ReactElement {
  return (
    <div id="schedule" className="pt-20">
      <div className="font-bold text-center text-3xl md:text-4xl flex flex-col gap-3">
        <p>
          CHECK OUT OUR <span className="text-red-500">SCHEDULE</span>
        </p>
      </div>
      <div className="mt-8 w-[85%] mx-auto">
        <OfferingsBrowser offerings={offerings} />
      </div>
    </div>
  );
}
