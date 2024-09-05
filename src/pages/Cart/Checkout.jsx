import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import InputRow from '../../components/form/InputRow';
import { FaCreditCard } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import Button from '../../components/ui/Button';

const Checkout = () => {
    return (
        <Form className='flex-grow flex justify-between flex-col'>
            <h2 className='text-xl font-bold ty-4'>
                Credit Card / Debit Card
            </h2>

            <div className='mt-6 flex flex-col'>
                <div className='mb-6 p-4 bg-blue-500'>
                    Card
                </div>
            </div>
            
            <div className='flex flex-col gap-6 px-4 py-8 shadow mb-6'>
                <InputRow
                    id="name"
                    name="name"
                    placeholder="Name on Card"
                    type="text"
                    icon={< FaUser />}
                />

                <InputRow
                    id="card"
                    name="card"
                    placeholder="Card Number"
                    type="text"
                    icon={< FaCreditCard />}
                />

                <div className='grid grid-cols-2 gap-4'>
                    <InputRow
                        id="date"
                        name="date"
                        placeholder="Date"
                        type="text"
                        icon={<BsCalendar2DateFill />}
                    />

                    <InputRow
                        id="cvv"
                        name="cvv"
                        placeholder="Cvv"
                        type="text"
                        icon={<p className='text-xs'> 123 </p>}
                    />
                </div>
            </div>

            <Button>
                Purchase
            </Button>

        </Form >
    );
}

export default Checkout;
