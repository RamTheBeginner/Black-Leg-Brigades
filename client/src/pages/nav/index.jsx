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
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[#81a5ba] text-xl py-3 dark:bg-neutral-800">
    <nav class="max-w-[85rem] h-10 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between text-black ">
      <a class="flex-none font-semibold text-xl focus:outline-none focus:opacity-80 dark:text-black" href="#" aria-label="Brand">Brand</a>
      <div class="flex flex-row items-center gap-5  sm:justify-end sm:mt-0 sm:ps-5">
      <a class="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Home</a>
        <a class="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Dashboard</a>
        <a class="font-medium  hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Services</a>
        <a class="font-medium  hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Profile</a>
      </div>
    </nav>
  </header>
  );
};

export default Nav;
