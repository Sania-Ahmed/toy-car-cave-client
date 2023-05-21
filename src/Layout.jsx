/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './shared/NavMenu/NavBar';
import Footer from './shared/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = () => {

    useEffect( () => {
        AOS.init();
      }, [])
    return (
        <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </>
    );
};

export default Layout;