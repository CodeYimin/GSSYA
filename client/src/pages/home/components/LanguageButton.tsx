import React, { ReactElement, useEffect } from "react";
import LanguageMenu from "./LanguageMenu";

export interface LanguageButtonProps {
  label?: string;
  languages: string[];
  onLanguageSelect: (language: string) => void;
}

function LanguageButton({
  label,
  languages,
  onLanguageSelect,
}: LanguageButtonProps): ReactElement {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <div className="">
      <button
        onClick={() => setMenuOpen(true)}
        className="bg-red-600 rounded p-3 text-center text-white focus:outline-none"
      >
        {label || "Change Language"}
      </button>
      <LanguageMenu
        languages={languages}
        onLanguageSelect={onLanguageSelect}
        onExit={() => setMenuOpen(!menuOpen)}
        hidden={!menuOpen}
      />
    </div>
  );
}

export default LanguageButton;
