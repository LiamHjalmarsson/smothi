import React from 'react';
import Product from './Product';
import { useLoaderData } from 'react-router-dom';

const Products = ({ title }) => {
    const products = useLoaderData("root");

    return (
        <div className='mt-6'>
            <h2 className='text-xl font-bold mb-4'>
                {title}
            </h2>

            <div className='grid grid-cols-2 gap-6'>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.name}
                        price={product.price}
                        size={product.size}
                        sd={product}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
