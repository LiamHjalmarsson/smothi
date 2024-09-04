import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const categories = useRouteLoaderData("root");
    const products = useLoaderData();

    return (
        <>
            {categories.map((category) => {
                const categoryProducts = products.filter(product => product.categoryId === category.id);

                return (
                    <Category 
                        title={category.title}
                        products={categoryProducts}
                        key={category.id}
                    />
                );
            })}
        </>
    );
}

export default Categories;
