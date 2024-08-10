import React from 'react';

const Card = ({ number, title, description, icon }) => {
  return (
    <div className="bg-red-500 shadow-md rounded-lg p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="text-blue-600 text-4xl">{icon}</div>
        <div className="text-gray-500 text-3xl font-bold">{number}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card 
        number="1" 
        title="Cryptocurrency Trading" 
        description="Experience the excitement and potential of the cryptocurrency market with our expert trading services." 
        icon={<i className="fas fa-coins"></i>} // You can use an icon library like Font Awesome
      />
      <Card 
        number="2" 
        title="Portfolio Management" 
        description="We analyze market trends, manage risks, and optimize your portfolio to maximize returns and achieve your financial goals." 
        icon={<i className="fas fa-chart-line"></i>}
      />
      <Card 
        number="3" 
        title="Investment Advice" 
        description="Our team of experienced advisors will guide you in making informed investment decisions, whether you're a beginner trader." 
        icon={<i className="fas fa-hand-holding-usd"></i>}
      />
      <Card 
        number="1" 
        title="Cryptocurrency Trading" 
        description="Experience the excitement and potential of the cryptocurrency market with our expert trading services." 
        icon={<i className="fas fa-coins"></i>} // You can use an icon library like Font Awesome
      />
      <Card 
        number="2" 
        title="Portfolio Management" 
        description="We analyze market trends, manage risks, and optimize your portfolio to maximize returns and achieve your financial goals." 
        icon={<i className="fas fa-chart-line"></i>}
      />
      <Card 
        number="3" 
        title="Investment Advice" 
        description="Our team of experienced advisors will guide you in making informed investment decisions, whether you're a beginner trader." 
        icon={<i className="fas fa-hand-holding-usd"></i>}
      />
      {/* Add more cards as needed */}
    </div>
  );
};

export default Cards;
