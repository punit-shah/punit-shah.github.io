import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Section from '../components/Section';
import Terminal from '../components/Terminal';
import './About.css';

const About = forwardRef((props, ref) => (
  <Section className="About" id="about" heading="About" centred ref={ref}>
    <Terminal
      data={[
        {
          input: 'Punit.location',
          output: 'London',
        },
        {
          input: 'Punit.skills',
          output: [
            'JavaScript',
            'TypeScript',
            'React',
            'CSS',
            'HTML',
            'AWS',
            'Git',
            'Node.js',
            'Java',
            'Scala',
          ],
        },
        {
          input: 'Punit.education',
          output: {
            degree: 'BSc Computer Science',
            university: 'Aberystwyth University',
            graduatedIn: '2017',
          },
        },
        {
          input: 'Punit.currentRole',
          output: {
            role: 'Front End Engineer',
            workingAt: 'Checkout.com',
          },
        },
        {
          input: 'Punit.interests',
          output: ['Code', 'Design', 'Coffee', 'Movies', 'D&D'],
        },
      ]}
    />
    <p>Find out more:</p>
    <ul className="About-links">
      <li>
        <a className="About-link" href={`${process.env.PUBLIC_URL}/cv.pdf`}>
          <FontAwesomeIcon className="About-link-icon" icon={faFileAlt} />
          <span>CV</span>
        </a>
      </li>
      <li>
        <a className="About-link" href="https://github.com/punit-shah">
          <FontAwesomeIcon className="About-link-icon" icon={faGithub} />
          <span>GitHub</span>
        </a>
      </li>
    </ul>
  </Section>
));

export default About;
