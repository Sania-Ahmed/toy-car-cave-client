/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../banner/Banner';
import Gallery from '../gallery/Gallery';
import Stat from '../stat/Stat';
import Opinion from '../opinion/Opinion';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-28'>
           <Banner></Banner>
           <h2 className='text-4xl font-semibold text-white mt-40 text-center'>SCROLL ON THE IMAGES TO SEE THE 
           GALLERY OF OUR HAPPY KIDS!</h2>
           <Gallery></Gallery>
           <h2 className='text-4xl font-semibold text-white mt-40 text-center'> Our Current Stat</h2>
           <Stat></Stat>
           <h2 className='text-4xl font-semibold text-white mt-40 text-center'> What parents say about us ?</h2>
           <Opinion></Opinion>

        </div>
    );
};

export default Home;