import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <div
      className={`bg-gray-900 text-white p-4 flex justify-between items-center transition-all duration-300 ${
        visible ? "" : "transform -translate-y-full"
      }`}
    >
      <div>
        <span className="font-bold text-xl">YourFinance</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="relative mx-2 sm:mx-4">
          <span
            className="text-gray-300 cursor-pointer hover:text-gray-200 transition duration-300"
            onClick={toggleProfileDropdown}
          >
            Profile
          </span>
          {showProfileDropdown && (
            <div className="absolute bg-gray-800 text-white rounded-lg shadow-md mt-2 py-2 w-48 z-10">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700">
                Your Profile
              </Link>
              <Link to="/logout" className="block px-4 py-2 hover:bg-gray-700">
                Logout
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/investment"
          className="text-gray-300 hover:text-gray-200 mx-2 sm:mx-4 transition duration-300"
        >
          Investment
        </Link>
        <Link
          to="/analysis"
          className="text-gray-300 hover:text-gray-200 mx-2 sm:mx-4 transition duration-300"
        >
          Analysis
        </Link>
        <Link
          to="/groups"
          className="text-gray-300 hover:text-gray-200 mx-2 sm:mx-4 transition duration-300"
        >
          Groups
        </Link>
        <Link
          to="/transaction"
          className="text-gray-300 hover:text-gray-200 mx-2 sm:mx-4 transition duration-300"
        >
          Transactions
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
