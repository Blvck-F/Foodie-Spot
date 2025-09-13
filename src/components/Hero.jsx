import React from 'react'
import Heropic from '../assets/Hero.webp'

export default function Hero({ toggleBooking }) {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-end bg-black"
      style={{
        backgroundImage: `url(${Heropic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/30 bg-opacity-40 z-0"></div>

      <div className="relative z-10 w-full md:w-1/2 p-6 text-white text-right">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Savourez l'Authentique</h1>
        <p className="text-lg md:text-2xl mb-6">
          Découvrez nos merveilles faites maison avec des ingrédients frais et locaux.
        </p>
        <button
          onClick={toggleBooking}
          className="bg-[#ff4757] px-6 py-3 rounded-lg text-white font-bold hover:bg-[#e84118] transition duration-300"
        >
          Réserver une table
        </button>
      </div>
    </section>
  )
}
