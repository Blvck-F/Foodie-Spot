import React from 'react'
import Cheese from '../assets/Cheeseburger.webp'
import Double from '../assets/Doublebacon.webp'
import Fries from '../assets/Frites.webp'
import Friescheddar from '../assets/Friescheddar.webp'
import Soda from '../assets/Soda.webp'
import Brownies from '../assets/Brownies.webp'

const menuItems = [
  {
    id: 1,
    category: 'Burgers',
    name: 'Cheeseburger Classique',
    price: '7,50€',
    description: 'Bœuf grillé, cheddar, salade, tomate, sauce maison.',
    image: Cheese,
  },
  {
    id: 2,
    category: 'Burgers',
    name: 'Double Bacon Burger',
    price: '9,00€',
    description: 'Double steak, bacon croustillant, cheddar fondant.',
    image: Double,
  },
  {
    id: 3,
    category: 'Frites',
    name: 'Frites Maison',
    price: '3,00€',
    description: 'Pommes de terre fraîches, croustillantes à souhait.',
    image: Fries,
  },
  {
    id: 4,
    category: 'Frites',
    name: 'Frites Cheddar & Bacon',
    price: '4,50€',
    description: 'Frites croustillantes avec cheddar fondu et bacon.',
    image: Friescheddar,
  },
  {
    id: 5,
    category: 'Boissons',
    name: 'Soda au choix',
    price: '2,00€',
    description: 'Coca, Fanta, Sprite ou Ice Tea.',
    image: Soda,
  },
  {
    id: 6,
    category: 'Desserts',
    name: 'Brownie Fondant',
    price: '3,50€',
    description: 'Brownie au chocolat noir avec éclats de noix.',
    image: Brownies,
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-6 md:px-24">
      <h2 className="text-4xl font-bold mb-12 text-center">Notre Menu</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="text-amber-500 font-bold">{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="text-sm text-gray-500 mt-2 italic">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
