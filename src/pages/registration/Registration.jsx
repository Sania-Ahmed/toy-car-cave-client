/* eslint-disable no-unused-vars */
import React, { useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hook/useTitle';


const Registration = () => {
    useTitle('Register') ;
    const [error, setError] = useState(' ') ;
    const { createUser, updateUser, setUser, setReload } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, photoUrl, email, password)

        createUser(email, password)
            .then(result => {

                const createdUser = result.user;
                console.log(createdUser);
                updateUser(name, photoUrl).then(() => {
                    setReload(true)
                })
                setUser(createdUser);
                form.reset();
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage) ;
                form.reset();
            });
    }
    return (
        <>
            <h3 className='text-2xl font-semibold text-center bg-base-200 pt-6'>Register</h3>
            <p className='text-2xl text-center text-warning font-semibold my-7'>{error}</p>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <form onSubmit={handleRegistration}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email"
                                        name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name='photoUrl' placeholder="Photo Url" className="input input-bordered" />
                                    <label className="label">
                                        <p>Already Have an account ? <Link className='text-primary' to={'/login'}>Login</Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className='btn btn-primary' value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;