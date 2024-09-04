import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductDetail = ({ rating, name, description }) => {
    return (
        <>
            <div className='flex w-full justify-between items-center'>
                <div className='py-2 px-3 bg-primary_500 w-fit rounded-lg text-white flex items-center gap-x-2'>
                    <FaStar size={16} />
                    <span className='font-bold'>
                        {rating}
                    </span>
                </div>
                <h2 className='ml-4 font-semibold text-2xl'>
                    {name}
                </h2>
            </div>

            <div className='mt-4'>
                <p className='leading-relaxed'>
                    {description}
                </p>
            </div>
        </>
    );
}

export default ProductDetail;
