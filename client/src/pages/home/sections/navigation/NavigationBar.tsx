import { WebsiteDataNavigationBar } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LanguageButton from "./components/LanguageButton";
import NavigationItem from "./components/NavigationItem";

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
      className="hidden md:visible fixed md:flex w-full py-5 px-12 z-30 transition-all duration-300 items-center"
      style={{ backgroundColor: "#FFFBEB" }}
    >
      <header className="flex-1 text-5xl text-red-600 font-welcomeSummer">
        GSSYA
      </header>
      <nav className="z-30">
        {data.items.map((item) => (
          <NavItem key={item.label} href={item.link}>{item.label}</NavItem>
        ))}
      </nav>
      <div className="flex-1">
        <div className="float-right">
          <LanguageButton
            label={data.changeLanguageLabel}
            onLanguageSelect={onLanguageSelect}
            languages={languages}
          />
        </div>
      </div>
      {/* <FloatingNavigation>

      </FloatingNavigation> */}
    </div>
  );
}

const FloatingNavigation = styled.div`
  position: fixed;
  top: 50%;
  left: 2em;
  width: 10em;
  height: 10em;
  background-color: white;
  z-index: 100;
  transform: translateY(-50%);
`;

const NavItem = styled.a`
  color: #023047;
  padding: 0 0.8em;
  font-size: 1.25em;
  
  &:hover {
    opacity: 50%;
  }
`

export default NavigationBar;
