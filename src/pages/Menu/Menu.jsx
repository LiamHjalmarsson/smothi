import React from 'react';
import Promotion from '../../components/promotion/Promotion';
import Products from '../../components/product/Products';

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
            <Promotion 
                title="Todays offer"
                text="Todays offer"
                discount="50% on fruit smoothie"
            />

            <Products />
        </section>
    );
}

export default Menu;
