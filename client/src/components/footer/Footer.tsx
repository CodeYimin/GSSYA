import { BASE_PATH } from "@/data/consts";
import { ContactPageProps } from "@/types/Contact";
import { ReactElement } from "react";
import { FaEnvelope, FaFacebook, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { SiLinktree } from "react-icons/si";
import NextImage from "../NextImage";

export default function Footer({
  contacts,
  termsLabel,
  title,
}: ContactPageProps): ReactElement {
  return (
    <div
      id="contact"
      className="w-full bg-zinc-950 p-10 text-zinc-200 flex flex-col justify-center items-center text-center gap-2 mt-32"
    >
      <p className="text-3xl mb-3 font-bold text-zinc-50">{title}</p>
      <div className="flex gap-3 items-center">
        <FaPhoneAlt /> {contacts.phone}
      </div>
      <div className="flex gap-3 items-center">
        <FaEnvelope /> {contacts.email}
      </div>
      <div className="flex gap-3 items-center">
        <FaYoutube />{" "}
        <a
          className="underline hover:text-zinc-50"
          href={contacts.youtube}
          target="_self"
        >
          Youtube
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <FaFacebook />{" "}
        <a
          className="underline hover:text-zinc-50"
          href={contacts.facebook}
          target="_self"
        >
          Facebook
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <FaSquareXTwitter />{" "}
        <a
          className="underline hover:text-zinc-50"
          href={contacts.x}
          target="_self"
        >
          X
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <IoLogoWechat /> {contacts.wechat}
      </div>
      <div className="flex gap-3 items-center">
        <SiLinktree />{" "}
        <a
          className="underline hover:text-zinc-50"
          href={contacts.linktree}
          target="_self"
        >
          Linktree
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <FaLocationDot /> {contacts.address}
      </div>
      <a
        className="underline hover:text-zinc-50"
        href={BASE_PATH + contacts.terms}
        target="_self"
      >
        {termsLabel}
      </a>
      <a
        className="underline hover:text-zinc-50"
        href={
          BASE_PATH +
          "https://drive.google.com/drive/folders/1jVhhGGJj7kXkV_Q8fszm54t1uSGaboDP?usp=sharing"
        }
        target="_self"
      >
        Maintenance Folder
      </a>
      <div className="text-lg mt-5">Funded with help from:</div>
      <div className="flex gap-2 items-center mt-2">
        <div className="relative w-20 h-12">
          <NextImage
            src="/images/canada_logo.jpg"
            alt="Canada_logo"
            objectFit="contain"
          />
        </div>
        <div className="relative w-12 h-12">
          <NextImage src="/images/TD_logo.png" alt="TD_logo" />
        </div>
      </div>
    </div>
  );
}
