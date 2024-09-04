import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ image, title, price, id, size }) => {
    return (
        <div>
            <div className='group bg-silver hover:bg-gray_blue duration-300 transition-colors relative p-3 flex flex-col justify-center items-center rounded-lg overflow-hidden h-full'>
                <div className='absolute z-10 p-3 top-0 right-0 bg-red-500 text-white rounded-tr-lg rounded-bl-lg hover:bg-red-400 transition-colors duration-300'>
                    <FaHeart />
                </div>
                <Link to={`product/${title}`}>
                    <img src={`http://localhost:3000/${image}`} alt={title} className='w-28 h-28 mx-auto group-hover:scale-110 transition-transform duration-300 object-contain' />
                    <div className='my-1 w-full content'>
                        <h4 className='font-semibold text-sm text-center'>
                            {title}
                        </h4>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Product;
