import React, { forwardRef } from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = forwardRef((props, ref) => (
  <Section className="Contact" id="contact" heading="Contact" centred ref={ref}>
    <ContactForm
      formApiUrl={process.env.REACT_APP_FORM_API_URL}
      text="Got a question? I'd love to hear from you. Send me a message and I'll
        respond as soon as possible."
    />
  </Section>
));

export default Contact;
