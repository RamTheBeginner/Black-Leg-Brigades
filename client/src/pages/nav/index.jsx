import { doSignOut } from "@/config/auth";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@radix-ui/react-avatar";
import { useAuth } from "@/contexts/auth";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  const navigate = useNavigate();
  const { users } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close the dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[#81a5ba] text-xl py-3 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full h-12 mx-auto px-4 sm:flex sm:items-center sm:justify-between text-black">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <NavLink
            className="flex-none font-semibold text-xl focus:outline-none focus:opacity-80 dark:text-black"
            to="/"
            aria-label="Brand"
          >
            Brand
          </NavLink>
          <button
            className="sm:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu />
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row items-center gap-5 sm:justify-end sm:mt-0 sm:ps-5`}
          ref={dropdownRef}
        >
          <NavLink
            className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger className="border-0">
              <Avatar className="rounded-full overflow-hidden bg-blue-400 w-8 h-8">
                {users.image ? (
                  <img
                    src={users.image}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-white font-semibold">
                    {users.firstName.charAt(0)}
                  </span>
                )}
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                Edit Profile
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
