import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <div className="flex-grow">
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;