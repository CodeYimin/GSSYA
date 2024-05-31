import { IVolunteerCard } from "@/types/Volunteers";
import { ReactElement, useState } from "react";
import NextImage from "../NextImage";
import VolunteerModal from "./VolunteerModal";

interface VolunteerCardProps {
  volunteer: IVolunteerCard;
}

export default function VolunteerCard({
  volunteer,
}: VolunteerCardProps): ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div
        className="relative bg-zinc-200 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-all"
        onClick={() => {
          setOpen(true);
        }}
      >
        {volunteer.image ? (
          <NextImage
            src={volunteer.image}
            alt="Profile Picture"
            className="rounded-full"
          />
        ) : (
          <p className="text-xs text-zinc-700 font-medium select-none">
            {volunteer.firstName[0]}
          </p>
        )}
      </div>
      {open && (
        <VolunteerModal
          volunteer={volunteer}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
