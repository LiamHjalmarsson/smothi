import React from 'react';

const Section = ({ children }) => {
    return (
        <section className='flex flex-col px-6 flex-1'>
            {children}
        </section>
    );
}

export default Section;
