import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from './components/EmptyCart';
import ItemsInCart from './components/ItemsInCart';
import CartDetails from './components/CartDetails';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../../components/ui/Button';

const Cart = () => {
    let cartItems = useSelector(state => state.cart.items);

    console.log(cartItems);
    
    return (
        <section className='flex flex-col px-6 flex-1'>
            <div className='flex-grow overflow-y-auto'>
                {cartItems.length === 0 ? <EmptyCart /> : <ItemsInCart items={cartItems} />}
            </div>
            <div className='mt-auto'>
                <CartDetails>
                    <Button>
                        {
                            cartItems.length == 0 && (
                                <>
                                    <span>
                                        See your latest order
                                    </span>
                                </>
                            ) || (
                                <>
                                    <span>
                                        Place order
                                    </span>
                                    <FaShoppingCart size={18} />
                                </>
                            )
                        }
                    </Button>
                </CartDetails>
            </div>
        </section>
    );
}

export default Cart;
