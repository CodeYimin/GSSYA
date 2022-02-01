import { WebsiteDataNavigationBar } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import LanguageButton from "../components/LanguageButton";
import NavigationItem from "../components/NavigationItem";

export interface NavigationProps {
  data: WebsiteDataNavigationBar;
  languages: string[];
  onLanguageSelect: (language: string) => void;
}

function NavigationBar({
  data,
  onLanguageSelect,
  languages,
}: NavigationProps): ReactElement {
  const [currentY, setCurrentY] = useState(window.pageYOffset);
  const navBar = useRef<HTMLDivElement>(null);

  function hideNavBar(): void {
    navBar.current!.style.top = `${-navBar.current!.getBoundingClientRect()
      .height}px`;
  }

  function showNavBar(): void {
    navBar.current!.style.top = "0px";
  }

  useEffect(() => {
    function handleScroll() {
      const newY = window.pageYOffset;
      if (currentY > newY) {
        showNavBar();
      } else {
        hideNavBar();
      }
      setCurrentY(newY);
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [currentY]);

  return (
    <div
      ref={navBar}
      className="hidden md:visible fixed md:flex w-full py-3 px-12 z-30 bg-yellow-50 transition-all duration-300 shadow-lg"
    >
      <header className="flex-1 text-5xl text-red-600">GSSYA</header>
      <nav className="my-auto z-30">
        {data.items.map((item) => (
          <NavigationItem key={item.label} {...item} />
        ))}
      </nav>
      <div className="flex-1">
        <div className="float-right">
          <LanguageButton
            onLanguageSelect={onLanguageSelect}
            languages={languages}
          />
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
