import React, { forwardRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = forwardRef((props, ref) => (
  <section className="Contact" id="contact" ref={ref}>
    <div className="Contact-container container">
      <SectionHeading className="Contact-title">Contact</SectionHeading>
      <ContactForm />
    </div>
  </section>
));

export default Contact;
