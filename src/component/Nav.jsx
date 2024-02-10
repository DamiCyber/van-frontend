import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/nav.css";
import logo from "../assets/image/logog.png";
import bar from "../assets/image/hamburger.png";
import side from "../assets/image/side.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // Close the menu after 300 milliseconds (adjust as needed)
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div>
      <nav>
        <input type="checkbox" id="check" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
          <label htmlFor="check" className="checkbtn">
            <i className={`bars ${isOpen ? 'hide' : ''}`}> <img src={bar} className='bars' alt="hamburger" /></i>
            <i className={`bars ${isOpen ? '' : 'hide'}`}> <img src={side} className='bars' alt="hamburger" /></i>
          </label>
          <label className='logo'> <Link to="/"><img src={logo} className='img' alt="logo" /></Link></label>
          <ul>
            <li><Link to="/host/dashboard" onClick={handleLinkClick}>Host</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/van" onClick={handleLinkClick}>Vans</Link></li>
            <li><Link className='account' to="/login" onClick={handleLinkClick}>Login</Link></li>
          </ul>
      </nav>
    </div>
  );
};

export default Nav;
