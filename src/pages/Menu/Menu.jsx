import React, { useState } from 'react';
import Promotion from '../../components/promotion/Promotion';
import Categories from '../../components/category/Categories';
import Filter from '../../components/filter/Filter';
import Section from '../../components/layout/section/Section';
import { useLoaderData } from 'react-router-dom';

export const productsLoader = async () => {
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
    const products = useLoaderData();
    const [filteredProducts, setFilteredProducts] = useState(products);

    const filterHandler = (id) => {
        if (id === 0) {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.categoryId === id);
            setFilteredProducts(filtered);
        }
    }

    return (
        <Section>
            <Filter
                categoryHandler={filterHandler}
            />

            <Promotion
                title="Todays offer"
                text="Todays offer"
                discount="50% on fruit smoothie"
            />

            <Categories
                products={filteredProducts}
            />
        </Section>
    );
}

export default Menu;
