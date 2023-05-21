/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({toy}) => {
    const {_id, seller_name,seller_email,toy_name,sub_category,price,rating,quantity,details, photo} = toy
    return (
        <tr>
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
              <div className="text-sm opacity-50">{price}</div>
              <div className="text-sm opacity-50"> ratings: {rating}</div>
            </div>
          </div>
        </td>
        <td>
         {seller_name}
        </td>
        <td>{quantity}</td>
        <th>
          <Link to={`/details/${ _id}`}>
          <button className="btn btn-primary btn-md">details</button>
          </Link>
        </th>
      </tr>
    );
};

export default Car;