import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import INavigationItem from '../interfaces/INavigationItem'
import NavigationItem from './NavigationItem'

interface NavigationProps {
  navigationItems: INavigationItem[],
}

function Navigation(props: NavigationProps): ReactElement {
  const navBar = useRef<HTMLDivElement>(null);
  const [currentY, setCurrentY] = useState(window.pageYOffset);

  function hideNavBar(): void {
    navBar.current!.style.top = `${-navBar.current!.getBoundingClientRect().height}px`;
  }

  function showNavBar(): void {
    navBar.current!.style.top = '0px';
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

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [currentY])

  return (
    <div 
      ref={navBar} 
      className="fixed flex w-full py-3 px-12 z-50 bg-yellow-50 transition-all duration-300 shadow-lg"
    >
      <header className="flex-1 text-5xl text-red-600">GSSYA</header>
      <nav className="my-auto z-50">
        {props.navigationItems.map((item) => (
          <NavigationItem key={item.name} name={item.name} link={item.link}/>
        ))}
      </nav>
      <div className="flex-1">
        
      </div>
    </div>
  )
}

export default Navigation
