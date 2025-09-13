import React, { useState } from 'react'
import Food from '../assets/fast-food.png'
import Modal from './Modal'

export default function Navbar({ toggleBooking }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(prev => !prev)

  return (
    <nav>
      <div className="fixed flex justify-between items-center px-5 top-4 left-1/2 transform -translate-x-1/2 rounded-4xl border-white border-2 w-[250px] md:w-[600px] lg:w-[800px] text-center bg-[#f8f9fa] shadow-lg z-20">
        <div className="flex justify-center items-center gap-2 p-2">
          <img className="w-8 h-8" src={Food} alt="Food" />
          <p className="font-bold text-lg hidden md:block">Foodie Spot</p>
        </div>

        {/* Menu mobile */}
        <div>
          <button className="cursor-pointer" onClick={toggleModal}>
            <i className="ri-menu-3-line text-2xl md:hidden"></i>
          </button>
          <div className="hidden md:inline-block mx-2">
            <ul className="flex gap-4 text-sm font-bold">
              <li>
                <a className="hover:text-amber-500 transition" href="#home">
                  Accueil
                </a>
              </li>
              <li>
                <a className="hover:text-amber-500 transition" href="#about">
                  À propos
                </a>
              </li>
              <li>
                <a className="hover:text-amber-500 transition" href="#services">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bouton réserver */}
        <div className="hidden md:inline-block">
          <button
            onClick={toggleBooking}
            className="bg-[#ff4757] cursor-pointer text-white font-bold px-4 py-2 rounded-lg hover:bg-[#e84118] transition"
          >
            Réserver
          </button>
        </div>
      </div>

      {/* Overlay menu mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleModal}
        ></div>
      )}
      <Modal isOpen={isOpen} toggleModal={toggleModal} />
    </nav>
  )
}
