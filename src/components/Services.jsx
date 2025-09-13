import React from 'react'
import { FaMotorcycle, FaClock, FaUtensils } from 'react-icons/fa'

export default function Services() {
  return (
    <section id='services' className='py-20 px-6 md:px-24'>
      <h2 className='text-4xl font-bold text-center mb-12'>Nos Services</h2>

      {/* Responsive Layout */}
      <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-8 lg:grid lg:grid-cols-3'>
        {/* Service 1 */}
        <div className='bg-white w-full md:w-[45%] lg:w-auto p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300'>
          <FaMotorcycle className='text-4xl text-amber-500 mb-4 mx-auto' />
          <h3 className='text-xl font-semibold mb-2'>Livraison rapide</h3>
          <p className='text-gray-600 text-sm'>
            Commandez depuis chez vous, et notre équipe vous livre en un rien de temps.
          </p>
        </div>

        {/* Service 2 */}
        <div className='bg-white w-full md:w-[45%] lg:w-auto p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300'>
          <FaClock className='text-4xl text-amber-500 mb-4 mx-auto' />
          <h3 className='text-xl font-semibold mb-2'>Service express</h3>
          <p className='text-gray-600 text-sm'>
            Votre commande prête en quelques minutes, sans compromettre la qualité.
          </p>
        </div>

        {/* Service 3 */}
        <div className='bg-white w-full md:w-[45%] lg:w-auto p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 md:mx-auto'>
          <FaUtensils className='text-4xl text-amber-500 mb-4 mx-auto' />
          <h3 className='text-xl font-semibold mb-2'>Cuisine de qualité</h3>
          <p className='text-gray-600 text-sm'>
            Des ingrédients frais et une équipe passionnée pour des plats savoureux.
          </p>
        </div>
      </div>
    </section>
  )
}
