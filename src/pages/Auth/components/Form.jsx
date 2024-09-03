import React from 'react';
import { Form as RouterForm } from 'react-router-dom';

const Form = ({ title, children, method, action }) => {
    return (
        <div className="w-full">
            <div className="h-full w-full bg-white rounded-t-3xl p-6">
                <h2 className="font-semibold text-xl leading-relaxed">
                    {title}
                </h2>
                <RouterForm 
                    className="flex flex-col gap-4 mt-2" 
                    method={method}
                    action={action}
                >
                    {children}
                </RouterForm>
            </div>
        </div>
    );
}

export default Form;
