/* eslint-disable no-unused-vars */
import React from 'react';

const Blogs = () => {
    return (
        <div className='p-7 my-10 bg-pink-200'>
            <div className='mt-5'>
                <h2 className='text-4xl font-semibold mb-3'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-xl text-slate-600 font-medium'>Access tokens bear the informations a server needs to know to allow a user to access to the requested resources . Meanwhile The refresh token is used to generate a new access token.The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.and A refresh token provides a new access token when the previous one is expired. And in the client side there is two option for storing those tokens : 1. localstorage and 2. cookies .</p>
            </div>
            <div className='mt-5'>
                <h2 className='text-4xl font-semibold mb-3'>Compare SQL and NoSQL databases?</h2>
                <p className='text-xl text-slate-600 font-medium'>
                    SQL : Vertically Scalable . SQL databases are table-based, better for multi-row transactions. <br></br>
                    NoSQL : Horizontally scalable.NoSQL databases are document, key-value, graph, or wide-column stores.NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
            <div className='mt-5'>
                <h2 className='text-4xl font-semibold mb-3'>What is express js? What is Nest JS?</h2>
                <p className='text-xl text-slate-600 font-medium'>
                    express js :  Express is a  framework for  node js web application that provides broad features for building web and mobile applications. <br></br>
                    nest js : It is an open-source Node. js framework for developing challenging backend systems . 
                </p>
            </div>
            <div className='mt-5'>
                <h2 className='text-4xl font-semibold mb-3'>What is MongoDB aggregate and how does it work?</h2>
                <p className='text-xl text-slate-600 font-medium'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.  It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result.</p>
            </div>
        </div>
    );
};

export default Blogs;