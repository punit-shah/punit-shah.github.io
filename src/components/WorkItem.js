import React from 'react';
import PropTypes from 'prop-types';
import './WorkItem.css';

const WorkItem = ({
  data: {
    image,
    title,
    description,
    links: { visit, source },
  },
}) => {
  const hasLinks = visit || source;

  return (
    <article className="WorkItem">
      <div className="WorkItem-image">
        <img src={image} alt={`Screenshot of ${title}`} />
      </div>
      <h3 className="WorkItem-title">{title}</h3>
      <p className="WorkItem-description">{description}</p>
      {hasLinks && (
        <ul className="WorkItem-links">
          {visit && (
            <li className="WorkItem-link WorkItem-link-visit">
              <a href={visit}>Visit</a>
            </li>
          )}
          {source && (
            <li className="WorkItem-link WorkItem-link-source">
              <a href={source}>Source</a>
            </li>
          )}
        </ul>
      )}
    </article>
  );
};

WorkItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.shape({
      visit: PropTypes.string,
      source: PropTypes.string,
    }),
  }).isRequired,
};

export default WorkItem;
