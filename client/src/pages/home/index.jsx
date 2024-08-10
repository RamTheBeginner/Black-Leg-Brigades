import { Button } from '@/components/ui/button'
import React from 'react'

import {
  doSignOut
} from "../../config/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    doSignOut();
    toast.info("Logged Out Successfully")
  }
  return (
    <>
    <div>Home</div>
    <Button
    className = "bg-red-600"
    onClick = {handleLogout}
    >
      Logout
    </Button>
    </>
  )
}

export default Home