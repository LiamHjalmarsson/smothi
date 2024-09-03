import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import InputRow from "../../components/form/InputRow";
import Header from './components/Header';
import Form from './components/form';
import Buttons from './components/Buttons';
import { redirect, useActionData } from 'react-router-dom';

export let singUpAction = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const resource = await response.json();

        if (!response.ok) {
            throw new Error(resource.message || 'Something went wrong');
        }

        return redirect("/");
    } catch (error) {
        return { error: error.message };
    }
}

const SignUp = () => {
    let data = useActionData();

    return (
        <section className="flex flex-col justify-between items-center h-screen bg-custom-gradient shadow-2xl">
            <Header />

            <Form
                title="Sign up to your account"
                action="/signup"
                method="POST"
            >

                <InputRow
                    label="Name"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    icon={<FaUser />}
                />

                <InputRow
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    icon={<FaEnvelope />}
                />

                <InputRow
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    icon={<FaLock />}
                />

                <InputRow
                    label="Confirm Password"
                    id="password_confirm"
                    type="password_confirm"
                    name="password_confirm"
                    placeholder="Confirm Password"
                    icon={<FaLock />}
                />

                {data?.error && (
                    <p className='text-sm text-red-600 text-center'>
                        {data.error}
                    </p>
                )}

                <Buttons
                    submitText="Register"
                    text="Already have an account"
                    path="login"
                    pathText="Log in"
                />
            </Form>
        </section>
    );
}

export default SignUp;
