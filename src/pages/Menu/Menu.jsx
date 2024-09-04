import React from 'react';
import { FaUserCircle, FaHeart } from 'react-icons/fa';
import Promotion from '../../components/promotion/Promotion';
import Products from '../../components/product/Products';
import Filter from '../../components/filter/Filter';

export let productsLoader = async () => {
    try {
        let response = await fetch(`http://localhost:3000/api/product`);
        let recourse = await response.json();

        if (!response.ok) {
            throw new Error(resource.message || 'Something went wrong');
        }

        return recourse;
    } catch (error) {
        return { error: error.message };
    }
}

const Menu = () => {
    return (
        <section className='px-6'>
            {/* Filter */}
            <Filter />

            <Promotion />

            <Products
                title="Our Favorites"
            />

        </section>
    );
}

export default Menu;
