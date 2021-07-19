import React, { forwardRef } from 'react';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';
import './Work.css';
import asteroids from '../img/asteroids.png';
import realTimeFaceAging from '../img/real-time-face-aging.png';
import cssSpecificityCalculator from '../img/css-specificity-calculator.png';
import iplayer from '../img/iplayer.png';
import climateChange from '../img/climate-change.png';
import syria from '../img/syria.png';
import musicalTwinTowns from '../img/musical-twin-towns.png';
import googleLabourLeadership from '../img/google-labour-leadership.png';

const items = [
  {
    image: asteroids,
    title: 'Asteroids',
    description:
      'A modern clone of the classic arcade game Asteroids, implemented with JavaScript.',
    links: {
      visit: 'https://asteroidsjs.surge.sh',
      source: 'https://github.com/punit-shah/asteroids',
    },
  },
  {
    image: realTimeFaceAging,
    title: 'Real-time face aging',
    description:
      'Uses computer vision and graphics techniques to make your face appear older in real-time.',
    links: {
      visit: 'https://real-time-face-aging.surge.sh',
      source: 'https://github.com/punit-shah/real-time-face-aging',
    },
  },
  {
    image: iplayer,
    title: 'BBC iPlayer',
    description:
      'Helped maintain and develop new features for the BBC iPlayer website.',
    links: {
      visit: 'https://www.bbc.co.uk/iplayer',
    },
  },
  {
    image: cssSpecificityCalculator,
    title: 'CSS specificity calculator',
    description: 'A tool to help developers understand CSS specificity.',
    links: {
      visit: 'https://specificity.surge.sh',
      source: 'https://github.com/punit-shah/specificity',
    },
  },
  {
    image: climateChange,
    title: 'Six graphics that explain climate change',
    description:
      "Feature for BBC News released during 2015's UN Climate Change Conference that uses interactive graphics and data visualisations to explain how and why the Earth's climate is changing.",
    links: {
      visit:
        'https://www.bbc.co.uk/news/resources/idt-5aceb360-8bc3-4741-99f0-2e4f76ca02bb',
    },
  },
  {
    image: syria,
    title: 'Life and death in Syria',
    description:
      'Feature for BBC News released 5 years after the war in Syria started that uses interactive data visualisations to illustrate the results of the war.',
    links: {
      visit:
        'https://www.bbc.co.uk/news/resources/idt-841ebc3a-1be9-493b-8800-2c04890e8fc9',
    },
  },
  {
    image: musicalTwinTowns,
    title: 'Musical twin towns',
    description:
      "Interactive feature for the BBC that uses data from Shazam to display your city's top tracks and match it to another distant city with similar taste in music.",
    links: {
      visit:
        'https://www.bbc.co.uk/news/resources/idt-446211a5-003b-45e3-9211-cdc7d75c5407',
    },
  },
  {
    image: googleLabourLeadership,
    title: 'Labour leadership: Which candidate won Google search battle?',
    description:
      "Interactive map for the BBC showing the most searched-for candidate by constituency before 2015's Labour leadership election.",
    links: {
      visit: 'https://www.bbc.co.uk/news/uk-politics-34172723',
    },
  },
];

const workItems = items.map((item, index) => (
  <WorkItem data={item} key={index} />
));

const Work = forwardRef((props, ref) => (
  <Section className="Work" id="work" heading="Work + Fun" ref={ref}>
    <div className="Work-items">{workItems}</div>
  </Section>
));

export default Work;
