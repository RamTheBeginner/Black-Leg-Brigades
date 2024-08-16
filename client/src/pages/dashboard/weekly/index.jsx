import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaChartComponent from "../charts/components/areachart";
import BarChartComponent from "../charts/components/barchart";
import LineChartComponent from "../charts/components/linechart";
import Charts from "../charts";
import { ComboboxPopover } from "../finances/components/comboBox";
import { transactionChange } from "@/store/reducers/AccountSlice";

function getWeekNumberInMonth(dateString) {
  const [day, month, year] = dateString.split("/").map(Number);
  const givenDate = new Date(year, month - 1, day);
  const dayOfMonth = givenDate.getDate();
  const firstDayOfMonth = new Date(
    givenDate.getFullYear(),
    givenDate.getMonth(),
    1
  );
  const dayOfWeekFirstDay = firstDayOfMonth.getDay();
  const offset = dayOfWeekFirstDay === 0 ? 6 : dayOfWeekFirstDay - 1;
  const weekNumber = Math.ceil((dayOfMonth + offset) / 7);

  return weekNumber;
}

const Weekly = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.chart.value);
  const user = useSelector((state) => state.user.value);
  const transaction = useSelector((state) => state.transaction.value);

  const [Categorylist, setCategorylist] = useState([]);
  const [YearList, setYearList] = useState([]);
  const [MonthList, setMonthList] = useState([]);
  const [WeekList, setWeekList] = useState([
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
  ]);
  const [userdata, setuserdata] = useState(null);
  const [selectedCategory, setselectedCategory] = useState("defaultCategory");

  const [selectedMonth, setselectedMonth] = useState(null);
  const [selectedWeek, setselectedWeek] = useState(null);
  const [selecteddata, setselecteddata] = useState(null);
  const [passedData, setpassedData] = useState(null);
  const [changer, setchanger] = useState(0);
  const [selectedYear, setselectedYear] = useState(null);

  useEffect(() => {
    dispatch(transactionChange(-1));
    setuserdata(user.Transactions);
    setselecteddata(user.Transactions);
  }, []);

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
    generatelist();
  }, [userdata]);

  const generatelist = () => {
    if (userdata) {
      let CategoryHash = {};
      let yearHash = {};
      let monthHash = {};
      let categary = [];
      let year = [];
      let month = [];

      userdata.forEach((entry) => {
        if (!CategoryHash[entry.Category]) {
          categary.push(entry.Category);
          CategoryHash[entry.Category] = 2;
        }

        const entryDate = new Date(entry.Date);
        const yearString = entry.Date.substring(6);

        const monthString = getMonthName(entry.Date.substring(3, 5));
        if (!yearHash[yearString]) {
          year.push(yearString);
          yearHash[yearString] = 2;
        }

        if (!monthHash[monthString]) {
          month.push(monthString);
          monthHash[monthString] = 2;
        }
      });

      setCategorylist(categary);
      setYearList(year);
      setMonthList(month);

      if (year.length > 0) setselectedYear(year[0]);
      if (month.length > 0) setselectedMonth(month[0]);
      setselectedWeek("Week 3");
    }
  };

  useEffect(() => {
    filterData();
  }, [
    selectedCategory,
    transaction,
    selectedYear,
    selectedMonth,
    selectedWeek,
  ]);

  const filterData = () => {
    let data = user.Transactions;

    if (transaction != -1)
      data = data.filter(
        (transaction1) =>
          transaction1.Account._id === user.Accounts[transaction]._id
      );

    if (selectedCategory != "defaultCategory")
      data = data.filter((trans) => trans.Category === selectedCategory);

    data = data.filter(
      (trans) => getMonthName(trans.Date.substring(3, 5)) == selectedMonth
    );
    data = data.filter((trans) => trans.Date.substring(6) == selectedYear);
    data = data.filter(
      (trans) => getWeekNumberInMonth(trans.Date) == selectedWeek.substring(5)
    );
    setselecteddata(data);

    setchanger(changer + 1);
  };

  useEffect(() => {
    getpasseddata();
  }, [changer]);

  const getpasseddata = () => {
    let DayHash = {};
    let Data = [];
    let index = 0;

    if (selecteddata) {
      selecteddata.forEach((entry) => {
        if (DayHash[entry.Date] === undefined) {
          let newdata = {
            name: entry.Date,
            Credit: 0,
            Debit: 0,
          };

          newdata[entry.Type] = entry.Amount;
          Data.push(newdata);
          DayHash[entry.Date] = index;
          index++;
        } else {
          Data[DayHash[entry.Date]][entry.Type] += entry.Amount;
        }
      });
    }

    setpassedData(Data);
  };

  const renderContent = () => {
    switch (num) {
      case 2:
        return <AreaChartComponent data={passedData} />;
      case 1:
        return <BarChartComponent data={passedData} />;
      case 3:
        return <LineChartComponent data={passedData} />;
      default:
        return <LineChartComponent data={passedData} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#dde7ee]">
      <main className="flex-1 p-6 bg-[#dde7ee]">
        <div className="flex items-center justify-between mb-6 bg-[#dde7ee]">
          <h1 className="text-3xl font-semibold">Weekly Transactions</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6 bg-[#dde7ee]">
          <div className="p-4 bg-[#dde7ee] rounded shadow">
            <h2 className="text-xl font-semibold">Transaction Overview</h2>
            <p className="mt-2 text-gray-600">
              Overview of Daily transactions.
            </p>
          </div>
        </div>

        <div className="mt-6 h-auto w-full bg-[#dde7ee] p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Daily Summary</h2>
          <p className="text-gray-600">
            This section provides a summary of your Daily transactions. Use the
            visualization below to get detailed insights.
          </p>
          <div className="flex items-center">
            <ComboboxPopover />

            <select
              className="ml-4 p-2 border rounded-md mt-7"
              value={selectedCategory}
              onChange={(e) => {
                setselectedCategory(e.target.value);
              }}
            >
              <option value="defaultCategory" disabled>
                Select Category
              </option>
              {Categorylist.map((cat) => (
                <option value={cat} key={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              className="ml-4 p-2 border rounded-md mt-7"
              value={selectedWeek}
              onChange={(e) => {
                setselectedWeek(e.target.value);
              }}
            >
              <option value="" disabled>
                Select week
              </option>
              {WeekList.map((month) => (
                <option value={month} key={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              className="ml-4 p-2 border rounded-md mt-7"
              value={selectedMonth}
              onChange={(e) => {
                setselectedMonth(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Month
              </option>
              {MonthList.map((month) => (
                <option value={month} key={month}>
                  {month}
                </option>
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
                <option value={year} key={year}>
                  {year}
                </option>
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

export default Weekly;
