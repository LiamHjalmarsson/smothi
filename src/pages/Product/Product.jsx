import React from 'react';
import image from "/blackberry.png"
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

let productionAction = () => {

}

const Product = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goBackHandler = () => {
        navigate(-1);
    };

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id: 1,
            title: "blackberry",
            price: 12,
            img: image
        }));
    }

    return (
        <div className='top-0 left-0 absolute h-screen bg-primary_500 w-screen z-10 flex flex-col'>
            <div className='px-6 pt-6'>
                <div className='relative'>
                    <FaArrowLeft className=' absolute top-0 left-0 text-white' size={24} onClick={goBackHandler} />
                    <img src={image} alt="" className='object-contain' />
                </div>
            </div>

            <div className='flex-grow flex flex-col justify-between bg-white px-6 py-8 rounded-tl-3xl relative'>
                <div className='flex w-full justify-between items-center'>
                    <div className='py-2 px-3 bg-primary_500 w-fit rounded-lg text-white flex items-center gap-x-2'>
                        <FaStar size={16} />
                        <span className='font-bold'>
                            4.2
                        </span>
                    </div>
                    <h2 className='font-semibold text-2xl'>
                        Blackberry
                    </h2>
                </div>

                <div className='mt-4'>
                    <p className='leading-relaxed'>
                        Bursting with the sweet flavors of ripe mango and juicy pineapple, it's a perfect blend to cool down and invigorate your senses. Enjoy a taste of the tropics in every sip!
                    </p>
                </div>

                <div className='mt-4 mb-12'>
                    <h3 className='font-semibold'>
                        Size
                    </h3>

                    <div className='flex gap-2 mt-2 flex-wrap'>
                        <button className='p-3 border border-red-400 rounded-lg text-red-500 font-semibold flex-1'>
                            XS
                        </button>
                        <button className='p-3 border border-red-400 rounded-lg text-red-500 font-semibold flex-1'>
                            S
                        </button>
                        <button className='p-3 border border-red-400 rounded-lg text-red-500 font-semibold flex-1'>
                            M
                        </button>
                        <button className='p-3 border border-red-400 rounded-lg text-red-500 font-semibold flex-1'>
                            L
                        </button>
                        <button className='p-3 border border-red-400 rounded-lg text-red-500 font-semibold flex-1'>
                            XL
                        </button>
                    </div>

                    <div className='text-center mt-4 text-red-500 font-semibold'>
                        100 kr
                    </div>
                </div>

                <button className='fixed bottom-0 left-0 right-0 px-16 py-3 bg-red-500 w-fit mx-auto rounded-t-full text-white font-bold text-lg' onClick={addToCartHandler}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;
