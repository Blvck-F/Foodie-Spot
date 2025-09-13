import React, { useState } from 'react'

export default function Book({ toggleBooking }) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Optionnel : tu peux fermer la modale automatiquement après un délai, par ex:
    // setTimeout(() => toggleBooking(), 3000)
  }

  return (
    <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
      <button
        onClick={toggleBooking}
        className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
        aria-label="Fermer"
      >
        &times;
      </button>

      <h3 className="text-2xl font-bold mb-4 text-center">Réservez une table</h3>

      {!isSubmitted ? (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Nom</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Heure</label>
            <input
              type="time"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Nombre de personnes</label>
            <input
              type="number"
              min="1"
              max="20"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600 transition"
          >
            Réserver
          </button>
        </form>
      ) : (
        <div className="text-center text-green-600 font-semibold text-lg">
          Merci ! Votre réservation a bien été prise en compte.
        </div>
      )}
    </div>
  )
}
