import React from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { Link } from 'react-router-dom';

const Product = ({ image, title, price, id, size }) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
            image,
            size
        }));
    }

    return (
        <div className='bg-silver hover:bg-gray_blue duration-300 transition-colors relative p-4 flex flex-col justify-center items-center rounded-lg overflow-hidden'>
            <div className='absolute p-3 top-0 right-0 bg-red-500 text-white rounded-tr-lg rounded-bl-lg hover:bg-red-400 transition-colors duration-300'>
                <FaHeart />
            </div>
            <Link to={title}>
                <img src={`http://localhost:3000/${image}`} alt={title} className='w-24 mx-auto' />
                <div className='my-1 w-full content'>
                    <h4 className='font-semibold text-sm text-center'>
                        {title}
                    </h4>
                    {size}
                </div>
            </Link>
        </div>
    );
}

export default Product;
