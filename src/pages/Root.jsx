import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/layout/navigation/Navigation';
import Footer from '../components/layout/footer/Footer';

const Root = () => {

    return (
        <>
            <Navigation />

            <main className='text-black flex flex-col min-h-screen py-24'>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default Root;
