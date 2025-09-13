import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-[#f8f9fa] text-gray-700 pt-10 pb-6 px-6 md:px-24'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>

        {/* Logo / Nom */}
        <div>
          <h3 className='text-2xl font-bold mb-2'>Foodie Spot</h3>
          <p className='text-sm text-gray-600'>
            Le meilleur du fast-food, préparé avec amour et servi avec passion.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className='text-lg font-semibold mb-3'>Navigation</h4>
          <ul className='space-y-2 text-sm'>
            <li><a href="#home" className='hover:text-amber-500 duration-300'>Accueil</a></li>
            <li><a href="#menu" className='hover:text-amber-500 duration-300'>Menu</a></li>
            <li><a href="#services" className='hover:text-amber-500 duration-300'>Services</a></li>
            <li><a href="#about" className='hover:text-amber-500 duration-300'>À propos</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 className='text-lg font-semibold mb-3'>Suivez-nous</h4>
          <div className='flex justify-center md:justify-start gap-4 text-amber-500 text-xl'>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'><FaFacebookF /></a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'><FaInstagram /></a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='mt-10 border-t pt-4 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} Foodie Spot. Tous droits réservés.
      </div>
    </footer>
  )
}
