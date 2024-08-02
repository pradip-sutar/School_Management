import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
const NewservicesCard = ({ title, color, backgroundcolor }) => {
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState(color);
  return (
    <div
      className="card"
      style={{ color: textColor, backgroundColor: bgColor }}
      onMouseEnter={() => {
        setBgColor(backgroundcolor);
        setTextColor("white");
      }}
      onMouseLeave={() => {
        setBgColor("");
        setTextColor(color);
      }}
    >
      <div className="card-content">
        <div className="left-half">
        <FontAwesomeIcon icon={faSchool} size="3x"/>
        </div>
        <div className="right-half">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default NewservicesCard;
