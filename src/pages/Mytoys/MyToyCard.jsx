/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';

const MyToyCard = ({ myToy, handleDelete }) => {
    const { _id,seller_name, seller_email, toy_name, sub_category, price, rating, quantity, details, photo } = myToy;

   

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toy_name}</div>
                        <div className="text-sm opacity-50">{sub_category}</div>
                        <div className="text-sm opacity-50">${price}</div>
                        <div className="text-sm opacity-50">ratings: {rating}</div>

                    </div>
                </div>
            </td>
            <td>
                {seller_name}
            </td>
            <td>{quantity}</td>
            <th>
                <Link to={`/updateToy/${_id}`}>
                <button className="btn btn-ghost btn-xs">Update</button>
                </Link>
            </th>
        </tr>
    );
};

export default MyToyCard;