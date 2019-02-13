import React from 'react';
import Navbar from './Navbar';
import Cover from './Cover';
import './App.css';

const navbarLinks = [
  {
    href: '#work',
    label: 'work',
    onClick: () => console.log('scroll to #work'),
  },
  {
    href: '#about',
    label: 'about',
    onClick: () => console.log('scroll to #about'),
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
  </div>
);

export default App;
