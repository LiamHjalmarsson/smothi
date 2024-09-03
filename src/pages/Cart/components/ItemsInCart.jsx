import React from 'react';
import Item from '../../../components/cart/Item';

const ItemsInCart = ({ items }) => {
    return (
        <div className='flex-grow'>
            <h2 className='text-xl font-bold mb-4'>
                Your Cart
            </h2>

            <ul className='flex flex-col gap-6'>
                {items.map((item, index) => (
                    <Item
                        key={index}
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.totalPrice}
                    />
                ))}
            </ul>
        </div>

    );
}

export default ItemsInCart;
