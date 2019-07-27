import React, { forwardRef } from 'react';
import './Work.css';
import asteroids from '../img/asteroids.png';
import realTimeFaceAging from '../img/real-time-face-aging.png';
import WorkItem from '../components/WorkItem';

const items = [
  {
    image: asteroids,
    title: 'Asteroids',
    description: `A clone of the classic arcade game Asteroids in JavaScript
      🚀👾`,
    links: {
      visit: 'https://punit-shah.github.io/asteroids/',
      source: 'https://github.com/punit-shah/asteroids',
    },
  },
  {
    image: realTimeFaceAging,
    title: 'Real-time face aging',
    description: `Uses computer vision and graphics techniques to make your face appear older in real-time
      👦 ➡️ 👴`,
    links: {
      visit: 'https://punit-shah.github.io/real-time-face-aging/',
      source: 'https://github.com/punit-shah/real-time-face-aging',
    },
  },
  {
    image: asteroids,
    title: 'Asteroids',
    description:
      'A clone of the classic arcade game Asteroids in JavaScript 🚀👾',
    links: {
      visit: 'https://punit-shah.github.io/asteroids/',
      source: 'https://github.com/punit-shah/asteroids',
    },
  },
  {
    image: asteroids,
    title: 'Asteroids',
    description:
      'A clone of the classic arcade game Asteroids in JavaScript 🚀👾',
    links: {
      visit: 'https://punit-shah.github.io/asteroids/',
      source: 'https://github.com/punit-shah/asteroids',
    },
  },
];

const workItems = items.map((item, index) => (
  <WorkItem data={item} key={index} />
));

const Work = forwardRef((props, ref) => (
  <section className="Work" id="work" ref={ref}>
    <div className="Work-container container">
      <h2 className="Work-heading">Work + Fun</h2>
      <div className="Work-items">{workItems}</div>
    </div>
  </section>
));

export default Work;
