import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
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
                        className="w-full py-2 pl-12 pr-4 bg-transparent border-b-2 border-gray-300 absolute focus:border-primary_500 outline-none text-dark_gray"
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;
