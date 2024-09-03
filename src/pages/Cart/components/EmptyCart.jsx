import React from 'react';
import Promotion from '../../../components/promotion/Promotion';

const EmptyCart = () => {
    return (
        <div>
            <h3 className='text-xl font-bold mb-2'>
                Your cart is empty
            </h3>
            <Promotion />
        </div>
    );
}

export default EmptyCart;

