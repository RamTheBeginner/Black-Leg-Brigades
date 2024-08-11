import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React from "react";
import Nav from "../nav";

const About = () => {
  return (
    <>
      <Nav />
      <div className="p-2">
        <Button className="bg-blue-500">
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <div>About</div>
      </div>
    </>
  );
};

export default About;
