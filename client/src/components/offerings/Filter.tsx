"use client";

import { ReactElement, useEffect, useRef, useState } from "react";

interface FilterProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: (options: string[]) => void;
}

const caretDownPath =
  "M17.7604 4.33044C17.4409 4.01097 16.9228 4.01091 16.6033 4.33049L9.00022 11.9337L1.39675 4.33044C1.07728 4.01097 0.559203 4.01091 0.239676 4.33049C-0.0798513 4.65002 -0.0798513 5.16804 0.239676 5.48757L8.42171 13.6694C8.57515 13.8228 8.78324 13.909 9.00022 13.909C9.2172 13.909 9.42535 13.8228 9.57873 13.6693L17.7603 5.48751C18.0799 5.16804 18.0799 4.64997 17.7604 4.33044Z";

const checkPath =
  "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z";

export default function Filter({
  label,
  options,
  selectedOptions,
  setSelectedOptions,
}: FilterProps): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full md:w-72 hover:bg-zinc-100 p-3 rounded-md transition-all relative ${
        open &&
        "bg-zinc-100 rounded-b-none scale-110 -translate-y-5 z-30 shadow-lg"
      }`}
    >
      {/* Label */}
      <div className="text-zinc-600 text-sm">{label}</div>
      {/* Dropdown */}
      <div className="w-full h-10 rounded-md relative">
        {/* Caret */}
        <div
          className={`absolute h-full flex items-center right-3 fill-zinc-500 transition-transform ${
            open && "transform rotate-180"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d={caretDownPath} />
          </svg>
        </div>
        {/* Selected options */}
        <div className="flex gap-2 h-full items-center">
          {options
            .filter((o) => selectedOptions.includes(o))
            .slice(0, 2)
            .map((option) => (
              <div
                key={option}
                className="bg-zinc-600 text-zinc-50 px-2 py-1 rounded-[0.2rem] text-xs text-ellipsis max-w-20 whitespace-nowrap overflow-hidden"
              >
                {option}
              </div>
            ))}
          {selectedOptions.length === 0 && (
            <div className="text-zinc-400 text-xs">Select options</div>
          )}
          {selectedOptions.length > 2 && (
            <div className="bg-zinc-500 text-zinc-50 px-2 py-1 rounded-[0.2rem] text-xs">
              +{selectedOptions.length - 2}
            </div>
          )}
        </div>
      </div>
      {/* Open options */}
      <div
        className="absolute cursor-pointer w-full h-full top-0 left-0"
        onClick={() => setOpen(!open)}
      />
      {/* Options container */}
      {open && (
        <div
          className={`absolute bg-zinc-100 rounded-b-md flex flex-col top-[97%] shadow-lg left-0 w-full text-sm text-zinc-500 max-h-52 overflow-y-auto px-2 filter-scrollbar z-40`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Options */}
          {options.map((option, i) => (
            <div
              key={i}
              onClick={() => {
                if (selectedOptions.includes(option)) {
                  setSelectedOptions(
                    selectedOptions.filter((o) => o !== option)
                  );
                } else {
                  setSelectedOptions([...selectedOptions, option]);
                }
              }}
              className="px-1 flex items-center gap-2 py-3 cursor-pointer"
            >
              {/* Checkbox */}
              <div className="h-3 aspect-square border rounded-sm border-zinc-500 relative">
                {/* Check mark */}
                <div className="absolute left-0 top-0 h-full aspect-square fill-zinc-500 flex items-center justify-center">
                  <div
                    className="h-[80%] aspect-square bg-zinc-500"
                    hidden={!selectedOptions.includes(option)}
                  >
                    {/* <svg viewBox="0 0 448 512" className="h-full w-full">
                        <path d={checkPath} />
                      </svg> */}
                  </div>
                </div>
              </div>
              {/* Option Label */}
              <div className="text-xs text-zinc-700">{option}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
