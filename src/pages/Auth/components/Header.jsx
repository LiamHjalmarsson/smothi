import React from 'react';
import logo from "/logo.png";

const Header = () => {
    return (
        <header className="flex justify-center items-center flex-col pt-6 flex-1">
            <img src={logo} alt="" className='w-44' />
            <h2 className="font-bold text-3xl text-center leading-relaxed my-2 text-white tracking-wider">
                Enjoy your Smuthi
            </h2>
        </header>
    );
}

export default Header;
