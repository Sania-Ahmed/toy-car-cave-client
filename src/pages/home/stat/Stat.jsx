/* eslint-disable no-unused-vars */
import React from 'react';

const Stat = () => {
    return (
        <div className='mt-20 w-full flex justify-center'>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-2/3 ">
  
  <div className="stat">
    <div className="stat-title">Happy Kids</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default Stat;