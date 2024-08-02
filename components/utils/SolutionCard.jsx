import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SolutionCard = ({ cardtitle, content, color, icon }) => {
  return (
    <div className="solution-card">
      <div className="icon">
        <FontAwesomeIcon icon={icon} size="2x" style={{ color: '#9A6324' }} />
      </div>

      <h3>{cardtitle}</h3>
      <p style={{ color: color }}>{content}</p>
    </div>
  );
};

export default SolutionCard;
