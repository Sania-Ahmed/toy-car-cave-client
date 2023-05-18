/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './shared/NavMenu/NavBar';
import Footer from './shared/Footer/Footer';

const Layout = () => {
    return (
        <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </>
    );
};

export default Layout;