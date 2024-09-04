import React from 'react';
import logo from "/logo.png";

const Promotion = ({ title, discount, text}) => {
    return (
        <div className=''>
            <h2 className='text-xl font-bold mb-4'>
                {title}
            </h2>

            <div className='relative bg-primary_500 p-4 rounded-lg text-white'>
                <div className='w-4/5 pr-8'>
                    <p className='sm'>
                        {text}
                    </p>
                    <h3 className='text-lg font-semibold'>
                        {discount}
                    </h3>
                </div>
                <div className='absolute -top-8 right-1 w-24'>
                    <img src={logo} alt="" className='' />
                </div>
            </div>
        </div>
    );
}

export default Promotion;
