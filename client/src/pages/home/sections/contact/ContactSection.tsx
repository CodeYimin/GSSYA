import { WebsiteDataContactSection } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";

function ContactSection({
  title,
  contactInfo,
}: WebsiteDataContactSection): ReactElement {
  return (
    <div id="contact" className="bg-black text-white py-14">
      <h1 className="section-header">{title}</h1>
      <div className="mx-auto w-max flex flex-col items-center text-xl mt-4">
        <div className="flex py-2">
          <i className="bi bi-telephone-fill" />
          <p className="ml-2">{contactInfo.phone}</p>
        </div>
        <div className="flex py-2">
          <i className="bi bi-envelope-fill" />
          <p className="ml-2">{contactInfo.email}</p>
        </div>
        <div className="flex py-2">
          <img src="images/weixin.svg" className="h-6 my-auto" />
          <p className="ml-2">{contactInfo.wechat}</p>
        </div>
        <div className="flex py-2">
          <img src="images/instagram.svg" className="h-6 my-auto" />
          <a href={contactInfo.instagram} className="ml-2">{contactInfo.instagram}</a>
        </div>
        <div className="flex py-2">
          <img src="images/youtube.svg" className="h-6 my-auto" />
          <a href={contactInfo.youtube} className="ml-2">{contactInfo.youtube}</a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
