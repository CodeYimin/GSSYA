import { WebsiteDataAboutSectionCard } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";

function AboutCard({
  title,
  image,
}: WebsiteDataAboutSectionCard): ReactElement {
  return (
    <div className="w-60 md:w-80 text-center py-10 transition-all duration-250">
      <img src={image} alt="" />
      <h1 className="font-bold text-3xl pt-6">{title}</h1>
    </div>
  );
}

export default AboutCard;
