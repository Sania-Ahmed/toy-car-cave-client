/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyCard from './MyToyCard';
import useTitle from '../../hook/useTitle';


const MyToys = () => {
  useTitle('My toy')
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://toy-car-cave.vercel.app/myCars/${user?.email}`)
      .then(res => res.json())
      .then(data => setMyToys(data))
  }, [user])

  const handleDelete = id => {
    console.log(id)
    const proceed = confirm('Are You sure you want to delete ?')
    if (proceed) {
      fetch(`https://toy-car-cave.vercel.app/myCars/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('deleted successful');
            const remaining = myToys.filter(toy => toy._id !== id);
            setMyToys(remaining);

          }
        })
    }
  }

  const handleSort = () => {
    fetch(`https://toy-car-cave.vercel.app/sortedAllCars/${user?.email}`)
      .then(res => res.json())
      .then(data => setMyToys(data))

  }

  return (
    <div className="overflow-x-auto w-full">
      <button onClick={handleSort} className='btn-outline btn-info btn my-10 ml-5'>Sort by newest</button>
      <table className="table w-full">
        <thead>
          <tr>
            <th>

            </th>
            <th>Car</th>
            <th>Seller</th>
            <th>Quantity</th>
            <th> </th>

          </tr>
        </thead>
        <tbody>
          {
            myToys.map(myToy => <MyToyCard handleDelete={handleDelete} myToy={myToy} key={myToy._id}></MyToyCard>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;