import React from 'react';
import './Footer.css';

const Footer = ({ children }) => (
  <footer className="Footer">
    <div className="Footer-container container">{children}</div>
  </footer>
);

export default Footer;
