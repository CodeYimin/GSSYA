import React, { ReactElement } from 'react';
import IContact from '../../interfaces/IContact';

export interface ContactSectionProps {
  header?: string;
  contact?: IContact | null;
}

function ContactSection({ contact, header }: ContactSectionProps): ReactElement {

  return (
    <div id="contact" className="bg-black text-white py-14">
      <h1 className="section-header">{header}</h1>
      <div className="mx-auto w-max flex flex-col items-center text-xl mt-4">
        <div className="flex py-2">
          <i className="bi bi-telephone-fill" />
          <p className="ml-2">{contact?.phone}</p>
        </div>
        <div className="flex py-2">
          <i className="bi bi-envelope-fill" />
          <p className="ml-2">{contact?.email}</p>
        </div>
        <div className="flex py-2">
          <img src="images/weixin.svg" className="h-6 my-auto" />
          <p className="ml-2">{contact?.wechat}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactSection