import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className="Footer">{`\u00A9 ${year} Punit Shah`}</footer>;
};

export default Footer;
