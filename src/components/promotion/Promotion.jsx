import React from 'react';
import logo from "/logo.png";

const Promotion = () => {
    return (
        <div className='mt-6'>
            <h2 className='text-xl font-bold mb-4'>
                Promotion
            </h2>

            <div className='relative bg-primary_500 p-4 rounded-lg text-white'>
                <div className='w-4/5 pr-8'>
                    <p className='sm'>
                        Todays offer
                    </p>
                    <h3 className='text-lg font-semibold'>
                        50% on fruit smoothie
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
