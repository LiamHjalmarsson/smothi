import React from 'react';

const Button = ({ children, btnType, ...props }) => {
    let styling = "py-2 px-6 flex justify-center items-center gap-4 cursor-pointer rounded-lg tracking-wider font-bold w-full duration-300 transition";

    if (btnType === "secondary") {
        styling += " border text-primary_500 border-primary hover:bg-silver bg-silver"
    } else if ( btnType === "tinary") {
        styling += " text-primary_500"
    } else {
        styling += " border bg-primary_500 text-white hover:bg-primary_400 border-primary_400"
    }

    return (
        <button className={styling} {...props}>
            {children}
        </button>
    );
}

export default Button;
