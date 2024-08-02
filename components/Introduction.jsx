import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Headersection = () => {
  return (
    <section className="hero-section">
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to School management system</h1>
        <p>Your one-stop to meet excellent teacher.</p>
        <a href="#" className="hero-btn contact">Contact us<FaArrowRight/></a>
        <a href="#" className="hero-btn schedule-call">Schedule a call<FaArrowRight/></a>
      </div>
      <div className="hero-image">
        <img src="https://img.freepik.com/free-vector/student-using-laptop-library_74855-2539.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722384000&semt=ais_hybrid" alt="Hero" />
      </div>
    </div>
  </section>
  );

};

export default Headersection;
