import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Cover from './sections/Cover';
import About from './sections/About';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './App.css';

const navbarLinks = [
  {
    href: '#about',
    text: 'about',
  },
  {
    href: '#work',
    text: 'work',
  },
  {
    href: '#contact',
    text: 'contact',
  },
];

const App = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  return (
    <div className="App">
      <Navbar fixed links={navbarLinks} sectionRefs={sectionRefs} />
      <Cover ref={sectionRefs[0]} />
      <About ref={sectionRefs[1]} />
      <Work ref={sectionRefs[2]} />
      <Contact ref={sectionRefs[3]} />
      <Footer />
    </div>
  );
};

export default App;
