import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Cover from './sections/Cover';
import About from './sections/About';
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
  const sectionRefs = [useRef(null), useRef(null)];

  return (
    <div className="App">
      <Navbar fixed links={navbarLinks} sectionRefs={sectionRefs} />
      <Cover ref={sectionRefs[0]} />
      <About ref={sectionRefs[1]} />
      <Footer>&copy; {new Date().getFullYear()} Punit Shah</Footer>
    </div>
  );
};

export default App;
