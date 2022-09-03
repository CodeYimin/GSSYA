import { WebsiteDataEventsSection } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import EventCard from "./components/EventCard";

function EventsSection({
  title,
  events,
}: WebsiteDataEventsSection): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsContainer = useRef<HTMLDivElement>(null);
  const innerCardsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsContainer.current || !innerCardsContainer.current) {
      return;
    }

    const cards = [...innerCardsContainer.current.children] as HTMLElement[];
    const currentCard = cards[currentIndex];
    const surroundingCards = [cards[currentIndex - 1], cards[currentIndex + 1]];

    const innerCardsContainerLeft =
      innerCardsContainer.current.getBoundingClientRect().left;
    const currentCardCenter =
      currentCard.getBoundingClientRect().left +
      currentCard.getBoundingClientRect().width / 2;
    const cardContainerWidth =
      cardsContainer.current.getBoundingClientRect().width;

    const offset =
      -(currentCardCenter - innerCardsContainerLeft) + cardContainerWidth / 2;

    innerCardsContainer.current.style.marginLeft = `${offset}px`;

    // Add/Remove special effects
    cards.forEach((card) => {
      if (card === currentCard) {
        card.style.scale = "1";
        card.style.opacity = "100%";
      } else if (surroundingCards.includes(card)) {
        card.style.scale = "0.9";
        card.style.opacity = "30%";
      } else {
        card.style.opacity = "0";
      }
    });
  }, [currentIndex]);

  return (
    <div id="events" className="text-white fill-current">
      <div className="relative h-20">
        <svg
          className="h-20 bg-blue-900 absolute"
          width="100%"
          preserveAspectRatio="none"
          viewBox="0 0 500 20"
        >
          <path
            className="text-slate-800 fill-current"
            d="M0,0 C250,30 300,-20 500,12 L500,150 L0,150 Z"
          />
        </svg>
        <svg
          className="h-20 absolute z-10"
          width="100%"
          preserveAspectRatio="none"
          viewBox="0 0 500 20"
        >
          <path
            className="text-black fill-current"
            d="M0,12 C250,-20 300,30 500,0 L500,150 L0,150 Z"
          />
        </svg>
      </div>
      <div className="bg-black pb-1">
        <h1 className="section-header">{title}</h1>
        <CarouselContainer>
          <SlideButton
            onClick={() =>
              currentIndex > 0 && setCurrentIndex(currentIndex - 1)
            }
          >
            {"<"}
          </SlideButton>
          <CardsContainer ref={cardsContainer}>
            <CardsInnerContainer ref={innerCardsContainer}>
              {events.map((event) => (
                <EventCard {...event} />
              ))}
            </CardsInnerContainer>
          </CardsContainer>
          <SlideButton
            onClick={() =>
              currentIndex < events.length - 1 &&
              setCurrentIndex(currentIndex + 1)
            }
          >
            {">"}
          </SlideButton>
        </CarouselContainer>
      </div>
    </div>
  );
}

const CarouselContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 4em auto;
`;

const SlideButton = styled.button`
  padding: 0 0.25rem;
  font-size: 5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
    transform: scale(1.1);
  }
`;

const CardsContainer = styled.div`
  overflow-x: hidden;
  flex-grow: 1;
`;

const CardsInnerContainer = styled.div`
  white-space: nowrap;
  transition: margin-left 0.5s ease-in-out;
`;

export default EventsSection;
