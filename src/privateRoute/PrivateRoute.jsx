/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);
    if (isLoading) {
        return <progress className="progress w-56"> </progress>
    }

    if (user) {
        return children;
    }
    else{
        alert ('please log in first') ;
    }
    return <>
        < Navigate state={{ from: location }} to="/login" replace></Navigate>
    </>;
};

export default PrivateRoute;