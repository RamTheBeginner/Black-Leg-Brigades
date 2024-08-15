import React from 'react';
import { FaChartLine, FaBalanceScale, FaCalculator, FaUserClock, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';

const cardData = [
  {
    number: "1",
    title: "Track Your Expenses",
    description: "Easily log and categorize your expenses. Our detailed reports help you understand your spending habits and identify areas where you can save.",
    icon: <FaChartLine />,
  },
  {
    number: "2",
    title: "Split Expenses with Friends",
    description: "Easily manage shared expenses by creating groups with friends. Split the bill and track who owes what, ensuring that everyone stays on top of their finances.",
    icon: <FaBalanceScale />,
  },
  {
    number: "3",
    title: "Monitor Your Savings",
    description: "Set savings goals and watch your progress in real-time. Our app makes saving easy by helping you automate your savings strategy.",
    icon: <FaCalculator />,
  },
  {
    number: "4",
    title: "Plan for the Future",
    description: "Use our forecasting tools to plan for upcoming expenses and future financial milestones. We give you the insights needed to stay ahead.",
    icon: <FaUserClock />,
  },
  {
    number: "5",
    title: "Monitor Stocks & Crypto",
    description: "Keep an eye on your investments with real-time updates on stock prices and cryptocurrency values. Stay informed and make smarter investment decisions.",
    icon: <FaShieldAlt />,
  },
  {
    number: "6",
    title: "Stay Secure",
    description: "Your security is our top priority. We use the latest encryption and authentication technologies to keep your financial data safe.",
    icon: <FaHandsHelping />,
  },
];

const Card = ({ number, title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between h-full w-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="text-blue-600 text-5xl">{icon}</div>
        <div className="text-gray-500 text-3xl font-extrabold">{number}</div>
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="w-full h-full p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardData.map((card, index) => (
        <Card 
          key={index} 
          number={card.number} 
          title={card.title} 
          description={card.description} 
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default Cards;
