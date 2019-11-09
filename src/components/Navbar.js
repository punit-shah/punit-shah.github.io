import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Container from './Container';
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

  const listItems = links.map(({ href, text }, index) => {
    const isActive = href === `#${activeSectionId}`;
    const linkClasses = classNames('Navbar-link', {
      'Navbar-link-active': isActive,
    });

    return (
      <li className={linkClasses} key={index}>
        <AnchorLink
          href={href}
          onClick={() => setIsExpanded(false)}
          tabIndex={isExpanded ? 0 : -1}
        >
          {text}
        </AnchorLink>
      </li>
    );
  });

  return (
    <header className={headerClasses}>
      <Container className="Navbar-container">
        <div className="Navbar-buttons">
          <AnchorLink
            className="Navbar-logo Navbar-btn"
            href="#cover"
            onClick={() => setIsExpanded(false)}
          >
            <span>:P</span>
          </AnchorLink>

          <button
            className="Navbar-toggler Navbar-btn"
            onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}
            aria-expanded={isExpanded}
            aria-controls="nav"
            aria-label="Toggle navigation."
          >
            <span>☰</span>
          </button>
        </div>

        <nav className={navClasses} id="nav" aria-hidden={!isExpanded}>
          <ul className="Navbar-list">{listItems}</ul>
        </nav>
      </Container>
    </header>
  );
};

Navbar.propTypes = {
  fixed: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
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
