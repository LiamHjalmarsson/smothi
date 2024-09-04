import React, { useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import InputRow from "../../components/form/InputRow";
import Header from './components/Header';
import Form from './components/form';
import Buttons from './components/Buttons';
import { redirect, useActionData, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';

export let loginAction = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const resource = await response.json();

        if (!response.ok) {
            throw new Error(resource.message || 'Something went wrong');
        }

        console.log(resource);
        
        return resource;
    } catch (error) {
        return { error: error.message };
    }
}

const Login = () => {
    const data = useActionData();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (data?.user) {
            dispatch(authActions.register({ user: data.user}));
            navigate("/");
        }
    }, [data]);

    return (
        <section className="flex flex-col justify-between items-center h-screen bg-custom-gradient shadow-2xl">
            <Header />

            <Form
                title="Log in to your account"
                action="/login"
                method="POST"
            >
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

                {data?.error && (
                    <p className='text-sm text-red-600 text-center'>
                        {data.error}
                    </p>
                )}

                <Buttons
                    submitText="Login"
                    text="Don't have an account"
                    path="signup"
                    pathText="Sign up"
                />
            </Form>
        </section>
    );
}

export default Login;
