import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Products from '../../components/product/Products';
import { useLoaderData } from 'react-router-dom';
import Section from '../../components/layout/section/Section';

const Search = () => {
    const products = useLoaderData();
    const [searchResults, setSearchResult] = useState(products);

    const onSearchHandler = async (e) => {
        let value = e.target.value;

        if (value.trim() === "") {
            setSearchResult(products);
            return;
        }

        const filteredResults = products.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase())
        );

        setSearchResult(filteredResults);
    }

    return (
        <Section>
            <div className='mt-2 relative'>
                <div className="flex items-center justify-start">
                    <label htmlFor="search" className="pl-3">
                        <FaSearch />
                    </label>
                    <input
                        id="search"
                        type="text"
                        name='search'
                        onChange={onSearchHandler}
                        className="w-full py-2 pl-12 pr-4 bg-transparent border-b-2 border-gray-300 absolute focus:border-primary_500 outline-none text-dark_gray"
                    />
                </div>
            </div>

            {
                searchResults && (
                    <div className='mt-8'>
                        <Products
                            products={searchResults}
                        />
                    </div>
                )
            }
        </Section>
    );
}

export default Search;
