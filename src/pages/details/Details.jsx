/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';

const Details = () => {
    useTitle('detail') ;
    const toy = useLoaderData()
    const { _id, seller_name, seller_email, toy_name, sub_category, price, rating, quantity, details, photo } = toy;
    return (
        <div className='my-12 p-4'>
            <h2 className='text-center text-4xl font-bold text-info'>WOW! YOU SEEM INTERESTED ABOUT THIS TOY!! ^-^</h2>
            <div className="card border border-info card-side bg-base-100 shadow-xl mt-9">
            <figure><img src={photo} className='w-1/2 rounded-lg'  /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy_name}</h2>
                <p>{sub_category}</p>
                <p>{details}</p>
                <p>${price}</p>
                <p>ratings: {rating}</p>
                <p>available: {quantity}</p>
                <h2 className="card-title">Seller: {seller_name}</h2>
                <p>{seller_email}</p>
            </div>
        </div>
        </div>
    );
};

export default Details;