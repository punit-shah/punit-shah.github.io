import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import './WorkItem.css';

const WorkItemLink = ({ type, href }) => {
  const labels = {
    visit: {
      icon: (
        <span className="WorkItemLink-emoji" role="img" aria-label="eyes">
          👀
        </span>
      ),
      text: 'Visit',
    },
    source: {
      icon: <FontAwesomeIcon className="WorkItemLink-icon" icon={faCode} />,
      text: 'Source',
    },
  };

  return (
    <Button href={href} className="WorkItemLink">
      {labels[type].icon}
      {labels[type].text}
    </Button>
  );
};

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
        {hasLinks && (
          <ul className="WorkItem-links">
            {visit && (
              <li className="WorkItem-links-item">
                <WorkItemLink type="visit" href={visit} />
              </li>
            )}
            {source && (
              <li className="WorkItem-links-item">
                <WorkItemLink type="source" href={source} />
              </li>
            )}
          </ul>
        )}
      </div>
      <h3 className="WorkItem-title">{title}</h3>
      <p className="WorkItem-description">{description}</p>
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
