import React from 'react';
import PropTypes from 'prop-types';
import './CodeString.css';

const CodeString = ({ children }) => (
  <span className="CodeString">{children}</span>
);

CodeString.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CodeString;
