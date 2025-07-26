import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import useScrollToTop from '../hooks/useScrollToTop';
import { NavbarDemo } from './Navbar';

const Layout = () => {
    useScrollToTop()

    return (
        <>
            <div className='flex flex-col bg-surface min-h-screen overflow-hidden'>
                <NavbarDemo />
                <div className='flex-1'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
