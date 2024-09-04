import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = () => {
    // const showSearch = useSelector(state => state.ui.searchIsVisible);

    let { isLoggedIn, user } = useSelector(state => state.auth);

    return (
        <header className="p-6 text-black fixed w-full bg-white shadow-sm_middle z-20">
            <nav className='flex justify-between items-center'>
                <div>
                    <h3>
                        <Link to="/" className="text-2xl font-bold">Smuthi</Link>
                    </h3>
                </div>


                {isLoggedIn && (
                    <Link to={`/profile/${user.id}`} className='flex items-center space-x-2 rounded-full'>
                        <span className='text-sm'>
                            {user.name}
                        </span>
                        <img src={`http://localhost:3000/${user.avatar}`} alt='' className=' rounded-full w-8' />
                    </Link>
                ) || (
                        <Link to={`/login`} className='flex items-center gap-x-2 rounded-full justify-center py-1 px-4 bg-primary_400 text-white'>
                            <span className='text-sm'>
                                Login
                            </span>
                            <FaSignInAlt />
                        </Link>
                    )}

            </nav>
        </header>
    );
}

export default Navigation;
