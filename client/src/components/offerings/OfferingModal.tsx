import { Offering } from "@/types/Schedule";
import { ReactElement, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import Carousel from "../Carousel";
import Modal from "../Modal";
import NextImage from "../NextImage";

interface OfferingModalProps {
  offering: Offering;
  isOpen: boolean;
  onClose: () => void;
}

export default function OfferingModal({
  offering,
  isOpen,
  onClose,
}: OfferingModalProps): ReactElement {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col fixed h-[80%] w-[80%] max-w-[60rem] bg-zinc-50 rounded-lg">
        <div className="flex justify-center items-center px-12 py-3 bg-zinc-50 w-full rounded-t-lg relative shadow-md md:shadow-lg z-50 text-center">
          <div className="text-sm md:text-base">{offering.title}</div>
          <button
            className="absolute right-1 md:right-2 p-2 flex justify-center items-center"
            onClick={onClose}
          >
            <FaXmark className="text-zinc-600 hover:text-zinc-500" />
          </button>
        </div>
        <div className="w-full overflow-auto filter-modal">
          <div className="w-full aspect-[0.75] md:aspect-[2] md:bg-zinc-950">
            <Carousel
              elements={offering.images.map((image, i) => (
                <div key={i} className="h-full relative">
                  <NextImage
                    src={image}
                    alt={"Image of " + offering.title}
                    objectFit="contain"
                  />
                </div>
              ))}
            />
          </div>
          <div className="w-full mt-10 flex flex-col gap-8 px-8 pb-8 md:px-12 md:pb-12 ">
            <div>
              <p className="text-2xl mb-3">{offering.title}</p>
              <p>{offering.description || offering.title}</p>
            </div>
            <div>
              <p className="text-2xl mb-3">Date</p>
              <p>
                {offering.startTime.toLocaleDateString()} -{" "}
                {offering.endTime.toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-2xl mb-3">Location</p>
              <p>{offering.location}</p>
            </div>
            {offering.buttons.length > 0 && (
              <div>
                <p className="text-2xl mb-3">Links</p>
                <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                  {offering.buttons.map((button, i) => (
                    <a
                      href={button.link}
                      key={i}
                      target="_self"
                      className="px-5 py-2 bg-zinc-200 hover:bg-zinc-300 rounded-md text-center inline-block"
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
