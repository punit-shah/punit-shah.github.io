import React, { forwardRef } from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = forwardRef((props, ref) => (
  <Section className="Contact" id="contact" heading="Contact" centred ref={ref}>
    <ContactForm />
  </Section>
));

export default Contact;
