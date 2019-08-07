import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SectionHeading from './SectionHeading';
import './Section.css';

const Section = forwardRef(
  ({ className, id, heading, centred, children }, ref) => (
    <section className={classNames('Section', className)} id={id} ref={ref}>
      <div
        className={classNames([
          'Section-container',
          { 'Section-container-centred': centred },
        ])}
      >
        {heading && <SectionHeading>{heading}</SectionHeading>}
        {children}
      </div>
    </section>
  )
);

Section.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  centred: PropTypes.bool,
  children: PropTypes.node,
};

export default Section;
