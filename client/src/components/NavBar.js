import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`bg-yellow-400 border-b-5 bordor-white text-white p-4 flex justify-between items-center transition-all duration-300 ${visible ? '' : 'transform -translate-y-full'}`}>
      <div>
        <span className="font-bold text-xl">YourFinance</span>
      </div>
      <div>
        <Link to="/login" className="text-white hover:text-gray-500 mr-4  font-bold transition duration-300">Login</Link>
        <Link to="/signup" className="text-white hover:text-gray-500 transition font-bold duration-300">Sign Up</Link>
      </div>
      
    </div>
  );
};

export default NavBar;
