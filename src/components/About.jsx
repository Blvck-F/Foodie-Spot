import React from 'react'
import About1 from '../assets/About1.webp'
import About2 from '../assets/About2.jpg'
import About3 from '../assets/About3.webp'

export default function About() {
  return (
    <section id='about' className='py-20 px-6 md:px-24'>
      <h2 className='text-4xl font-bold mb-10 text-center md:text-left'>À propos de nous</h2>

      <div className='flex flex-col md:flex-row items-center md:items-start gap-10'>
        {/* Texte à gauche */}
        <div className='md:w-1/2 text-lg leading-relaxed text-center md:text-left'>
          <p>
            Chez <strong>Foodie Spot</strong>, nous croyons en la qualité et en la fraîcheur.<br />
            Nos plats sont préparés avec des ingrédients locaux et de saison, pour vous offrir une expérience culinaire inoubliable.
          </p>
        </div>

        {/* Galerie d'images — même pour mobile */}
        <div className='relative w-full md:w-1/2 h-[300px] md:h-[400px] flex justify-center items-center'>
          <img
            src={About2}
            alt="About 2"
            className='w-28 sm:w-32 md:w-40 rounded-lg absolute top-0 left-[15%] transform rotate-[-6deg] shadow-lg'
          />
          <img
            src={About1}
            alt="About 1"
            className='w-28 sm:w-32 md:w-40 rounded-lg absolute top-10 left-[30%] transform rotate-2 shadow-lg z-10'
          />
          <img
            src={About3}
            alt="About 3"
            className='w-28 sm:w-32 md:w-40 rounded-lg absolute top-20 left-[45%] transform rotate-[6deg] shadow-lg'
          />
        </div>
      </div>
    </section>
  )
}
