import React from 'react';
import Product from "./Product";

const Products = ({ products }) => {
    return (
        < div className='grid grid-cols-2 gap-6' >
            {
                products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.name}
                        price={product.price}
                        size={product.size}
                        sd={product}
                    />
                ))
            }
        </ div >
    );
}

export default Products;
