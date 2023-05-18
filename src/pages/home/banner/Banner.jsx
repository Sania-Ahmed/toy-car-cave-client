/* eslint-disable no-unused-vars */
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Banner = () => {
    return (
        <div>
            <div className='text-center'>
                <img className=" animate-bounce mask mask-circle drop-shadow-lg w-64 h-56 mx-auto" src='https://img.freepik.com/free-photo/vintage-miniature-car-fake-landscape_155003-1097.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=ais'></img>


                <ReactTypingEffect className='text-5xl font-semibold uppercase text-white'
        text={["Car Cave!", "Car Cave!"]}
      />

      <br />
            </div>
        </div>
    );
};

export default Banner;