"use client";

import { Media } from "@/app/media";
import { titanOne } from "@/ui/fonts";
import { usePathname } from "next/navigation";
import { ReactElement, useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";

interface NavbarProps {}

export default function Navbar({}: NavbarProps): ReactElement {
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
                <a href="#about" className="cursor-pointer hover:text-zinc-50">
                  About
                </a>
                <a
                  href="#programs"
                  className="cursor-pointer hover:text-zinc-50"
                >
                  Programs
                </a>
              </div>
              <div className="absolute flex-grow flex gap-8 left-full items-center h-full">
                <a
                  href="#schedule"
                  className="cursor-pointer hover:text-zinc-50"
                >
                  Schedule
                </a>
                <a href="#team" className="cursor-pointer hover:text-zinc-50">
                  Team
                </a>
                <a
                  href="#contact"
                  className="cursor-pointer hover:text-zinc-50"
                >
                  Contact
                </a>
              </div>
            </div>
            <a
              href="#home"
              className={`${titanOne.className} text-2xl cursor-pointer hover:text-red-400 box-content mx-8`}
            >
              GSSYA
            </a>
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
          <button
            onClick={() => setOpen(!open)}
            className={`cursor-pointer transition-all ${open && "scale-y-125"}`}
          >
            <FaBars />
          </button>

          <div
            className={`absolute top-full left-0 bg-zinc-950 flex flex-col gap-5 items-center w-full overflow-hidden transition-all ${
              open ? "h-max py-5" : "py-0 h-0"
            }`}
          >
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-zinc-50"
            >
              About
            </a>
            <a
              href="#programs"
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-zinc-50"
            >
              Programs
            </a>
            <a
              href="#schedule"
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-zinc-50"
            >
              Schedule
            </a>
            <a
              href="#team"
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-zinc-50"
            >
              Team
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-zinc-50"
            >
              Contact
            </a>
          </div>
        </div>
      </Media>
    </div>
  );
}
