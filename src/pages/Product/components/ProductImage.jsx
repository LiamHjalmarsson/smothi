import React, { useState } from 'react';
import { FaArrowLeft, FaHeart, FaRegHeart  } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductImage = ({ image, name, id }) => {
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState(false);

    const goBackHandler = () => {
        navigate(-1);
    };

    const productLikeHandler = () => {
        setIsLiked(prev => !prev);
    }

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
                {
                    isLiked && (
                        <FaHeart className='absolute top-0 right-0 z-20 text-white' size={24} onClick={productLikeHandler} />
                    ) || (
                        <FaRegHeart className='absolute top-0 right-0 z-20 text-white' size={24} onClick={productLikeHandler} />
                    )
                }
            </div>
        </div>

    );
}

export default ProductImage;
