
import React, { useState } from 'react';
import './App.css'
import Navbar from "./Component/Navbar/Navbar.jsx"
import Cover from './Component/CoverSections/Cover.jsx'
import CoverContent from './Component/CoverSections/CoverContent.jsx'
import About from './Component/Abouts/About.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const menuItems = [
    "Home",
    "About",
    "Training",
    "Rise Above All",
    "Academy",
    "HR Services",
    "Merchandise",
    "Our Books",
    "Contact"
  ];

  return (
    <>
      <div className="relative">
        <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} menuItems={menuItems} />
        <Cover isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} menuItems={menuItems} />
        <CoverContent isMenuOpen={isMenuOpen} menuItems={menuItems} />
      </div>
      <About></About>
    </>
  )
}

export default App


