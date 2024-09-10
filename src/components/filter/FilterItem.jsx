import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const FilterItem = ({ title, isActive, ...props }) => {
    return (
        <li className={`${isActive ? " scale-110" : ""} transition-transform duration-300`}>
            <button {...props}>
                <div className={`p-5 rounded-lg ${isActive ? "bg-primary_200 text-white" : "bg-silver"} transition-colors duration-300`}>
                    <FaUserCircle size={24} />
                </div>
                <span className={`text-sm ${isActive ? "font-semibold" : " font-normal"} transition-transform duration-300`}>
                    {title}
                </span>
            </button>
        </li>
    );
}

export default FilterItem;
