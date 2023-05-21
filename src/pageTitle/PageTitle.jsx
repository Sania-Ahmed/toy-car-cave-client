/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({title}) => {
    return (
        <Helmet>
         car cave|{title}
        </Helmet>
    );
};

export default PageTitle;