import { Offering } from "@/types/Schedule";
import { ReactElement, useState } from "react";
import NextImage from "../NextImage";
import OfferingModal from "./OfferingModal";

interface OfferingCardProps {
  offering: Offering;
}

export default function OfferingCard({
  offering,
}: OfferingCardProps): ReactElement {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="w-full flex flex-col rounded-xl border-2- border-zinc-700 hover:shadow-lg cursor-pointer transition-all"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <div className="w-full h-32 relative border-b- border-zinc-700">
          <NextImage
            src={offering.thumbnail}
            alt="Thumbnail"
            className="rounded-md"
          />
        </div>
        <div className="p-4">
          <div className="text-xl text-zinc-950">{offering.title}</div>
          <div className="mt-1 text-xs text-zinc-500 ">
            {offering.startTime.toLocaleDateString()} -{" "}
            {offering.endTime.toLocaleDateString()}
          </div>
          <div className="flex gap-2 mt-3">
            <div className="bg-zinc-600 text-zinc-50 px-2 py-1 rounded-[0.2rem] text-xs">
              {offering.category}
            </div>
            <div className="bg-zinc-600 text-zinc-50 px-2 py-1 rounded-[0.2rem] text-xs">
              {offering.type}
            </div>
          </div>
        </div>
      </div>
      <OfferingModal
        offering={offering}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
