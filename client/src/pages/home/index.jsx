import { Button } from "@/components/ui/button";
import React from "react";

import { doSignOut } from "../../config/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Nav from "../nav";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
    
      <div>Home</div>
    </>
  );
};

export default Home;
