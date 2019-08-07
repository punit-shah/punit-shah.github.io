import React, { forwardRef } from 'react';
import Section from '../components/Section';
import CodeString from '../components/CodeString';
import CodeList from '../components/CodeList';
import './About.css';

const About = forwardRef((props, ref) => (
  <Section className="About" id="about" heading="About" centred ref={ref}>
    <dl className="About-console">
      <dt className="About-console-input">Punit.location</dt>
      <dd className="About-console-output">
        <CodeString>London</CodeString>
      </dd>

      <dt className="About-console-input">Punit.skills</dt>
      <dd className="About-console-output">
        <CodeList
          type="array"
          data={[
            'JavaScript',
            'React',
            'CSS',
            'HTML',
            'AWS',
            'Git',
            'Node.js',
            'Java',
            'Scala',
          ]}
        />
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
          data={{
            role: 'Software Engineering Graduate',
            workingAt: 'BBC',
          }}
        />
      </dd>

      <dt className="About-console-input">Punit.interests</dt>
      <dd className="About-console-output">
        <CodeList
          type="array"
          data={['Code', 'Design', 'Coffee', 'Movies', 'D&D']}
        />
      </dd>
    </dl>
  </Section>
));

export default About;
