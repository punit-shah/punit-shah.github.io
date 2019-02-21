import React from 'react';
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

const App = () => (
  <div className="App">
    <Navbar fixed links={navbarLinks} />
    <Cover />
    <About />
  </div>
);

export default App;
