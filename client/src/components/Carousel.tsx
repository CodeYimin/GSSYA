import { ReactElement, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface CarouselProps {
  elements: ReactElement[];
}

export default function Carousel({ elements }: CarouselProps): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  return (
    <div className="h-full w-full flex items-center relative">
      <div className="absolute top-0 left-0 w-14 md:w-20 px-1 md:px-3 z-50 md:static h-full flex items-center">
        {currentIndex > 0 && (
          <button
            className="w-full aspect-square text-zinc-50 bg-zinc-900 opacity-90 rounded-full md:rounded-none md:bg-transparent flex items-center justify-center"
            onClick={() => {
              setCurrentIndex(Math.max(currentIndex - 1, 0));
            }}
          >
            <FaAngleLeft />
          </button>
        )}
      </div>
      <div className="h-full w-full overflow-hidden flex-grow">
        <div
          className={`h-full w-full flex transition-all`}
          style={{ marginLeft: `-${currentIndex * 100}%` }}
        >
          {elements.map((element, i) => (
            <div key={i} className="min-w-full h-full">
              {element}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-14 md:w-20 px-1 md:px-3 z-50 md:static h-full flex items-center">
        {currentIndex < elements.length - 1 && (
          <button
            className="w-full aspect-square text-zinc-50 opacity-90 bg-zinc-900 rounded-full md:rounded-none md:bg-transparent flex items-center justify-center"
            onClick={() => {
              setCurrentIndex(Math.min(currentIndex + 1, elements.length - 1));
            }}
          >
            <FaAngleRight />
          </button>
        )}
      </div>
    </div>
  );
}
