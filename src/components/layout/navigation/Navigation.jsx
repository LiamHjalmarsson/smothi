import React from 'react';
import { FaUserCircle, FaSignInAlt, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const showSearch = useSelector(state => state.ui.searchIsVisible);

    let { isLoggedIn, user } = useSelector(state => state.auth);

    return (
        <header className="p-6 text-black fixed w-full bg-white shadow-sm_middle">
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
            {
                showSearch && (
                    <div className='mt-2 relative'>
                        <div className="flex items-center justify-center border-b-2 border-gray-300">
                            <label htmlFor="search" className="pl-3">
                                <FaSearch />
                            </label>
                            <input
                                id="search"
                                type="text"
                                name='search'
                                className="w-full py-2 pl-4 pr-4 focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>
                )
            }
        </header>
    );
}

export default Navigation;
