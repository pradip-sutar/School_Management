import React from 'react';
import Navbar from '../components/Navbar';
import Headersection from '../components/Introduction';
import Feature from '../components/Feature';
import Services from '../components/Services';
import Solution from '../components/Solution'
import Customer from '../components/Customer'
import Newservices from '../components/Newservices';
import Whatweserve from '../components/Whatweserve';
import Footer from '../components/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Headersection/>
    <Feature/>
    <Services/>
    <Solution/>
    <Customer/>
    <div className='new-services'>
    <Newservices/>

    </div>
    <Whatweserve/>
    <Footer/>



    </>
  );
}

export default App;
