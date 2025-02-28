import Taskbar from './Taskbar';
import { useState } from 'react';

function Contact() {
  return (
    <>
      <Taskbar />
      <div className='contact-container'>
        <h1>Contact Us</h1>
        <p>Have a question? Click the button below to send us an email.</p>
        <a
          href='mailto:cacheiql@gmail.com?subject=Inquiry&body=Hello,%20I%20have%20a%20question%20about%20your%20services.'
          className='email-button'
        >
          Send Email
        </a>
      </div>
    </>
  );
}

export default Contact;
