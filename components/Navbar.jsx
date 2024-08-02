import React from 'react';
import '../src/styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src="https://marketplace.canva.com/EAFbIrf0844/1/0/1600w/canva-blue-minimal-idea-free-education-logo-tr8A9neMpOI.jpg" alt="Apptimate Logo" />
          <span>School Management</span>
        </div>
        <ul className="navbar-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Contact</a></li>

        </ul>
        <div className='navbar-btn-div'>
        <li><a href="#" className="navbar-btn">Careers</a></li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
