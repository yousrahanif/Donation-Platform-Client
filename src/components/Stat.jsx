import React from 'react';

const Stat = () => {
    return (
        <div>
            <div className="hero bg-blue-100 mt-4 mb-4">
  <div className="hero-content text-center">
    <div className="">
    <h1 className="text-3xl font-semibold text-center p-2 ">Our Fundraising Progress</h1>
    <p className="py-6">
      <div className="stats shadow">
  <div className="stat place-items-center  bg-blue-100">
    <div className="stat-value">31K</div>
    <div className="stat-title">Projects are Completed</div>

  </div>


  <div className="stat place-items-center  bg-blue-100">
    <div className="stat-value">43K</div>
    <div className="stat-title">Categories Served</div>

  </div>
  <div className="stat place-items-center  bg-blue-100">
    <div className="stat-value">88K</div>
    <div className="stat-title">Happy Customers</div>

  </div>
</div>
      </p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Stat;