import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from '../service/authService';
import { useTitle } from '../hook/useTitle';

export const Login = () => {
  useTitle("Login!");
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    const authDetail = {
      username: username.current.value,
      password: password.current.value,
    };

    const data = await login(authDetail, navigate);
    data.token ? navigate("/products") : toast.error(data);
  }

  return (
    <section className="bg-white dark:bg-slate-500 max-w-md mx-auto px-8 py-10 mt-12 mb-12 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white underline underline-offset-4 mb-10">
        Login
      </h2>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
            Username
          </label>
          <input
            ref={username}
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
            Password
          </label>
          <input
            ref={password}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
};
