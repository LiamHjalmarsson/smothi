import React from 'react';
import logo from "/logo.png";
import { FaPen } from "react-icons/fa";

const Profile = () => {
    return (
        <div className='px-6'>
            <div className='border border-red-400 rounded-full p-2 flex justify-center items-center w-fit mx-auto'>
                <div className='border border-red-400 rounded-full p-2 relative'>
                    <img src={logo} alt="" className='object-cover p-4 w-32 h-32' />
                    <div className=' absolute bottom-0 right-2 text-white bg-primary_400 p-2 rounded-full'>
                        <FaPen size={16}/>
                    </div>
                </div>
            </div>

            <h2 className='text-center font-semibold text-3xl mt-4'>
                John Doe
            </h2>

            <div className='mt-6 '>
                <div className='flex justify-between items-center text-center'>
                    <div>
                        Tacking order
                    </div>
                    <div>
                        Prepearing order 
                    </div>
                    <div>
                        Pick up order
                    </div>
                </div>
                <div>
                    Progress
                </div>
            </div>

            <div className='mx-auto mt-6 p-4 bg-primary_500 text-white rounded-xl flex gap-4 justify-between items-center shadow-sm_middle shadow-gray'>
                <div className='text-center flex-1'>
                    <p className='font-semibold'>
                        Orders
                    </p>
                    <span>
                        15
                    </span>
                </div>
                <div className='text-center flex-1'>
                    <p className='font-semibold'>
                        Favorites
                    </p>
                    <span>
                        2
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
