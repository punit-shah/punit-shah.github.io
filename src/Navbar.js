import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Navbar.css';

const Navbar = ({ fixed, links }) => {
  const [expanded, setExpanded] = useState(false);

  const navClasses = classNames('Navbar-nav', {
    'Navbar-nav-expanded': expanded,
  });

  const listItems = links.map((link) => (
    <li className="Navbar-link" key={link.label}>
      <a href={link.href} onClick={link.onClick}>
        {link.label}
      </a>
    </li>
  ));

  return (
    <header className={classNames('Navbar', { 'Navbar-fixed': fixed })}>
      <div className="Navbar-container container">
        <a
          className="Navbar-logo Navbar-btn"
          href="#cover"
          onClick={() => console.log('scroll to #cover')}
        >
          <span>:P</span>
        </a>
        <button
          className="Navbar-toggler Navbar-btn"
          onClick={() => setExpanded(prevExpanded => !prevExpanded)}
          aria-expanded={expanded}
          aria-controls="nav"
        >
          <span>&equiv;</span>
        </button>
        <nav className={navClasses} id="nav" aria-hidden={!expanded}>
          <ul className="Navbar-list">{listItems}</ul>
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  fixed: PropTypes.bool,
};

export default Navbar;
