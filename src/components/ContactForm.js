import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ContactForm.css';

const postData = async (url, data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

const ContactForm = ({ formApiUrl, text }) => {
  const [formState, setFormState] = useState('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const messages = {
    idle: '\u00A0',
    sending: 'Sending...',
    success: 'Thanks for the message!',
    failure: 'Oops, something went wrong! Please try sending that again later.',
  };

  const onSubmit = async event => {
    event.preventDefault();

    setFormState('sending');

    try {
      await postData(formApiUrl, {
        name,
        email,
        message,
      });

      setFormState('success');
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => setFormState('idle'), 3000);
    } catch (error) {
      console.error(error);
      setFormState('failure');

      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <form className="ContactForm" onSubmit={onSubmit}>
      {text && <p>{text}</p>}
      <label className="ContactForm-label">
        Name
        <input
          className="ContactForm-field"
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
      </label>
      <label className="ContactForm-label">
        Email address
        <input
          className="ContactForm-field"
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
      </label>
      <label className="ContactForm-label">
        Message
        <textarea
          className="ContactForm-body"
          type="text"
          name="message"
          value={message}
          onChange={event => setMessage(event.target.value)}
          required
        />
      </label>
      <Button
        className="ContactForm-submit"
        type="submit"
        disabled={formState === 'sending'}
      >
        <span
          className="ContactForm-submit-emoji"
          role="img"
          aria-label="rocket"
        >
          🚀
        </span>
        Send message
      </Button>
      {messages[formState] && (
        <p className={`ContactForm-message ContactForm-message-${formState}`}>
          {messages[formState]}
        </p>
      )}
    </form>
  );
};

ContactForm.propTypes = {
  formApiUrl: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default ContactForm;
