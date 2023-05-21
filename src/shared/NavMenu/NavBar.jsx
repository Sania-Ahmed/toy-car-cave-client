/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/506287.png'
import { AuthContext } from '../../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
    }
    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/AllToys'>All Toys</Link></li>
        {
            user && <>
                <li><Link to='/MyToys'>My toys</Link></li>
                <li><Link to='/AddToys'>Add toys</Link></li>
            </>
        }
        <li><Link to='/blogs'>Blogs</Link></li>
    </>
    return (
        < div className="navbar md:text-white bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <img src={img} className='w-14 h-14' alt="" />
                <h4 className='font-bold text-xl ml-2'>Car Cave</h4>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <Link onClick={handleLogOut} className='mr-2'>log out</Link>
                            < div className="w-10 rounded-full tooltip tooltip-left tooltip-info" data-tip={`${user.displayName || 'Name unavailable'}`}>
                            <img className='rounded-full w-full'  src={user?.photoURL} />
                            </div>
                        </> : <Link
                            to={'/login'}> <button className='btn btn-primary'>Login</button> </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;