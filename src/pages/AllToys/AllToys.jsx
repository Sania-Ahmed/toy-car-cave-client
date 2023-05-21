/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import useTitle from '../../hook/useTitle';

const AllToys = () => {
  useTitle('allToy')
  const [loading, setLoading] = useState(true)
  const [toys, setToys] = useState([]);
  const [searched, setSearched] = useState('')
  useEffect(() => {
    fetch('https://toy-car-cave.vercel.app/allCars')
      .then(res => res.json())
      .then(data => setToys(data))
    setLoading(false);
  }, [])
  const handleSearch = () => {
    console.log('clicked')
    fetch(`https://toy-car-cave.vercel.app/searched/${searched}`)
      .then(res => res.json())
      .then(data => setToys(data))
      setLoading(false);
  }
  if (loading) {
    return <progress className="progress w-56"> </progress>
  }
  return (
    <div className="overflow-x-auto w-full">
      <div className='flex gap-5 justify-center items-center my-11'>
        <input className='input-info border p-2 rounded' placeholder='Search here by toy name' type="text" onChange={e => setSearched(e.target.value)} />
        <button className='btn btn-info' onClick={handleSearch}>Search</button>
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Car</th>
            <th>Seller</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            toys.map(toy => <Car toy={toy} key={toy._id}></Car>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;