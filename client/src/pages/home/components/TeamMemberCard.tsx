import { WebsiteDataTeamSectionMember } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";
import styled, { css } from "styled-components";

const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  position: relative;
  perspective: 1000px;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardSide = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const FlipCardFront = styled.div`
  ${CardSide};

  text-align: center;
`;

const FlipCardBack = styled.div`
  ${CardSide};

  transform: rotateY(-180deg);
`;

function TeamMemberCard({
  firstName,
  lastName,
  role,
  description,
  image,
}: WebsiteDataTeamSectionMember): ReactElement {
  return (
    <FlipCard>
      <FlipCardFront>
        <img
          src={image || "images/team/defaultAvatar.svg"}
          className={`rounded-full w-40 h-40 bg-blue-500 mx-auto ${
            image ? "object-cover" : "object-contain"
          }`}
        />
        <h1 className="mt-3 font-medium text-3xl">
          {firstName} {lastName}
        </h1>
        <h2 className="">{role}</h2>
      </FlipCardFront>
      <FlipCardBack>
        <p className="text-sm">{description}</p>
      </FlipCardBack>
    </FlipCard>
  );
}

export default TeamMemberCard;
