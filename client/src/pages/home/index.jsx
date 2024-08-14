import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

import { doSignOut } from "../../config/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Nav from "../nav";
import { useAuth } from "@/contexts/auth";
import { useSelector } from "react-redux";

import TradingViewWidget from "./ticker";
import TradingViewTickersWidget from "./widget";

const Home = () => {
 const num = useSelector((state) => state.user.value)
  const navigate = useNavigate();
  
  const { users,setprofile,currentUser} = useAuth();

  
  return (
    <>
      <Nav />
      <TradingViewTickersWidget />
   
      <div className="flex w-full">
       
        <div className="flex-grow bg-gray-100">

        </div>

        {/* Right side - TradingView Widget */}
        <div className="pr-2 max-w-lg">
          <TradingViewWidget />
        </div>
      </div>
     
    </>

  );
};

export default Home;
