import { doSignOut } from "@/config/auth";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@radix-ui/react-avatar";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";

const Nav = () => {
  const users = useSelector((state) => state.user.value);
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
    <header className="w-full bg-[#81a5ba] text-xl py-3 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <NavLink
            className="font-semibold text-xl dark:text-black"
            to="/"
            aria-label="Brand"
          >
            Brand
          </NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <DropdownMenu>
          <DropdownMenuTrigger className="sm:hidden text-2xl ">
            <FiMenu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#b2daf1] dark:bg-neutral-700">
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>
               Dashboard
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </NavLink>
            </DropdownMenuItem>

            {/* Profile Dropdown for Mobile */}
            <DropdownMenuItem asChild>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2">
                    <Avatar className="rounded-full overflow-hidden bg-blue-400 w-8 h-8">
                      {users.image ? (
                        <img
                          src={users.image}
                          alt="User Avatar"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white font-semibold">
                          {users.firstName.charAt(0)}
                        </span>
                      )}
                    </Avatar>
                    <span>{users.firstName}</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#f0f0f0] dark:bg-neutral-700">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    Edit Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>

                  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop Menu - Right Aligned */}
        <div className="hidden sm:flex gap-5 ml-auto mr-3">
          <NavLink
            className="font-medium hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
            to="/"
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
            className="font-medium hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="font-medium hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
            to="/services"
          >
            Services
          </NavLink>

          {/* User Account for Desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
              <Avatar className="rounded-full overflow-hidden bg-blue-400 w-8 h-8">
                {users.image ? (
                  <img
                    src={users.image}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white font-semibold">
                    {users.firstName.charAt(0)}
                  </span>
                )}
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-neutral-700">
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                Edit Profile
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
