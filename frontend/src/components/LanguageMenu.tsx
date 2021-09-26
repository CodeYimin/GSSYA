import React, { ReactElement } from 'react'

export interface LanguageMenuProps {
  languages: string[];
  onLanguageSelect: (language: string) => void;
  onExit: () => void;
  hidden: boolean;
}

function LanguageMenu({ languages, onLanguageSelect, onExit, hidden }: LanguageMenuProps): ReactElement {

  function handleLanguageClick(language: string): void {
    onLanguageSelect(language);
    onExit();
  }

  return (
    <div hidden={hidden} className="fixed h-screen w-screen inset-0 z-50">
      <div onClick={onExit} className="absolute w-full h-full opacity-80 bg-black"/>
      <div className="absolute bg-white rounded-xl w-max h-min inset-0 mx-auto my-auto p-5">
        <h1 className="text-3xl text-center">Select a language</h1>
        <div className="pt-5">
          {languages?.map((language) => (
            <button 
              key={language} 
              onClick={() => handleLanguageClick(language)} 
              className="block mx-auto p-1 text-lg"
            >
              {language}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageMenu;
