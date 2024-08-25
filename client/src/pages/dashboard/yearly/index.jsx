import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaChartComponent from "../charts/components/areachart";
import BarChartComponent from "../charts/components/barchart";
import LineChartComponent from "../charts/components/linechart";
import Charts from "../charts";
import { ComboboxPopover } from "../finances/components/comboBox";
import { transactionChange } from "@/store/reducers/AccountSlice";

const Yearly = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.chart.value);
  const user = useSelector((state) => state.user.value);
  const transaction = useSelector((state) => state.transaction.value);

  const [Categorylist, setCategorylist] = useState([]);
  const [YearList, setYearList] = useState([]);
  const [userdata, setuserdata] = useState(null);
  const [selectedCategaty, setselectedCategaty] = useState("defaultCategory");
  const [selectedYear, setselectedYear] = useState(null);
  const [selecteddata, setselecteddata] = useState(null);
  const [passedData, setpassedData] = useState(null);
  const [changer, setchanger] = useState(0);
  useEffect(() => {
    dispatch(transactionChange(-1));
    setuserdata(user.Transactions);
    setselecteddata(user.Transactions);
  }, []);

  useEffect(() => {
    generatelist();
  }, [userdata]);

  const generatelist = () => {
    if (userdata) {
      let CategoryHash = {};
      let yearHash = {};
      let categary = [];
      let year = [];

      userdata.map((entry) => {
        if (!CategoryHash[entry.Category]) {
          categary.push(entry.Category);
          CategoryHash[entry.Category] = 2;
        }

        if (!yearHash[entry.Date.substring(6)]) {
          year.push(entry.Date.substring(6));
          yearHash[entry.Date.substring(6)] = 2;
        }
      });
      setCategorylist(categary);
      setYearList(year);
      if (year[0]) setselectedYear(year[0]);
    }
  };

  useEffect(() => {
    filterData();
  }, [selectedCategaty, selectedYear, transaction]);

  const filterData = () => {
    let data = user.Transactions;

    if (transaction != -1)
      data = data.filter(
        (transaction1) =>
          transaction1.Account._id === user.Accounts[transaction]._id
      );
    if (selectedCategaty != "defaultCategory")
      data = data.filter((trans) => trans.Category === selectedCategaty);
    data = data.filter((trans) => trans.Date.substring(6) == selectedYear);
    setselecteddata(data);
    setchanger(changer + 1);
  };

  const getMonthName = (monthNumber) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Subtract 1 because months are zero-indexed in JavaScript
    return months[monthNumber - 1];
  };

  useEffect(() => {
    getpasseddata();
  }, [changer]);
  const getpasseddata = () => {
    let Hashmonth = {};
    let Data = [];
    let index = 0;
    if (selecteddata) {
      selecteddata.map((entry) => {
        let month = getMonthName(entry.Date.substring(3, 5));

        if (Hashmonth[month] == undefined) {
          let newdata = {
            name: month,
            Credit: 0,
            Debit: 0,
          };

          newdata[entry.Type] = entry.Amount;
          Data.push(newdata);
          Hashmonth[month] = index;
          index++;
        } else {
          Data[Hashmonth[month]][entry.Type] += entry.Amount;
        }
      });
    }
    
    setpassedData(Data);
  };

  const renderContent = () => {
    switch (num) {
      case 2:
        return <AreaChartComponent data={passedData}/>;
      case 1:
        return <BarChartComponent data={passedData}/>;
      case 3:
        return <LineChartComponent data={passedData}/>;
      default:
        return <LineChartComponent data={passedData}/>;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#dde7ee]">
      <main className="flex-1 p-6 bg-[#dde7ee]">
        <div className="flex items-center justify-between mb-6 bg-[#dde7ee]">
          <h1 className="text-3xl font-semibold">Yearly Transactions</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6 bg-[#dde7ee]">
          <div className="p-4 bg-[#dde7ee] rounded shadow">
            <h2 className="text-xl font-semibold">Transaction Overview</h2>
            <p className="mt-2 text-gray-600">
              Overview of yearly transactions.
            </p>
          </div>
        </div>

        <div className="mt-6 h-auto w-full bg-[#dde7ee] p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Yearly Summary</h2>
          <p className="text-gray-600">
            This section provides a summary of your yearly transactions. Use the
            visualization below to get detailed insights.
          </p>
          <div className="flex items-center">
            <ComboboxPopover />

            <select
              className="ml-4 p-2 border rounded-md mt-7"
              value={selectedCategaty}
              onChange={(e) => {
                setselectedCategaty(e.target.value);
              }}
            >
              <option value="defaultCategory" disabled>
                Select Category
              </option>
              {Categorylist.map((cat) => (
                <option value={cat}>{cat}</option>
              ))}
            </select>

            <select
              className="ml-4 p-2 border rounded-md mt-7"
              value={selectedYear}
              onChange={(e) => {
                setselectedYear(e.target.value);
              }}
            >
              {YearList.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <Charts />
          </div>

          <div className="mt-4">{renderContent()}</div>
        </div>
      </main>
    </div>
  );
};

export default Yearly;
