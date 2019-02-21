import React from 'react';
import CodeString from './CodeString';
import './CodeList.css';

const CodeList = ({ type, data }) => {
  switch (type) {
    case 'object':
      const objectProps = Object.keys(data).map(key => {
        const value = data[key];
        return (
          <li className="CodeList-object-prop" key={key}>
            <dl>
              <dt className="CodeList-object-key">{key}</dt>
              <dd className="CodeList-object-value">
                {typeof value === 'string' ? (
                  <CodeString>{value}</CodeString>
                ) : (
                  value
                )}
              </dd>
            </dl>
          </li>
        );
      });
      return <ul className="CodeList-object">{objectProps}</ul>;

    case 'array':
      const arrayElements = data.map(element => (
        <li className="CodeList-array-element" key={element}>
          <CodeString>{element}</CodeString>
        </li>
      ));
      return <ul className="CodeList-array">{arrayElements}</ul>;

    default:
      return null;
  }
};

export default CodeList;
