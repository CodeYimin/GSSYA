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
        className="relative rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-all"
        onClick={() => {
          setOpen(true);
        }}
      >
        <NextImage
          src={volunteer.image || "/images/logo.svg"}
          alt="Profile Picture"
          objectFit={!volunteer.image ? "contain" : "cover"}
          className="rounded-full"
        />
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
