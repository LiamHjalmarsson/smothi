import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { Link } from 'react-router-dom';

const Product = ({ icon, img, title, price, id }) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
            img
        }));
    }

    return (
        <div className='bg-silver relative p-4 flex flex-col justify-center items-center rounded-lg overflow-hidden'>
            <div className='absolute p-3 top-0 right-0 bg-red-500 text-white rounded-tr-lg rounded-bl-lg hover:bg-red-400 transition-colors duration-300'>
                {icon}
            </div>
            <Link to={title}>
                <img src={img} alt='' className='w-24' />
            </Link>
            <div className='mt-1 w-full content'>
                <h4 className='font-semibold'>
                    {title}
                </h4>
                <div className='w-full flex justify-between items-center mt-1'>
                    <span className='font-semibold text-sm text-red-500'>
                        {price}
                    </span>
                    <span onClick={addToCartHandler}>
                        <FaCartPlus />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Product;
