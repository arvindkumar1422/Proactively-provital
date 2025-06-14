import React, { useState, useRef, useEffect } from 'react';
import './Navbar.scss';
import logo from '../assets/logo.png'; // Replace with actual logo

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }
    if (dropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdown, open]);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="ProVital Logo" />
        <span>ProVital</span>
      </div>
      <div className={`navbar__links ${open ? 'open' : ''}`} aria-label="Main menu">
        <button className="navbar__close" aria-label="Close menu" onClick={() => setOpen(false)}>&times;</button>
        <a href="#doctors">Doctors</a>
        <a href="#practice">List your practice</a>
        <a href="#employers">For Employers</a>
        <a href="#courses">Courses</a>
        <a href="#books">Books</a>
        <a href="#speakers">Speakers</a>
        <div className="navbar__login-dropdown" ref={dropdownRef}>
          <button onClick={() => setDropdown(!dropdown)} aria-haspopup="true" aria-expanded={dropdown} aria-label="Login or Signup dropdown">Login / Signup</button>
          {dropdown && (
            <div className="dropdown-menu desktop">
              <div className="dropdown-section">
                <span>Doctor</span>
                <a href="#doctor-login">Login</a>
                <a href="#doctor-signup">Sign up</a>
              </div>
              <div className="dropdown-section">
                <span>Patients</span>
                <a href="#patient-login">Login</a>
                <a href="#patient-signup">Sign up</a>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="navbar__toggle" aria-label="Open menu" onClick={() => setOpen(true)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {open && <div className="navbar__overlay" onClick={() => setOpen(false)}></div>}
    </nav>
  );
};

export default Navbar; 