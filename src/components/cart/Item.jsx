import React from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const Item = ({ img, title, price, id, quantity, totalPrice }) => {
    let dispatch = useDispatch();

    let removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    }

    let addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
            img,
        }));
    }

    let removeItems = () => {
        dispatch(cartActions.removeItemsFromCart(id));
    }

    return (
        <li className='flex gap-4'>
            <div className='p-4 w-28 bg-silver rounded-lg'>
                <img src={`http://localhost:3000/${img}`} alt="" />
            </div>
            <div className='py-2 flex flex-col justify-between'>
                <p className='font-semibold'>
                    {title}
                </p>
                <p>
                    {price} kr
                </p>
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
