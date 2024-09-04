import React from 'react';
import Promotion from '../../components/promotion/Promotion';
import Categories from '../../components/category/Categories';
import Filter from '../../components/filter/Filter';
import Section from '../../components/layout/section/Section';

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
    return (
        <Section>
            <Filter />

            <Promotion 
                title="Todays offer"
                text="Todays offer"
                discount="50% on fruit smoothie"
            />

            <Categories />
        </Section>
    );
}

export default Menu;
