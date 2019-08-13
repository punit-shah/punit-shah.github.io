import React, { forwardRef } from 'react';
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
            role: 'Software Engineering Graduate',
            workingAt: 'BBC',
          },
        },
        {
          input: 'Punit.interests',
          output: ['Code', 'Design', 'Coffee', 'Movies', 'D&D'],
        },
      ]}
    />
  </Section>
));

export default About;
