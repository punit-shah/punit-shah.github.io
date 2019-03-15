import React from 'react';
import PropTypes from 'prop-types';

const WorkItem = ({ data: { image, title, description, link } }) => (
  <a href={link}>
    <article className="WorkItem">
      <div className="WorkItem-image">
        <img src={image} alt={`Screenshot of ${title}`} />
      </div>
      <h3 className="WorkItem-title">{title}</h3>
      <p className="WorkItem-description">{description}</p>
    </article>
  </a>
);

WorkItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkItem;
