import React, { useState } from 'react';
import { cartActions } from '../../../store/cart-slice';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';

const AddToCart = ({ id, title, price, image, size }) => {
    const dispatch = useDispatch();
    const [isClicked, setIsClicked] = useState(false);

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
            image,
            size
        }));

        setIsClicked(true);
    }

    let removeItems = (e) => {
        e.stopPropagation();
        dispatch(cartActions.removeItemsInCategory({ id }));
        setIsClicked(false); 
    }

    return (
        <button 
            className={`fixed bottom-0 left-0 right-0 px-16 py-3 duration-300 transition-colors w-fit mx-auto rounded-t-full text-white font-bold text-lg ${isClicked ? "bg-primary_500 hover:bg-primary_400" : "bg-green-500 hover:bg-green-400"} `}
            onClick={ isClicked ? removeItems : addToCartHandler}
        >
            {isClicked ? "Remove from cart" : " Add to cart"}
        </button>
    );
}

export default AddToCart;
