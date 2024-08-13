import React from "react";
import { useSelector } from "react-redux";
import Stats from "./stats";
import Daily from "./daily";
import Monthly from "./monthly";
import Yearly from "./yearly";
import SideNav from "./sidenav";
import Nav from "../nav";
import Manage from "./finances";
import Account from "./finances/components/account";
import Transactions from "./finances/components/transactions";

const Dashboard = () => {
  const num = useSelector((state) => state);

  const renderContent = () => {
    switch (num.switcher.value) {
      case 0:
        return <Stats />;
      case 1:
        return <Daily />;
      case 6:
        return <Monthly />;
      case 7:
        return <Yearly />;
      case 8:
        return <Manage />;
      case 10:
        return <Account />;
      case 11:
        return <Transactions />;
      default:
        return <Stats />;
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Nav className="h-16 flex-none" />
        <div className="flex flex-1 overflow-hidden">
          <SideNav className="w-72 flex-none h-full " />
          <div className="flex-1 overflow-y-auto">{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
