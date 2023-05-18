/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/506287.png'

const NavBar = () => {
    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/AllToys'>All Toys</Link></li>
        <li><Link to='/MyToys'>My toys</Link></li>
        <li><Link to='/AddToys'>Add toys</Link></li>
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
                <Link className='mr-2'>log out</Link>
                <div className="w-10 rounded-full">
                    <img src="https://img.freepik.com/free-icon/people_318-399336.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=sph" />
                </div>
            </div>
        </div>
    );
};

export default NavBar;