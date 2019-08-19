import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, href, value, className, children, ...otherProps }) => {
  const classes = classNames('Button', className);

  if (value && type && (type === 'submit' || type === 'button')) {
    return (
      <input className={classes} type={type} value={value} {...otherProps}>
        {children}
      </input>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...otherProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...otherProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
