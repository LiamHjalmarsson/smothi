import React from 'react';
import { useSelector } from 'react-redux';

const CartDetails = ({ children }) => {
    let totalPay = useSelector(state => state.cart.totalAmount);

    return (
        <div className=''>
            <h3 className='text-xl font-bold mb-2'>
                Order
            </h3>
            <div className='w-full flex justify-between items-center mb-4'>
                <span className='font-semibold'>
                    Total to pay
                </span>
                <span>
                    {totalPay}
                </span>
            </div>
            {children}
        </div>
    );
}

export default CartDetails;
