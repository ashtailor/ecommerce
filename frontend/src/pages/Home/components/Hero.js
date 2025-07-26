
import React from 'react'
import { Link } from 'react-router-dom'
export const Hero = () => {
  return (
      <section className="flex flex-col lg:flex-row items-center justify-center border-b dark:border-gray-900 px-4 py-6">
  
  <div className="lg:w-1/2 text-center lg:text-left">
    <h1 className="text-3xl text-black font-bold underline underline-offset-4 mb-3">
      The Ultimate eBook Store
    </h1>

    <p className=" font-normal text-black-800 dark:text-black text-xl mb-4 px-3">
      CodeBook is an educational web app where users can explore coding tutorials, books, and learning materials.
      The name "CodeBook" is inspired by the term used in cryptography for a secret book of codes. In this project, 
      instead of secret codes, we offer valuable coding resources—like a digital library for developers.
    </p>

    <Link
      to="/products"
      className="text-white inline-block font-semibold rounded-md bg-red-500 px-4 py-2 hover:bg-blue-900 transition"
    >
      Explore eBooks
    </Link>
  </div>

 
  <Link to="/">
    <div className="mt-6 lg:mt-0 lg:ml-6">
      <img
        className="w-72 rounded-lg shadow-md"
        src="assets/Image/CodeBook1.jpg"
        alt="CodeBook"
      />
    </div>
  </Link>
</section>

  )
}
