import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Category from './Category';

const Categories = ({ products }) => {
    const categories = useRouteLoaderData("root");

    return (
        <>
            {categories.map((category) => {
                const categoryProducts = products.filter(product => product.categoryId === category.id);

                if (categoryProducts.length > 0) {
                    return (
                        <Category
                            title={category.title}
                            products={categoryProducts}
                            key={category.id}
                        />
                    );
                }

                return null;
            })}
        </>
    );
}

export default Categories;
