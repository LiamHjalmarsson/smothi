import React from 'react';
import { Outlet } from 'react-router-dom';
import Section from '../../components/layout/section/Section';

const CartRoot = () => {
    return (
        <Section>
            <Outlet />
        </Section>
    )
}

export default CartRoot;
