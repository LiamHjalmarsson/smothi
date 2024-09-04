import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import FilterItem from './FilterItem';

const Filter = () => {
    let categories = useRouteLoaderData("root");

    return (
        <ul className='flex gap-3 mb-6'>
            <FilterItem
                title="All"
                isActive={true}
            />
            {categories.map(category => (
                <FilterItem
                    title={category.title}
                    key={category.id}
                />
            ))}
        </ul>
    );
}

export default Filter;
