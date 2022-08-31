import { WebsiteDataTeamSectionMember } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";
import styled from "styled-components";

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

const FlipCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  backface-visibility: hidden;
`;

const FlipCardFront = styled(FlipCardFace)`
  color: white;
`;

const FlipCardBack = styled(FlipCardFace)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  transform: rotateY(180deg);
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;

  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

function TeamMemberCard({
  firstName,
  lastName,
  role,
  description,
  image,
}: WebsiteDataTeamSectionMember): ReactElement {
  return (
    <div className="CardWrapper">
      <FlipCard>
        <FlipCardInner>
          <FlipCardFront>
            <img
              src={image || "images/defaultAvatar.svg"}
              className={`rounded-full w-40 h-40 bg-blue-500 mx-auto ${
                image ? "object-cover" : "object-contain"
              }`}
            />
            <h1 className="mt-3 font-normal text-3xl">
              {firstName} {lastName}
            </h1>
            <h2 className="">{role}</h2>
          </FlipCardFront>
          <FlipCardBack>
            <p className="text-sm">{description}</p>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
    </div>
  );
}

export default TeamMemberCard;
