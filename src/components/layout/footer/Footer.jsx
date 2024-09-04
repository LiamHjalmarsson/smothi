import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/ui-slice';

const Footer = () => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.cart.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }

    return (
        <footer className='fixed z-20 p-6 bottom-0 w-full text-black bg-white shadow'>
            <ul className='flex justify-between items-center text-xl py-1 px-6'>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-primary_500 font-semibold" : "text-black"}>
                        <FaHome />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/search" onClick={toggleCartHandler} className={({ isActive }) => isActive ? "text-primary_500 font-semibold" : "text-black"}>
                        <FaSearch />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? "text-primary_500 relative font-semibold" : "text-black relative"}>
                        {cartQuantity >= 1 && (
                            <span className='absolute top-2 text-xs -right-10 bg-primary_500 text-white flex justify-center items-center w-5 h-5 text-center rounded-full'>
                                {cartQuantity}
                            </span>
                        )}
                        <FaShoppingCart />
                    </NavLink>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
