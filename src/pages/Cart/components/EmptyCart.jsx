import React from 'react';
import Promotion from '../../../components/promotion/Promotion';

const EmptyCart = () => {
    return (
        <div>
            <h3 className='text-xl font-bold mb-2'>
                Your cart is empty
            </h3>
            <Promotion
                title="Todays offer"
                text="Todays offer"
                discount="50% on fruit smoothie"
            />
        </div>
    );
}

export default EmptyCart;

