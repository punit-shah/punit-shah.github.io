import React from 'react';
import Error from './Error';
import './Cover.css';

const Cover = () => (
  <section className="Cover" id="cover">
    <div className="Cover-container container">
      <h1 className="Cover-header">Punit Shah</h1>
      <p className="Cover-lead">Software engineer</p>
      <hr className="Cover-line" />
      <Error />
    </div>
  </section>
);

export default Cover;
