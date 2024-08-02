import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faChartBar,
  faUserFriends,

} from "@fortawesome/free-solid-svg-icons";
const iconMap = {
    'School Management System': faChalkboardTeacher,
    'Advanced Analytics': faChartBar,
    'Parent Portal': faUserFriends,

  };
const Featurecard = ({cardtitle,content,color}) => {
    const icon = iconMap[cardtitle];
  return (
    <div className="feature-card">
      <div className="icon">
        <FontAwesomeIcon icon={icon} size="2x" style={{ color: 'gray' }} />
      </div>
      <h3>{cardtitle}</h3>
      <p style={{'color':color}}>{content}</p>
    </div>
  );
};

export default Featurecard;
