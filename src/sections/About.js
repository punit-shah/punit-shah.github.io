import React from 'react';
import CodeString from '../components/CodeString';
import CodeList from '../components/CodeList';
import './About.css';

const About = () => (
  <section className="About" id="about">
    <div className="About-container container">
      <h2 className="About-heading">About</h2>

      <dl className="About-console">
        <dt className="About-console-input">Punit.location</dt>
        <dd className="About-console-output">
          <CodeString>London</CodeString>
        </dd>

        <dt className="About-console-input">Punit.education</dt>
        <dd className="About-console-output">
          <CodeList
            type="object"
            data={{
              degree: 'BSc Computer Science',
              university: 'Aberystwyth University',
              graduatedIn: '2017',
            }}
          />
        </dd>

        <dt className="About-console-input">Punit.currentRole</dt>
        <dd className="About-console-output">
          <CodeList
            type="object"
            data={{ role: 'Software Engineering Graduate', workingAt: 'BBC' }}
          />
        </dd>

        <dt className="About-console-input">Punit.interests</dt>
        <dd className="About-console-output">
          <CodeList
            type="array"
            data={['Clean code', 'Design', 'Coffee', 'Movies', 'D&D']}
          />
        </dd>
      </dl>
    </div>
  </section>
);

export default About;
