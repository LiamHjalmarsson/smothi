import React from 'react';
import Products from '../product/Products';

const Category = ({ title, products }) => {
    return (
        <section className='mt-6'>
            <h2 className='text-2xl font-bold mb-4'>
                {title}
            </h2>

            <Products
                products={products}
            />
        </section>
    );
}

export default Category;
