import React from 'react';
import { FaUserCircle, FaHeart } from 'react-icons/fa';

const Filter = () => {
    return (
        <ul className='flex gap-3'>
            <li className='text-center font-semibold tracking-wide'>
                <div className='p-5 bg-primary_200 text-white rounded-lg'>
                    <FaUserCircle size={24} />
                </div>
                <span>
                    All
                </span>
            </li>
            <li className='text-center tracking-wide'>
                <div className='p-5 bg-silver rounded-lg'>
                    <FaUserCircle size={24} />
                </div>
                <span>
                    All
                </span>
            </li>
        </ul>
    );
}

export default Filter;
