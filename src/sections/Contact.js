import React, { forwardRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import './Contact.css';

const Contact = forwardRef((props, ref) => (
  <section className="Contact" id="contact" ref={ref}>
    <div className="Contact-container container">
      <SectionHeading className="Contact-title">Contact</SectionHeading>
      <form
        className="Contact-form"
        action="https://formspree.io/punitshah95@gmail.com"
        method="POST"
      >
        <p>
          Got a question? I'd love to hear from you. Send me a message and I'll
          respond as soon as possible.
        </p>
        <label className="Contact-label">
          Name
          <input
            className="Contact-field"
            id="Contact-name"
            type="text"
            name="name"
            required
          />
        </label>
        <label className="Contact-label">
          Email address
          <input
            className="Contact-field"
            id="Contact-email"
            type="email"
            name="_replyto"
            required
          />
        </label>
        <label className="Contact-label">
          Message
          <textarea
            className="Contact-body"
            id="Contact-message"
            type="text"
            name="message"
            required
          />
        </label>
        <input className="Contact-hidden" type="text" name="_gotcha" />
        <input type="hidden" name="_subject" value="Contact form message" />
        <input
          className="Contact-submit"
          id="Contact-send"
          type="submit"
          value="🚀 Send message"
        />
      </form>
    </div>
  </section>
));

export default Contact;
