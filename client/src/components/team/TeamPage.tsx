import { TeamPageProps } from "@/types/Volunteers";
import { ReactElement } from "react";
import VolunteerCard from "./VolunteerCard";

export default function TeamPage({ volunteers }: TeamPageProps): ReactElement {
  return (
    <div id="team" className="pt-20">
      <div className="font-bold text-center text-3xl md:text-4xl flex flex-col md:gap-3">
        <p>
          MEET OUR <span className="text-red-500">TEAM</span>
        </p>
        <p>
          OF <span className="text-red-500">VOLUNTEERS</span>
        </p>
      </div>
      <div className="my-16">
        <div className="grid gap-2 mx-auto w-max items-center grid-cols-5">
          {volunteers.map((volunteer, i) => (
            <VolunteerCard volunteer={volunteer} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
