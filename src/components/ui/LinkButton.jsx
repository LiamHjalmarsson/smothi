import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ children, linkType, ...props }) => {
    let styling = "py-2 px-6 flex justify-center items-center gap-4 cursor-pointer rounded-lg tracking-wider font-bold w-full duration-300 transition";

    if (linkType === "secondary") {
        styling += " border text-primary_500 border-primary hover:bg-silver bg-silver"
    } else if ( linkType === "tinary") {
        styling += " text-primary_500"
    } else {
        styling += " border bg-primary_500 text-white hover:bg-primary_400 border-primary_400"
    }

    return (
        <Link className={styling} {...props}>
            {children}
        </Link>
    );
}

export default LinkButton;
