import React from "react";
import ServiceCard from "./utils/ServiceCard";
import { faChalkboardTeacher, faLaptop, faBook, faGraduationCap, faUserShield, faBell, faBus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FaArrowRight } from "react-icons/fa";


const Services = () => {
    const cardsData = [
        { cardtitle: 'Online Teaching', content: 'Interactive online classes with experienced teachers.', color: 'black', icon: faChalkboardTeacher },
        { cardtitle: 'E-Library', content: 'Access a vast collection of e-books and study materials.', color: 'black', icon: faBook },
        { cardtitle: 'Student Portal', content: 'A dedicated portal for students to track their progress.', color: 'black', icon: faLaptop },
        { cardtitle: 'Virtual Graduation', content: 'Celebrate milestones with virtual graduation ceremonies.', color: 'black', icon: faGraduationCap },
        { cardtitle: 'Safety & Security', content: 'Ensuring the safety and security of all students and staff.', color: 'black', icon: faUserShield },
        { cardtitle: 'Notifications', content: 'Receive timely notifications about important events and updates.', color: 'black', icon: faBell },
        { cardtitle: 'School Transport', content: 'Safe and reliable transportation services for students.', color: 'black', icon: faBus },
        { cardtitle: 'Event Management', content: 'Organize and manage school events seamlessly.', color: 'black', icon: faCalendarAlt },
      ];
  return (
    <div className="service-container">
      <div className="service-content">
        <h1>Services we do</h1>
        <p>
        Our school management system offers a wide range of services designed to enhance the learning experience and streamline school operations.
        </p>
        <div className="service-grid">
          {cardsData.map((card, index) => (
            <ServiceCard
              key={index}
              cardtitle={card.cardtitle}
              content={card.content}
              color={card.color}
              icon={card.icon}
            />
          ))}
        </div>
        <a href="#" className="hero-btn contact">Contact us<FaArrowRight/></a>
        <a href="#" className="hero-btn schedule-call">Schedule a Call<FaArrowRight/></a>
      </div>
    </div>
  );
};

export default Services;
