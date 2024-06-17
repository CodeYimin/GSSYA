import { TeamPageProps } from "@/types/Volunteers";
import { ReactElement } from "react";
import VolunteerCard from "./VolunteerCard";

export default function TeamPage({
  volunteers,
  title1,
  title2,
  title3,
  title4,
}: TeamPageProps): ReactElement {
  return (
    <div id="team" className="pt-20">
      <div className="font-bold text-center text-3xl md:text-4xl flex flex-col md:gap-3">
        <p>
          {title1}
          <span className="text-red-500">{title2}</span>
        </p>
        <p>
          {title3}
          <span className="text-red-500">{title4}</span>
        </p>
      </div>
      <div className="mt-16">
        <div className="grid gap-2 mx-auto w-max items-center grid-cols-5">
          {volunteers.map((volunteer, i) => (
            <VolunteerCard volunteer={volunteer} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
