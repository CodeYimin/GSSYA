import { DonatePageProps } from "@/types/Donate";
import { ReactElement } from "react";
import { FaPaypal } from "react-icons/fa6";

export default function DonatePage({
  title1,
  title2,
  description,
  donateText,
  donateLink,
}: DonatePageProps): ReactElement {
  return (
    <div id="donate" className="pt-20">
      <div className="font-bold text-center text-3xl md:text-4xl">
        {title1}
        <span className="text-red-500">{title2}</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[50rem] max-w-[80%] text-center whitespace-pre-line mt-5">
          {description}
        </div>
        <a
          href={donateLink}
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md mt-5 hover:bg-red-600 flex items-center  gap-2"
        >
          <FaPaypal className="inline" /> {donateText}
        </a>
      </div>
    </div>
  );
}
