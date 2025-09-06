import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Toggle } from 'rsuite';
// css implement in app.css


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCrossIcon, setIsCrossIcon] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCrossIcon(!isCrossIcon);
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsCrossIcon(!isCrossIcon);
  }

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    setIsCrossIcon(false);
  }

  return (
    <>
      <nav>
        <div className={`navbar-container`}>
          <div className='home-element'>
            <li onClick={handleHomeClick}><Link to="/">Home</Link></li>
          </div>
          <div className='link-elements laptop-navbar'>
            <li onClick={handleLinkClick}><Link to="/inputField">Input Field</Link></li>
            <li onClick={handleLinkClick}><Link to="/dataTable">Data Table</Link></li>
          </div>
          <div className="mobile-nav" onClick={handleMenu}>
            {!isCrossIcon ? <RiMenu3Fill className='mobile-menu-icon' /> : <RxCross2 className='mobile-menu-icon' />}
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className='mobile-menu-items mobile-menu'>
          <li onClick={handleLinkClick}><Link to="/inputField">Input Field</Link></li>
          <li onClick={handleLinkClick}><Link to="/dataTable">Data Table</Link></li>
        </div>
      )}
    </>
  )
}

export default Navbar