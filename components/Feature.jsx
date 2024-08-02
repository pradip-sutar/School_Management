import React from "react";
import Featurecard from "./utils/Featurecard";
import { FaArrowRight } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="feature-container">
      <div className="feature-content">
        <h1>Why choose us?</h1>
        <p>
          Our school management system offers a comprehensive set of features
          designed to streamline administrative tasks and enhance the
          educational experience. Whether you're managing a small school or a
          large educational institution, our platform provides the tools you
          need to oversee student records, track attendance, and facilitate
          communication. With our intuitive interface and advanced analytics,
          you can stay on top of your school's performance and make data-driven
          decisions to improve educational outcomes.
        </p>
        <div className="feature-grid">
          <Featurecard
            cardtitle={"School Management System"}
            content={
              "Our school management system offers an all-in-one solution for managing student records, grades, attendance, and communication between teachers, students, and parents."
            }
            color={"black"}
          />
          <Featurecard
            cardtitle={"Advanced Analytics"}
            content={
              "Harness the power of data with our advanced analytics tools. Generate detailed reports and insights on student performance, attendance trends, and academic progress to make informed decisions and drive improvements."
            }
            color={"black"}
          />
          <Featurecard
            cardtitle={"Parent Portal"}
            content={
              "Keep parents informed and engaged with our dedicated parent portal. View grades, attendance records, and upcoming events, and communicate directly with teachers to support student success."
            }
            color={"black"}
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
