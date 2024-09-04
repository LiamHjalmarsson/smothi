import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from './components/EmptyCart';
import ItemsInCart from './components/ItemsInCart';
import CartDetails from './components/CartDetails';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../../components/ui/Button';
import LinkButton from '../../components/ui/LinkButton';

const Cart = () => {
    let cartItems = useSelector(state => state.cart.items);

    return (
        <>
            <div className='flex-grow overflow-y-auto'>
                {cartItems.length === 0 ? <EmptyCart /> : <ItemsInCart items={cartItems} />}
            </div>
            <div className='mt-auto'>
                <CartDetails>
                    {
                        cartItems.length == 0 && (
                            <Button>
                                <span>
                                    See your latest order
                                </span>
                            </Button>
                        ) || (
                            <LinkButton 
                                to="checkout"
                            >
                                <span>
                                    Place order
                                </span>
                                <FaShoppingCart size={18} />
                            </LinkButton>
                        )
                    }
                </CartDetails>
            </div>
        </>
    );
}

export default Cart;
