import React from 'react';

const InputRow = ({ id, icon, type, ...props }) => {

    return (
        <div className="relative w-full">
            <div className="flex items-center justify-center border-b-2 border-gray-300">
                <label htmlFor={id} className="pl-3">
                    {icon}
                </label>
                <input
                    id={id}
                    type={type}
                    {...props}
                    className="w-full py-2 pl-4 pr-4 focus:outline-none bg-transparent"
                />
            </div>
        </div>
    );
};

export default InputRow;
