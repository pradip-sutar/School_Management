import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

    const ServiceCard = ({cardtitle,content,color,icon}) => {
      return (
        <div className="service-card">
          <div className="icon"><FontAwesomeIcon icon={icon} style={{ color: 'gray' }} size="2x"/></div>
          <h3>{cardtitle}</h3>
          <p style={{'color':color}}>{content}</p>
        </div>
      );
    };



export default ServiceCard