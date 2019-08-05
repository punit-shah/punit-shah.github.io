import React, { forwardRef } from 'react';
import Section from '../components/Section';
import Error from '../components/Error';
import './Cover.css';

const Cover = forwardRef((props, ref) => (
  <Section className="Cover" id="cover" centred ref={ref}>
    <h1 className="Cover-heading">Punit Shah</h1>
    <p className="Cover-lead">Software engineer</p>
    <hr className="Cover-line" />
    <Error />
  </Section>
));

export default Cover;
