import React, { useState } from 'react';
import { redirect, useLoaderData } from 'react-router-dom';
import ProductImage from './components/ProductImage';
import AddToCart from './components/AddToCart';
import ProductDetail from './components/ProductDetail';
import ProductSizes from './components/ProductSizes';

export let productLoader = async ({ params }) => {
    const { id } = params;

    try {
        const response = await fetch(`http://localhost:3000/api/product/${id}`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Product not found');
            } else {
                throw new Error('Failed to fetch product data');
            }
        }

        const product = await response.json();
        return product;
    } catch (error) {
        return { error: error.message };
    }
};

const Product = () => {
    const product = useLoaderData();
    const [selectedSize, setSelectedSize] = useState(product.sizes[0].size);
    const [selectedPrice, setSelectedPrice] = useState(product.sizes[0].price);

    const selectSizeHandler = (size) => {
        setSelectedSize(size);
        const selected = product.sizes.find(s => s.size === size);

        if (selected) {
            console.log(selected);
            setSelectedPrice(selected.price);
        }
    };

    return (
        <section className='top-0 left-0 absolute h-screen bg-primary_500 w-screen z-30 flex flex-col'>

            <ProductImage
                image={product.image}
                name={product.name}
                id={product.id}
            />

            <div className='flex-grow flex flex-col justify-between bg-white px-6 py-8 rounded-tl-3xl relative'>
                <ProductDetail
                    rating={product.rating}
                    name={product.name}
                    description={product.description}
                />

                <ProductSizes
                    sizes={product.sizes}
                    price={selectedPrice}
                    onSelectSize={selectSizeHandler}
                    selectedSize={selectedSize}
                />

                <AddToCart
                    id={product.id}
                    title={product.name}
                    price={selectedPrice}
                    image={product.image}
                    size={selectedSize}
                />
            </div>
        </section>
    );
}

export default Product;
