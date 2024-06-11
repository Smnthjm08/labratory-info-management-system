// eslint-disable-next-line no-unused-vars
import React from "react";
import Laptop from "../../assets/laptop.jpg";
import { useNavigate } from 'react-router-dom';

const Analytics = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">ROLE BASED DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Centrally in one Platform
          </h1>
          <p>
            Intelligent Reporting Solutions <br />
            Seamless Laboratory Automation and Instrument Communication <br />
            Empowering Pathology Networks with Proven Solutions
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 " onClick={() => navigate('/login')}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
