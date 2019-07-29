import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './SectionHeading.css';

const SectionHeading = ({ className, children }) => (
  <h2 className={classNames('SectionHeading', className)}>{children}</h2>
);

SectionHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionHeading;
