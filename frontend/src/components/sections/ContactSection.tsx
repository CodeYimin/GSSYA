import React, { ReactElement } from 'react';
import { IContactInfo } from '../../interfaces/IContactInfo';
import { useApiData } from '../../services/apiService';

function ContactSection(): ReactElement {
  const contactInfo = useApiData<IContactInfo>('contact');

  return (
    <div id="contact" className="bg-black text-white py-14">
      <h1 className="section-header">CONTACT</h1>
      <div className="mx-auto w-max flex flex-col items-center text-xl mt-4">
        <div className="flex py-2">
          <i className="bi bi-telephone-fill" />
          <p className="ml-2">{contactInfo?.phone}</p>
        </div>
        <div className="flex py-2">
          <i className="bi bi-envelope-fill" />
          <p className="ml-2">{contactInfo?.email}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactSection