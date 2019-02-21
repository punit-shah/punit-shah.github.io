import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Navbar.css';

const Navbar = ({ fixed, links }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const headerClasses = classNames('Navbar', { 'Navbar-fixed': fixed });
  const navClasses = classNames('Navbar-nav', {
    'Navbar-nav-expanded': isExpanded,
  });

  const listItems = links.map(({ href, label, onClick }) => (
    <li className="Navbar-link" key={label}>
      <a
        href={href}
        onClick={() => {
          onClick();
          setIsExpanded(false);
        }}
      >
        {label}
      </a>
    </li>
  ));

  return (
    <header className={headerClasses}>
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
          onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}
          aria-expanded={isExpanded}
          aria-controls="nav"
        >
          <span>☰</span>
        </button>

        <nav className={navClasses} id="nav" aria-hidden={!isExpanded}>
          <ul className="Navbar-list">{listItems}</ul>
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  fixed: PropTypes.bool,
  links: PropTypes.array.isRequired,
};
Navbar.defaultProps = {
  fixed: false,
};

export default Navbar;
