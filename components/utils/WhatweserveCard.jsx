import React from 'react'

const WhatweserveCard = ({image,cardtitle}) => {
    return (
        <div className="serve-card">
         <img src={image}/>
          <h3>{cardtitle}</h3>

        </div>
      );
}

export default WhatweserveCard