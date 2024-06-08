"use client";

import { Media } from "@/app/media";
import { useWebsiteDataStore } from "@/stores/WebsiteDataStore";
import { titanOne } from "@/ui/fonts";
import { usePathname } from "next/navigation";
import { ReactElement, useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import LanguageSelect from "./LanguageSelect";

export default function Navbar(): ReactElement {
  const { websiteData } = useWebsiteDataStore();
  const links = websiteData.navbar.links;

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      onClick={(e) => {
        if (pathname !== "/") {
          e.preventDefault();
          window.location.href = "/";
        }
      }}
    >
      <Media greaterThanOrEqual="md">
        <div className="fixed top-0 left-0 bg-zinc-950 w-full flex justify-center p-4 text-zinc-300 items-center z-50">
          <div className="text-zinc-50 relative text-sm">
            <div className="text-zinc-200">
              <div className="flex-grow flex gap-8 float-right absolute right-full items-center h-full">
                {links.slice(0, Math.round(links.length / 2)).map((link) => (
                  <a
                    className="cursor-pointer hover:text-zinc-50 w-max"
                    href={link.link}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="absolute flex-grow flex gap-8 left-full items-center h-full">
                {links
                  .slice(Math.round(links.length / 2), links.length)
                  .map((link) => (
                    <a
                      className="cursor-pointer hover:text-zinc-50 w-max"
                      href={link.link}
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
            </div>
            <a
              href="#home"
              className={`${titanOne.className} text-2xl cursor-pointer hover:text-red-400 box-content mx-8`}
            >
              GSSYA
            </a>
          </div>
          <div className="absolute right-0 h-full mr-5 flex items-center">
            <LanguageSelect
              languages={["English", "Français", "简体", "繁體"]}
            />
          </div>
        </div>
      </Media>
      <Media lessThan="md">
        <div className="fixed top-0 left-0 px-5 bg-zinc-950 w-full flex justify-between p-4 text-zinc-200 items-center z-50">
          <a
            href="#home"
            className={`${titanOne.className} text-2xl cursor-pointer hover:text-red-400 box-content`}
          >
            GSSYA
          </a>
          <div className="flex gap-5 items-center">
            <LanguageSelect
              languages={["English", "Français", "简体", "繁體"]}
            />
            <button
              onClick={() => setOpen(!open)}
              className={`cursor-pointer transition-all ${
                open && "scale-y-125"
              }`}
            >
              <FaBars />
            </button>
          </div>

          <div
            className={`absolute top-full left-0 bg-zinc-950 flex flex-col gap-5 items-center w-full overflow-hidden transition-all ${
              open ? "h-max py-5" : "py-0 h-0"
            }`}
          >
            {links.map((link) => (
              <a
                href={link.link}
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-zinc-50"
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Media>
    </div>
  );
}
