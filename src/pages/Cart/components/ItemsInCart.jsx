import React from 'react';
import CartItem from './CartItem';

const ItemsInCart = ({ items }) => {
    return (
        <div className='flex-grow'>
            <h2 className='text-xl font-bold mb-4'>
                Your Cart
            </h2>

            <ul className='flex flex-col gap-6'>
                {items.map((item, index) => (
                    <CartItem
                        key={index}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.totalPrice}
                        size={item.size}
                    />
                ))}
            </ul>
        </div>

    );
}

export default ItemsInCart;
