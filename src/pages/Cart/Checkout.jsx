import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import InputRow from '../../components/form/InputRow';
import { FaCreditCard } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import Button from '../../components/ui/Button';
import chip from "../../assets/credit.png";
import visa from "../../assets/visa.png";

const Checkout = () => {
    return (
        <Form className='flex-grow flex justify-between flex-col'>
            <h2 className='text-xl font-bold ty-4'>
                Credit Card / Debit Card
            </h2>

            <div className='mt-6 flex flex-col'>
                <div className='mb-6 p-6 bg-blue-300 rounded-lg shadow-md'>
                    <div className='flex justify-between items-center'>
                        <img src={chip} className='w-7 rounded-md' />
                        <img src={visa} className='w-24' />
                    </div>
                    <p className='mt-4 tracking-wider'>
                        1111-1111-1111-1111
                    </p>
                    <div className='mt-4'>
                        <div className='flex justify-between items-center mb-1'>
                            <span className='text-xs font-light'>
                                Card Holder
                            </span>
                            <span className='text-xs font-light'>
                                Expires
                            </span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-sm'>
                                Edin Eriksson
                            </span>
                            <span className='text-sm'>
                                09/24
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-6 px-4 py-8 shadow mb-6 rounded-md'>
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
