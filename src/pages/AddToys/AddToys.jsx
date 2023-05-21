/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddToys = () => {
    const {user} = useContext(AuthContext);
    const addToy = (e) => {
        e.preventDefault() ;
        const form = e.target;
        const toy_name = form.toy_name.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const toy = {
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
        console.log(toy)


        fetch('https://toy-car-cave.vercel.app/postCar', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(toy)

        })
        .then(res => res.json())
        .then( data => console.log(data))
    }
    return (
        <div className='p-4'>
            <h3 className='my-5 font-semibold text-center text-4xl'>Add a Toy</h3>
            <form onSubmit={addToy} className='bg-sky-700 p-6 rounded-lg' >
                <label className="label">
                    <span className="label-text text-2xl text-white font-semibold">Your details</span>
                </label>
                <input type="text" defaultValue={user?.displayName} name='seller_name' placeholder="Your name here" className="input my-4 input-bordered input-primary ml-4 w-1/4 " />
                <input type="email" defaultValue={user?.email} name='seller_email' placeholder="Your email here" className="input my-4 input-bordered input-primary ml-4 w-1/4 " />
                <br></br>
                <label className="label">
                    <span className="label-text text-2xl text-white font-semibold">Toy Info</span>
                </label>
                <input type="text" name='toy_name' placeholder="Toy Name Here" className="input my-4 input-bordered input-primary ml-4 w-1/4 " />
                <input type="text" name='sub_category' placeholder="Sub category" className="input my-4 input-bordered input-primary ml-4 w-1/3 " />
                <input type="text" name='price' placeholder="price" className="input my-4 ml-4 input-bordered input-primary w-1/4 " />
                <input type="text" name='rating' placeholder="ratings" className="input my-4 input-bordered input-primary ml-4 w-1/6 " />
                <input type="text" name='quantity' placeholder="Available Quantity" className="input my-4 ml-4 input-bordered input-primary w-1/4 " />
                <input type="text" name='details' placeholder="detail description" className="input my-4 input-bordered input-primary ml-4 w-full " />
                <input type="text" name='photo' placeholder="photo url" className="input my-4 input-bordered input-primary ml-4 w-full " />

                <div className='flex justify-center w-full'>
                    <input type="submit" className='w-1/2 btn ' value="Add a Toy" />
                </div>

            </form>
        </div>
    );
};

export default AddToys;