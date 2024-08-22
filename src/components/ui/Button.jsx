import React from 'react';

const Button = ({ children, ...props }) => {
    return (
        <button className={` py-2 px-6 cursor-pointer bg-silver`} {...props}>
            {children}
        </button>
    );
}

export default Button;
