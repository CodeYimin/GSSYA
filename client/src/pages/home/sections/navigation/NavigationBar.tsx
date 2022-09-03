import { WebsiteDataNavigationBar } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LanguageButton from "./components/LanguageButton";

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
      style={{ backgroundColor: "white" }}
    >
      <header className="flex-1 text-5xl text-blue-900 font-welcomeSummer">
        GSSYA
      </header>
      <div className="z-30">
        {data.items.map((item) => (
          <NavItem key={item.label} href={item.link}>
            {item.label}
          </NavItem>
        ))}
      </div>
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
  left: 2rem;
  width: 10rem;
  height: 10rem;
  background-color: white;
  z-index: 100;
  transform: translateY(-50%);
`;

const NavItem = styled.a`
  display: inline-block;
  color: #023047;
  padding: 0 1rem;
  font-size: 1.1rem;

  &:hover {
    opacity: 50%;
    scale: 1.1;
  }

  transition: all 0.2s ease-in-out;
`;

export default NavigationBar;
