import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useScrollSpy from '../hooks/useScrollSpy';
import './Navbar.css';

const Navbar = ({ fixed, links, sectionRefs }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const activeSectionId = useScrollSpy({
    sectionRefs,
    offset: 59,
    defaultActiveSectionId: 'cover',
  });

  const headerClasses = classNames('Navbar', { 'Navbar-fixed': fixed });
  const navClasses = classNames('Navbar-nav', {
    'Navbar-nav-expanded': isExpanded,
  });

  const listItems = links.map(({ href, label, onClick }) => {
    const isActive = href === `#${activeSectionId}`;
    const linkClasses = classNames('Navbar-link', {
      'Navbar-link-active': isActive,
    });

    return (
      <li className={linkClasses} key={label}>
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
    );
  });

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
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
  sectionRefs: PropTypes.arrayOf(
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ).isRequired,
};
Navbar.defaultProps = {
  fixed: false,
};

export default Navbar;
