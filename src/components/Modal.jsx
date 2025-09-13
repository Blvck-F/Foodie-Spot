import React from 'react'

export default function Modal({ isOpen }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-[50%] z-40 bg-amber-500 shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <ul className='text-white p-6 space-y-4 font-bold text-lg'>
        <li><a className='hover:text-white/60 duration-500' href="#home">Accueil</a></li>
        <li><a className='hover:text-white/60 duration-500' href="#about">À propos</a></li>
        <li><a className='hover:text-white/60 duration-500' href="#services">Services</a></li>
      </ul>
    </div>
  )
}
