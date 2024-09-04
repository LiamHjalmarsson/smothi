import React from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const Item = ({ image, title, price, id, quantity, totalPrice, size }) => {
    let dispatch = useDispatch();

    let removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart({ id, size }));
    }

    let addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
            image,
            size
        }));
    }

    let removeItems = () => {
        dispatch(cartActions.removeItemsFromCart({ id, size }));
    }

    return (
        <li className='flex gap-4'>
            <div className='p-4 bg-silver rounded-lg w-20'>
                <img src={`http://localhost:3000/${image}`} alt="" className='object-contain' />
            </div>

            <div className='py-2 flex flex-col justify-between'>
                <p className='text-sm'>
                    {title} 
                </p>
                <span className='text-xs mt-1'>
                    {size}
                </span>
                <div className='flex gap-4 items-center'>
                    <span onClick={removeItemHandler}>
                        <FaMinus size={14} />
                    </span>
                    <span>
                        {quantity}
                    </span>
                    <span className='' onClick={addItemHandler}>
                        <FaPlus size={14} />
                    </span>
                </div>
            </div>

            <div className='py-2 flex-grow flex flex-col justify-between items-end'>
                <span className='text-primary_600 py-2' onClick={removeItems}>
                    <FaTrash size={14} />
                </span>
                <span className='font-semibold'>
                    {totalPrice}
                </span>
            </div>
        </li>
    );
}

export default Item;
