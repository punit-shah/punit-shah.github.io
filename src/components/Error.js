import React, { useState } from 'react';
import classNames from 'classnames';
import './Error.css';
import errorImg from '../img/error.png';

const getErrorMessage = () => {
  const messages = [
    'this site needs an "under construction" gif',
    'please do not touch me',
    "back in my day we didn't click on errors for no reason",
    'a long time ago, clicking on me would have crashed your browser',
    'i am not an a.i.',
    'why was i built with react',
    '<marquee>i miss this</marquee>',
    'you need more ram',
  ];
  const randomMessageIndex = Math.floor(Math.random() * messages.length);

  return messages[randomMessageIndex];
};

const Error = () => {
  const [isBubbleHidden, setIsBubbleHidden] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [bubbleTimeout, setBubbleTimeout] = useState(undefined);

  const isMarquee = errorMessage.includes('<marquee>');
  const bubbleClasses = classNames(
    'Error-bubble',
    { 'Error-bubble-hidden': isBubbleHidden },
    { 'Error-bubble-marquee': isMarquee }
  );

  const bubble = (
    <div className={bubbleClasses} aria-hidden>
      <div className="Error-bubble-message">
        <span>{errorMessage}</span>
      </div>
    </div>
  );

  const handleClick = () => {
    if (bubbleTimeout) {
      window.clearTimeout(bubbleTimeout);
    }

    const message = getErrorMessage();
    const delay = message.includes('<marquee>') ? 5000 : 2000;

    setErrorMessage(message);
    setIsBubbleHidden(false);
    setBubbleTimeout(window.setTimeout(() => setIsBubbleHidden(true), delay));
  };

  return (
    <figure className="Error">
      <div className="Error-image">
        <img src={errorImg} alt="Error: 🌚" onClick={handleClick} />
        {bubble}
      </div>
      <figcaption className="Error-caption">
        <span>This is not an error, but a solution.</span>
      </figcaption>
    </figure>
  );
};

export default Error;
