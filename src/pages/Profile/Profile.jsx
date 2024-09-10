import React from 'react';
import { FaPen } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Section from '../../components/layout/section/Section';

const Profile = () => {
    let { isLoggedIn, user } = useSelector(state => state.auth);
    let navigate = useNavigate();

    if (!isLoggedIn) {
        return navigate("/login");
    }

    return (
        <Section className='px-6 py-8'>
            <div className='border border-red-400 rounded-full p-2 flex justify-center items-center mx-auto h-48 w-48'>
                <div className='border border-red-400 rounded-full p-2 relative'>
                    <img src={`http://localhost:3000/${user.avatar}`} alt="" className='object-cover rounded-full' />
                    <div className='absolute bottom-2 right-2 text-white bg-primary_400 p-2 rounded-full'>
                        <FaPen size={16} />
                    </div>
                </div>
            </div>

            <h2 className='text-center font-semibold text-3xl mt-4'>
                {user.name}
            </h2>


            <div className='mx-auto mt-8 py-4 px-6 w-full bg-primary_500 text-white rounded-xl flex justify-between items-center shadow-sm_middle shadow-gray'>
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
        </Section>
    );
}

export default Profile;
