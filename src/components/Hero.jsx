import React from 'react'
import cow from "../assets/cow.png"
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="text-gray-600 body-font bg-white dark:bg-slate-900">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:px-24 md:py-10">
        {/* Text Section */}
        <div className="order-1 md:order-2 lg:flex-grow md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
          <h2 className="text-1xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal mb-4">
            SRI VIDYA DAIRY LIFE
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-8 px-4 md:px-0">
            We are from a small village, Gidajam in Andhra Pradesh, India. Our goal is to provide pure milk to the world.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/items"
              className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 rounded text-lg mb-4 md:mb-0"
            >
              CHOOSE ORDERS
            </Link>
            <Link
              to="/about"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              MORE INFO
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-full">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src={cow}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
