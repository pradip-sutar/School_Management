import React from "react";
import NewservicesCard from "./utils/NewservicesCard";
import { FaArrowRight } from "react-icons/fa";

const Newservices = () => {
  const cards = [
    { title: "Student Management", color: "#00bfa5", backgroundcolor: "#00bfa5" },
    { title: "Staff Management", color: "#9c27b0", backgroundcolor: "#9c27b0" },
    { title: "Attendance Tracking", color: "#1976d2", backgroundcolor: "#1976d2" },
    { title: "Grade Book", color: "#fbc02d", backgroundcolor: "#fbc02d" },
    { title: "Parent Portal", color: "#ff7043", backgroundcolor: "#ff7043" },
    { title: "Library Management", color: "#d32f2f", backgroundcolor: "#d32f2f" },
    { title: "Timetable Scheduling", color: "#1976d2", backgroundcolor: "#1976d2" },
    { title: "Fee Management", color: "#009688", backgroundcolor: "#009688" },
    { title: "Transport Management", color: "#795548", backgroundcolor: "#795548" },
    { title: "Event Management", color: "#d32f2f", backgroundcolor: "#d32f2f" },
  ];

  return (
    <div className="main-layout">
      <div className="cards-left half-circle">
        {cards.slice(0, 5).map((card, index) => (
          <NewservicesCard
            key={index}
            title={card.title}
            color={card.color}
            backgroundcolor={card.backgroundcolor}
          />
        ))}
      </div>
      <div className="center-image">
        <img
          src="https://marketplace.canva.com/EAFbIrf0844/1/0/1600w/canva-blue-minimal-idea-free-education-logo-tr8A9neMpOI.jpg"
          alt="Center"
        />
        <div className="center-text">
          <div className="mid-first">
            <p>Trusted by</p>
            <p>100000+</p>
            <p>Students</p>
          </div>
          <div className="mid-second">
            <p>in</p>
            <p>12</p>
            <p>Countries</p>
          </div>
          <div className="mid-third">
            <p>from</p>
            <p>8</p>
            <p>Domains</p>
          </div>

          <button className="schedule-btn">Schedule a demo <FaArrowRight/></button>
        </div>
      </div>
      <div className="cards-right half-circle">
        {cards.slice(5).map((card, index) => (
          <NewservicesCard
            key={index}
            title={card.title}
            color={card.color}
            backgroundcolor={card.backgroundcolor}
          />
        ))}
      </div>
    </div>
  );
};

export default Newservices;
