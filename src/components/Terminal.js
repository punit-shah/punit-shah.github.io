import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CodeList from './CodeList';
import CodeString from './CodeString';
import './Terminal.css';

const OutputComponent = ({ output }) => {
  if (!output) {
    return null;
  }

  if (Array.isArray(output)) {
    return <CodeList type="array" data={output} />;
  }

  if (typeof output === 'object') {
    return <CodeList type="object" data={output} />;
  }

  if (typeof output === 'string') {
    return <CodeString>{output}</CodeString>;
  }

  if (typeof output === 'boolean') {
    return <span style={{ color: '#bf616a' }}>{output.toString()}</span>;
  }

  return null;
};

const Terminal = ({ data }) => {
  const terminalContent = data.map(({ input, output }, index) => (
    <Fragment key={index}>
      <dt className="Terminal-input">{input}</dt>
      <dd className="Terminal-output">
        <OutputComponent output={output} />
      </dd>
    </Fragment>
  ));

  return <dl className="Terminal">{terminalContent}</dl>;
};

Terminal.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      input: PropTypes.string.isRequired,
      output: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.object,
      ]).isRequired,
    })
  ).isRequired,
};

export default Terminal;
