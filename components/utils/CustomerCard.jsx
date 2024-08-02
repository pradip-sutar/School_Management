import React from 'react'

const CustomerCard = ({ logo }) => {
  return (
    <div className="customer-card">
      <div className="icon">
      <img src={logo}/>

      </div>


    </div>
  )
}

export default CustomerCard