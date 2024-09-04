import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Products from '../../components/product/Products';

const Search = () => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResult] = useState([]);
    const [error, setError] = useState(null);

    const onSearchHandler = async (e) => {
        let value = e.target.value;
        setQuery(value);

        if (value.trim === "") {
            setSearchResult([]);
        }

        try {
            const response = await fetch(`http://localhost:3000/api/search?query=${query}`);
            const recourse = await response.json();

            if (!response.ok) {
                throw new Error(`Failed to fetch search results`);
            }

            setSearchResult(recourse);
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div className='px-6'>
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

            <div className='mt-8'>
                <Products
                    products={searchResults}
                />
            </div>

        </div>
    );
}

export default Search;
