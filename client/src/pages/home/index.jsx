import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

import { doSignOut } from "../../config/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Nav from "../nav";
import { useAuth } from "@/contexts/auth";
import { useSelector } from "react-redux";
const Home = () => {
 const num = useSelector((state) => state.user.value)
  const navigate = useNavigate();
  
  const { users,setprofile,currentUser} = useAuth();

  
  return (
    <>
      <Nav />
    
      <div>Home</div>
    </>
  );
};

export default Home;
