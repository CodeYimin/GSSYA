import { useWebsiteDataStore } from "@/stores/WebsiteDataStore";
import { Language } from "@/types/WebsiteData";
import { ReactElement, useEffect, useRef, useState } from "react";
import { FaCheck, FaGlobe } from "react-icons/fa6";

interface LanguageSelectProps {
  languages: Language[];
}

export default function LanguageSelect({
  languages,
}: LanguageSelectProps): ReactElement {
  const { websiteData, setWebsiteData } = useWebsiteDataStore();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
      className="relative flex items-center cursor-pointer gap-3"
      onClick={() => setOpen(!open)}
      ref={ref}
    >
      <FaGlobe />
      {open && (
        <div
          className={
            "absolute bg-zinc-800 flex flex-col gap-2 py-3 transition-all top-0 -right-1 shadow-md rounded-md"
          }
        >
          {languages.map((language) => (
            <div
              className="flex w-full px-4 justify-between items-center gap-5"
              onClick={() => setWebsiteData(language)}
            >
              <a className="hover:text-zinc-50 w-max">{language}</a>
              {websiteData.language === language && <FaCheck />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
