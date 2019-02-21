import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Cover from './sections/Cover';
import About from './sections/About';
import './App.css';

const navbarLinks = [
  {
    href: '#about',
    label: 'about',
    onClick: () => console.log('scroll to #about'),
  },
  {
    href: '#work',
    label: 'work',
    onClick: () => console.log('scroll to #work'),
  },
  {
    href: '#contact',
    label: 'contact',
    onClick: () => console.log('scroll to #contact'),
  },
];

const App = () => {
  const sectionRefs = [useRef(null), useRef(null)];

  return (
    <div className="App">
      <Navbar fixed links={navbarLinks} sectionRefs={sectionRefs} />
      <Cover ref={sectionRefs[0]} />
      <About ref={sectionRefs[1]} />
    </div>
  );
};

export default App;
