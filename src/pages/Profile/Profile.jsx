import React from 'react';
import logo from "/logo.png";
import { FaPen } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Profile = () => {
    return (
        <div className='px-6 py-8'>
            <div className='border border-red-400 rounded-full p-2 flex justify-center items-center w-fit mx-auto'>
                <div className='border border-red-400 rounded-full p-2 relative'>
                    <img src={logo} alt="" className='object-cover p-4 w-32 h-32' />
                    <div className='absolute bottom-0 right-2 text-white bg-primary_400 p-2 rounded-full'>
                        <FaPen size={16} />
                    </div>
                </div>
            </div>

            <h2 className='text-center font-semibold text-3xl mt-4'>
                John Doe
            </h2>


            <div className='mx-auto mt-8 py-4 px-6 bg-primary_500 text-white rounded-xl flex justify-between items-center shadow-sm_middle shadow-gray'>
                <div className='text-center flex-1'>
                    <p className='font-bold'>
                        Orders
                    </p>
                    <span className='text-lg font-semibold'>15</span>
                </div>
                <div className='text-center flex-1'>
                    <p className='font-bold'>Favorites</p>
                    <span className='text-lg font-semibold'>2</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
