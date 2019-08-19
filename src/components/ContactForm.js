import React, { useState } from 'react';
import Button from './Button';
import './ContactForm.css';

const formApiUrl =
  'https://xlframabl3.execute-api.eu-west-1.amazonaws.com/prod/send-email';

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

const ContactForm = () => {
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
      <p>
        Got a question? I'd love to hear from you. Send me a message and I'll
        respond as soon as possible.
      </p>
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
        value="🚀 Send message"
        disabled={formState === 'sending'}
      />
      {messages[formState] && (
        <p className={`ContactForm-message ContactForm-message-${formState}`}>
          {messages[formState]}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
