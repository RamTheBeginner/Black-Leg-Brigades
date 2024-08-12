import { doSignOut } from "@/config/auth";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    toast.loading("Logging out...");
    try {
      await doSignOut();
      toast.dismiss();
      toast.success("Successfully logged out!");
      navigate("/");
    } catch (error) {
      toast.dismiss();
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[#81a5ba] text-xl py-3 dark:bg-neutral-800">
      <nav className="max-w-[85rem] h-10 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between text-black">
        <NavLink
          className="flex-none font-semibold text-xl focus:outline-none focus:opacity-80 dark:text-black"
          to="/"
          aria-label="Brand"
        >
          Brand
        </NavLink>
        <div className="flex flex-row items-center gap-5 sm:justify-end sm:mt-0 sm:ps-5">
          <NavLink
            className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            to="/profile"
          >
            Profile
          </NavLink>
          <button
            onClick={handleLogout}
            className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
