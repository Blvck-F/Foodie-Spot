import React, { useState } from 'react'
import Home from './pages/Home'
import Book from './components/Book'

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const toggleBooking = () => setIsBookingOpen(prev => !prev);

  return (
    <div>
      <Home toggleBooking={toggleBooking} />

      {isBookingOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 bg-opacity-40 z-40"
            onClick={toggleBooking}
          ></div>
          <Book toggleBooking={toggleBooking} />
        </>
      )}
    </div>
  )
}
