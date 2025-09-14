import React, { useState } from 'react';

const menusDisponibles = ['Cheeseburger Classique', 'Double Bacon Classique', 'Frite Maison', 'Frite Cheddar & Bacon', 'Brownie Fondant'];
const boissonsDisponibles = ['Coca','Sprite', 'Fanta', 'Ice Tea', 'Eau'];

export default function Commande() {
  const [commandes, setCommandes] = useState([{ menu: '', boisson: '', quantite: 1 }]);
  const [showModal, setShowModal] = useState(false);
  const [derniereCommande, setDerniereCommande] = useState([]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newCommandes = [...commandes];
    newCommandes[index][name] = name === 'quantite' ? parseInt(value) : value;
    setCommandes(newCommandes);
  };

  const ajouterLigne = () => {
    setCommandes([...commandes, { menu: '', boisson: '', quantite: 1 }]);
  };

  const supprimerLigne = (index) => {
    const newCommandes = commandes.filter((_, i) => i !== index);
    setCommandes(newCommandes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lignesInvalides = commandes.filter(c => c.menu === '' && c.boisson === '');
    if (lignesInvalides.length > 0) {
      alert("Chaque ligne doit contenir au moins un menu ou une boisson.");
      return;
    }

    console.log('Commande envoyée :', commandes);
    setDerniereCommande(commandes);
    setShowModal(true); // afficher la modale
    setCommandes([{ menu: '', boisson: '', quantite: 1 }]); // réinitialiser le formulaire
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className='py-20 px-6 md:px-24 bg-gray-100 relative'>
      <h2 className='text-4xl font-bold text-center mb-12'>Commandez votre Menu</h2>

      <form
        onSubmit={handleSubmit}
        className='max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-8'
      >
        {commandes.map((commande, index) => (
          <div key={index} className='border-b pb-6'>
            <h3 className='text-xl text-red-500 font-semibold mb-4'>Menu #{index + 1}</h3>

            <div className='grid md:grid-cols-3 gap-4'>
              {/* Menu */}
              <div>
                <label className='block font-medium mb-1'>Menu (facultatif)</label>
                <select
                  name='menu'
                  value={commande.menu}
                  onChange={(e) => handleChange(index, e)}
                  className='w-full border border-gray-300 rounded-md px-4 py-2'
                >
                  <option value=''>-- Aucun menu --</option>
                  {menusDisponibles.map((menu, i) => (
                    <option key={i} value={menu}>{menu}</option>
                  ))}
                </select>
              </div>

              {/* Boisson */}
              <div>
                <label className='block font-medium mb-1'>Boisson (facultatif)</label>
                <select
                  name='boisson'
                  value={commande.boisson}
                  onChange={(e) => handleChange(index, e)}
                  className='w-full border border-gray-300 rounded-md px-4 py-2'
                >
                  <option value=''>-- Aucune boisson --</option>
                  {boissonsDisponibles.map((boisson, i) => (
                    <option key={i} value={boisson}>{boisson}</option>
                  ))}
                </select>
              </div>

              {/* Quantité */}
              <div>
                <label className='block font-medium mb-1'>Quantité</label>
                <input
                  type='number'
                  name='quantite'
                  value={commande.quantite}
                  onChange={(e) => handleChange(index, e)}
                  min='1'
                  className='w-full border border-gray-300 rounded-md px-4 py-2'
                />
              </div>
            </div>

            {/* Supprimer */}
            {commandes.length > 1 && (
              <div className='mt-4 text-right'>
                <button
                  type='button'
                  onClick={() => supprimerLigne(index)}
                  className='text-red-500 cursor-pointer px-2 py-1 hover:bg-red-500 hover:text-white duration-500 rounded-lg text-md'
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Ajouter un article */}
        <div className='text-center'>
          <button
            type='button'
            onClick={ajouterLigne}
            className='text-blue-600 hover:underline font-medium'
          >
            + Ajouter un article
          </button>
        </div>

        {/* Bouton Commander */}
        <button
          type='submit'
          className='w-full bg-red-500 hover:bg-red-600 cursor-pointer text-white font-semibold py-3 rounded-md transition duration-500'
        >
          Commander
        </button>
      </form>

      {/* MODALE DE CONFIRMATION */}
      {showModal && (
        <div className='fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full'>
            <h3 className='text-2xl font-bold mb-4 text-center'>Commande Confirmée ✅</h3>
            <div className='space-y-3 max-h-60 overflow-y-auto'>
              {derniereCommande.map((commande, index) => (
                <div key={index} className='text-sm border-b pb-2'>
                  <p><strong>Article {index + 1}</strong></p>
                  {commande.menu && <p>Menu : {commande.menu}</p>}
                  {commande.boisson && <p>Boisson : {commande.boisson}</p>}
                  <p>Quantité : {commande.quantite}</p>
                </div>
              ))}
            </div>
            <div className='mt-6 text-center'>
              <button
                onClick={closeModal}
                className='bg-red-500 hover:bg-red-600 duration-500 cursor-pointer text-white font-semibold px-6 py-2 rounded-md'
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
