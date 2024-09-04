import React from 'react';
import { cartActions } from '../../../store/cart-slice';
import { useDispatch } from 'react-redux';

const AddToCart = ({ id, title, price, image, size }) => {
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
        <button 
            className='fixed bottom-0 left-0 right-0 px-16 py-3 bg-primary_500 duration-300 transition-colors hover:bg-primary_400 w-fit mx-auto rounded-t-full text-white font-bold text-lg' 
            onClick={addToCartHandler}
        >
            Add to Cart
        </button>
    );
}

export default AddToCart;
