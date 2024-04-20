import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`bg-gray-900 text-white p-4 flex justify-between items-center transition-all duration-300 ${visible ? '' : 'transform -translate-y-full'}`}>
      <div>
        <span className="font-bold text-xl">YourFinance</span>
      </div>
      <div className="flex justify-between items-center">
        <Link to="/investment" className="text-gray-300 hover:text-gray-200 mx-2 sm:mx-4 transition duration-300">Investment</Link>
        <Link to="/analysis" className="text-gray-300 hover:text-gray-200 mx-2 sm:mx-4 transition duration-300">Analysis</Link>
        <Link to="/profile" className="text-gray-300 hover:text-gray-200 mx-2 sm:mx-4 transition duration-300">Profile</Link>
      </div>
    </div>
  );
};

export default NavBar;
