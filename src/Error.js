import React, { useState } from 'react';
import classNames from 'classnames';
import './Error.css';
import errorImg from './img/error.png';

const getErrorMessage = () => {
  const messages = [
    '01101001 01101100 01111001',
    'you need more ram',
    'please do not touch me',
    'a long time ago, clicking on me would have crashed your browser',
    "back in my day we didn't click on errors for no reason",
    'i am not an a.i.',
    '<marquee>i miss this</marquee>',
    'why was i built with react',
    'this site needs an "under construction" gif',
  ];

  return messages[Math.floor(Math.random() * messages.length)];
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
    <div className={bubbleClasses} aria-hidden={isBubbleHidden}>
      <div className="Error-bubble-message">
        <span>{errorMessage}</span>
      </div>
    </div>
  );

  return (
    <figure className="Error">
      <div className="Error-image">
        <img
          src={errorImg}
          alt="Error: 🌚"
          onClick={() => {
            if (bubbleTimeout) {
              window.clearTimeout(bubbleTimeout);
            }

            const message = getErrorMessage();
            const delay = message.includes('<marquee>') ? 5000 : 1000;

            setErrorMessage(message);
            setIsBubbleHidden(false);
            setBubbleTimeout(
              window.setTimeout(() => setIsBubbleHidden(true), delay)
            );
          }}
        />
        {bubble}
      </div>
      <figcaption className="Error-caption">
        <span>This is not an error, but a solution.</span>
      </figcaption>
    </figure>
  );
};

export default Error;
