import { ReactElement } from "react";
import { FaEnvelope, FaFacebook, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { SiLinktree } from "react-icons/si";

interface FooterProps {}

export default function Footer({}: FooterProps): ReactElement {
  return (
    <div
      id="contact"
      className="w-full bg-zinc-950 p-10 text-zinc-200 flex flex-col justify-center items-center text-center gap-2 mt-32"
    >
      <p className="text-3xl mb-3 font-bold text-zinc-50">CONNECT WITH US</p>
      <div className="flex gap-3 items-center">
        <FaPhoneAlt /> +1 (647) 787 4468
      </div>
      <div className="flex gap-3 items-center">
        <FaEnvelope /> ssytutor@gmail.com
      </div>
      <div className="flex gap-3 items-center">
        <FaYoutube />{" "}
        <a
          className="underline hover:text-zinc-50"
          href="https://www.youtube.com/channel/UC0H20TYKqATjGJrK9UILLRg"
          target="_blank"
        >
          Youtube
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <FaFacebook />{" "}
        <a
          className="underline hover:text-zinc-50"
          href="https://www.facebook.com/people/Linda-Huang/100079881245341/"
          target="_blank"
        >
          Facebook
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <FaSquareXTwitter />{" "}
        <a
          className="underline hover:text-zinc-50"
          href="https://twitter.com/gssyatutor"
          target="_blank"
        >
          X
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <IoLogoWechat /> 青少年互助联盟
      </div>
      <div className="flex gap-3 items-center">
        <SiLinktree />{" "}
        <a
          className="underline hover:text-zinc-50"
          href="https://linktr.ee/ssytutor"
          target="_blank"
        >
          Linktree
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <FaLocationDot /> 184 Heath St W, Toronto, ON M4V 1V2
      </div>
      <a
        className="underline hover:text-zinc-50"
        href={(process.env.NEXT_PUBLIC_BASE_PATH || "") + "/terms"}
        target="_blank"
      >
        Terms and conditions
      </a>
    </div>
  );
}
