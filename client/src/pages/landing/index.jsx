
import React from 'react';
import ControlledCarousel from './components/carousel';
import Cards from './components/Card';


function LandingPage() {
  return (
    <div className=" h-50%">
   <ControlledCarousel/>
   <div className="justify-center items-center flex py-4 text-blue-500 font-weight-900 text-6xl font-bold animate-slide-up">
              <span>Our Services</span>
   </div>
   <div className='mt-10'>
   <Cards/>
   </div>
   
    </div>
  );
}

export default LandingPage;
