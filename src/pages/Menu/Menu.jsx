import React from 'react';
import { FaUserCircle, FaHeart } from 'react-icons/fa';
import blackberry from "/blackberry.png";
import Product from '../../components/product/Product';
import Promotion from '../../components/promotion/Promotion';

export let menuAction = async () => {

}

const Menu = () => {
    return (
        <section className='px-6'>
            {/* Filter */}
            <ul className='flex gap-3'>
                <li className='text-center font-semibold tracking-wide'>
                    <div className='p-6 bg-primary_300 rounded-lg'>
                        <FaUserCircle />
                    </div>
                    <span>
                        All
                    </span>
                </li>
                <li className='text-center tracking-wide'>
                    <div className='p-6 bg-silver rounded-lg'>
                        <FaUserCircle />
                    </div>
                    <span>
                        All
                    </span>
                </li>
            </ul>

            <Promotion />

            <div className='mt-6'>
                <h2 className='text-xl font-bold mb-4'>
                    Popular
                </h2>

                <div className='grid grid-cols-2 gap-6'>
                    <Product
                        icon={<FaHeart />}
                        id="2"
                        img={blackberry}
                        title="Strawberry"
                        price={100}
                    />
                    <Product
                        icon={<FaHeart />}
                        id="1"
                        img={blackberry}
                        title="blackberry"
                        price={1020}
                    />
                </div>
            </div>

        </section>
    );
}

export default Menu;
