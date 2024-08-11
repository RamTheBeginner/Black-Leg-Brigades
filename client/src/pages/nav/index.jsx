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
    <div className="flex gap-5 bg-slate-500 justify-center p-2">
      <NavLink
        to={"/home"}
        className={({ isActive }) => (isActive ? "bg-red-200 rounded-md" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "bg-red-200 rounded-md" : "")}
      >
        About
      </NavLink>
      <NavLink to={"/dashboard"}>
        Dashboard
      </NavLink>
      <NavLink to={"/"} onClick={handleLogout}>
        Logout
      </NavLink>
    </div>
  );
};

export default Nav;
