import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/store/reducers/DasboardSlice";
import { Button } from "@/components/ui/button";

const SideNav = () => {
  const num = useSelector((state) => state.switcher.value);
  const dispatch = useDispatch();

  return (
    <aside className="w-64 h-full bg-[#396b89] text-white shadow-lg flex flex-col overflow-y-auto">
      <div className="flex flex-col justify-between mt-6">
        <h2 className="text-2xl font-semibold mb-6 text-center w-3/4 self-center text-amber-600 p-2 bg-[#40799c]">Dashboard</h2>
        <nav className="flex-1">
          <ul className="space-y-4 flex flex-col mt-10 mb-1">
            {[
              { label: "Savings", value: 1 },
              { label: "Overall Transactions", value: 2 },
              { label: "Credit Transactions", value: 3 },
              { label: "Daily Transactions", value: 5 },
              { label: "Weekly Transactions", value: 4 },
              { label: "Monthly Transactions", value: 6 },
              { label: "Yearly Transactions", value: 7 },
              { label: "Manage Finances", value: 8 },
            ].map((item, index) => (
              <li key={index}>
                <Button
                  className="block w-auto rounded bg-transparent text-left ml-2 text-lg font-bold text-amber-500 hover:bg-zinc-800 hover:px-4 hover:py-2 transition-all duration-300"
                  onClick={() => dispatch(change(item.value))}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
