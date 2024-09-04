import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/layout/navigation/Navigation';
import Footer from '../components/layout/footer/Footer';

export const categoriesLoader = async () => {
    try {
        let response = await fetch(`http://localhost:3000/api/category`);
        let recourse = await response.json();
        
        if (!response.ok) {
            throw new Error(resource.message || 'Something went wrong');
        }
        
        return recourse;
    } catch (error) {
        return { error: error.message };
    }
}

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
