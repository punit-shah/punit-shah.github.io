import React, { forwardRef } from 'react';
import Error from '../components/Error';
import './Cover.css';

const Cover = forwardRef((props, ref) => (
  <section className="Cover" id="cover" ref={ref}>
    <div className="Cover-container container">
      <h1 className="Cover-heading">Punit Shah</h1>
      <p className="Cover-lead">Software engineer</p>
      <hr className="Cover-line" />
      <Error />
    </div>
  </section>
));

export default Cover;
