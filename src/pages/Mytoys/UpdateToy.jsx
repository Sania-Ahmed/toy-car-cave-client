/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hook/useTitle';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    useTitle('update') ;
    const toy = useLoaderData() ;
    const {_id,seller_name, seller_email, toy_name, sub_category, price, rating, quantity, details, photo} = toy
    console.log(toy)
    const {user} = useContext(AuthContext);
    const updateToy = (e) => {
        e.preventDefault() ;
        const form = e.target;
        
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
     
        const updatedtoy = {
            seller_name: user?.displayName ,
            seller_email: user?.email,
            toy_name,
            sub_category,
            price,
            rating,
            quantity,
            details,
            photo
        }
        console.log(updatedtoy)

        fetch(`https://toy-car-cave.vercel.app/updateCar/${_id}`, 
        {
            method: 'PUT',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(updatedtoy)

        })
        .then(res => res.json())
        .then( data => {
            if(data.modifiedCount > 0) {
                Swal.fire(
                    'Updated!',
                    'Your Toy has been updated.',
                    'success'
                  )
            }
        })



    }
    

  
    return (
        <div className='p-4'>
            <h3 className='my-5 font-semibold text-center text-4xl'>Update a Toy</h3>
            <form onSubmit={updateToy} className='bg-sky-700 p-6 rounded-lg' >
                
               
                <input type="text" defaultValue={price} name='price' placeholder="price" className="input my-4 ml-4 input-bordered input-primary w-1/4 " />
                
                <input type="text" defaultValue={quantity} name='quantity' placeholder="Available Quantity" className="input my-4 ml-4 input-bordered input-primary w-1/4 " />
                <input type="text" defaultValue={details} name='details' placeholder="detail description" className="input my-4 input-bordered input-primary ml-4 w-full " />
              

                <div className='flex justify-center w-full'>
                    <input type="submit" className='w-1/2 btn ' value="Update" />
                </div>

            </form>
        </div>
    );
};

export default UpdateToy;