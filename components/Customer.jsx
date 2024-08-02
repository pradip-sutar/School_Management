import React from 'react'
import CustomerCard from './utils/CustomerCard'

const Customer = () => {
  return (
    <div className="customer-container">
    <div className="customer-content">
      <h1>Real Estate Groups with Us</h1>
      <div className="customer-grid">
        <CustomerCard logo={'https://vichaarlab.com/images/hj.png'}/>
        <CustomerCard logo={'https://vichaarlab.com/images/craft.png'}/>
        <CustomerCard logo={'https://vichaarlab.com/images/sx.png'}/>

    </div>
  </div>
  </div>
  )
}

export default Customer