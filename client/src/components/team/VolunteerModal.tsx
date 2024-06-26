import { IVolunteerCard } from "@/types/Volunteers";
import { ReactElement } from "react";
import { FaXmark } from "react-icons/fa6";
import Modal from "../Modal";
import NextImage from "../NextImage";

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  volunteer: IVolunteerCard;
}

export default function VolunteerModal({
  volunteer,
  isOpen,
  onClose,
}: VolunteerModalProps): ReactElement {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="fixed flex flex-col items-center rounded-md bg-zinc-50 p-10">
        <button
          className="absolute right-2 top-2 p-2 flex justify-center items-center"
          onClick={onClose}
        >
          <FaXmark className="text-zinc-600 hover:text-zinc-500" />
        </button>
        <div className="relative h-48 w-48">
          <NextImage
            src={volunteer.image || "/images/logo.svg"}
            alt="Profile Picture"
            objectFit={!volunteer.image ? "contain" : "cover"}
            className="rounded-full"
          />
        </div>
        <div className="w-72 md:w-96 text-center">
          <div className="text-2xl font-bold mt-4">
            {volunteer.firstName} {volunteer.lastName}
          </div>
          <div className="text-lg font-semibold">{volunteer.role}</div>
          <div className="text-sm mt-2">{volunteer.description}</div>
        </div>
      </div>
    </Modal>
  );
}
