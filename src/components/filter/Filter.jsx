import React, { useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import FilterItem from './FilterItem';

const Filter = ({ categoryHandler }) => {
    const categories = useRouteLoaderData("root");
    const [activeCategory, setActiveCategory] = useState(0);

    const categorySelectHandler = (id) => {
        categoryHandler(id);
        setActiveCategory(id);
    }

    return (
        <ul className='flex gap-3 mb-6'>
            <FilterItem
                title="All"
                isActive={activeCategory === 0}
                onClick={() => categorySelectHandler(0)}
            />
            {categories.map(category => (
                <FilterItem
                    title={category.title}
                    key={category.id}
                    onClick={() => categorySelectHandler(category.id)}
                    isActive={activeCategory === category.id}
                />
            ))}
        </ul>
    );
}

export default Filter;
