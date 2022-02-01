import { WebsiteDataSubjectsSectionSubject } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";

function SubjectCard({
  title,
  description,
  grade,
  image,
}: WebsiteDataSubjectsSectionSubject): ReactElement {
  return (
    <div className="text-center p-5 w-96">
      <div className="w-52 h-52 my-8 mx-auto">
        {image ? (
          <img src={image} className="w-full h-full object-contain" />
        ) : (
          <div className="w-full h-full rounded-full bg-white" />
        )}
      </div>
      <h2 className="text-xl font-medium">{grade}</h2>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="my-2">{description}</p>
    </div>
  );
}

export default SubjectCard;
