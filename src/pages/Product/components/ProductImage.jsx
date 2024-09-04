import React from 'react';
import { FaArrowLeft, FaHeart, FaRegHeart  } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductImage = ({ image, name }) => {
    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate(-1);
    };

    return (
        <div className='px-6 py-6'>
            <div className='relative'>
                <FaArrowLeft className='absolute top-0 left-0 z-20 text-white' size={24} onClick={goBackHandler} />
                <div className='p-8 absolute w-full h-full'>
                    <div className='relative h-full'>
                        <div className='p-4 absolute top-0 w-full h-full bg-white rounded-full bg-opacity-30'></div>
                    </div>
                </div>
                <img src={`http://localhost:3000/${image}`} alt={name} />
                {/* <FaHeart className='absolute top-0 right-0 z-20 text-white' size={24} /> */}
                <FaRegHeart className='absolute top-0 right-0 z-20 text-white' size={24} />
            </div>
        </div>

    );
}

export default ProductImage;
