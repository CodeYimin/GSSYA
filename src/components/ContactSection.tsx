import React from 'react';

const ContactSection: React.FC = ({}) => {
  return (
    <div id="contact" className="bg-black text-white py-14">
      <h1 className="section-header">CONTACT</h1>
      <div className="mx-auto w-max flex flex-col items-center text-xl mt-4">
        <div className="flex py-2">
          <i className="bi bi-telephone-fill" />
          <p className="ml-2">+1 (647) 787 4468</p>
        </div>
        <div className="flex py-2">
          <i className="bi bi-envelope-fill" />
          <p className="ml-2">ssytutor@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactSection