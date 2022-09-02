import { WebsiteDataContactSection } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";
import styled from "styled-components";

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
          <Link href={contactInfo.instagram} className="ml-2">Instagram</Link>
        </div>
        <div className="flex py-2">
          <img src="images/youtube.svg" className="h-6 my-auto" />
          <Link href={contactInfo.youtube} className="ml-2">Youtube</Link>
        </div>
        <div className="flex py-2">
          <img src="images/facebook.svg" className="h-6 my-auto" />
          <Link href={contactInfo.facebook} className="ml-2">Facebook</Link>
        </div>
        <div className="flex py-2">
          <img src="images/twitter.svg" className="h-6 my-auto" />
          <Link href={contactInfo.twitter} className="ml-2">Twitter</Link>
        </div>
        <div className="flex py-2">
          <Link href="/terms" className="ml-2">Terms and conditions</Link>
        </div>
      </div>
    </div>
  );
}

const Link = styled.a`
  text-decoration: underline;

  &:hover {
    color: gray;
  }
`

export default ContactSection;
