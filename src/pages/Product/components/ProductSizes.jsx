import React from 'react';

const ProductSizes = ({ sizes, price, onSelectSize, selectedSize }) => {
    return (
        <div className='mt-4 mb-12'>
            <h3 className='font-semibold'>
                Size
            </h3>

            <div className='grid grid-cols-4 gap-2 mt-2'>
                {sizes.map((size, index) => (
                    <button 
                        key={index} 
                        onClick={() => onSelectSize(size.size)}
                        className={`p-3 border border-red-400 rounded-lg font-semibold flex-1 duration-300 transition-colors ${selectedSize === size.size ? 'bg-primary_500 text-white hover:bg-primary_400' : 'border-primary_400 text-primary_500 hover:bg-silver'}`}
                    >
                        {size.size}
                    </button>
                ))}
            </div>

            <div className='text-center mt-4 text-red-500 font-semibold'>
                {price} kr
            </div>
        </div>
    );
}

export default ProductSizes;
