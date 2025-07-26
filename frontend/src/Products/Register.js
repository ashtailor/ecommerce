import React from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../service/authService'
import { useTitle } from '../hook/useTitle'

export const Register = () => {
    useTitle("Register");
    const navigate = useNavigate();

    async function handleRegister(event) {
        event.preventDefault();
        const authDetail = {
            username: event.target.name.value.trim(),
            email: event.target.email.value.trim(),
            password: event.target.password.value.trim()
        };

        register(authDetail, navigate);
    }

    return (
        <main className='bg-white min-h-screen flex items-center justify-center px-4 py-12'>
            <div className='w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-8'>
                <h2 className='text-3xl font-bold text-center mb-8 underline underline-offset-4'>Register</h2>

                <form onSubmit={handleRegister} className='space-y-6'>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Enter your username'
                            className='mt-1 block w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter your email'
                            className='mt-1 block w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Enter your password'
                            className='mt-1 block w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                            required
                        />
                    </div>

                    <div className='text-center'>
                        <button
                            type='submit'
                            className='w-full bg-red-500 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300'
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}
