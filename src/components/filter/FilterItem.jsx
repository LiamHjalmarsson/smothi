import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const FilterItem = ({ title, isActive }) => {
    return (
        <li className='text-center'>
            <div className={`p-5 rounded-lg ${isActive ? "bg-primary_200 text-white" : "bg-silver"}`}>
                <FaUserCircle size={24} />
            </div>
            <span className='text-xs'>
                {title}
            </span>
        </li>
    );
}

export default FilterItem;
