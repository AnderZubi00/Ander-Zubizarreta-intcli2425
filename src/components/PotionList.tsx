import React, { useState } from 'react';
import { Potion } from '../types/Potion';
import PotionDetailsModal from './PotionDetailsModal';

interface PotionListProps {
  potions: Potion[];
}

const PotionList: React.FC<PotionListProps> = ({ potions }) => {
  const [selectedPotion, setSelectedPotion] = useState<Potion | null>(null);

  const handleCloseModal = () => {
    setSelectedPotion(null);
  };


  return (
    <div className="absolute p-8 overflow-x-auto top-24">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {potions.map((potion) => (
          <div
            key={potion.id}
            className="flex-shrink-0 bg-white shadow-lg rounded-lg w-64 text-center p-4 flex flex-col justify-between "
          >
            <img
              src={`/${potion.image}`}
              alt={potion.name}
              className="w-24 h-24 mx-auto mb-2 rounded-full"
            />
            <h3 className="font-bold text-lg">{potion.name}</h3>
            
            <p className="text-base text-gray-600">
            <strong>Nombre: </strong> {potion.name}</p>
            <p className="text-base text-gray-600">
            <strong>Rareza: </strong> {potion.rarity}</p>
            <p className="text-base text-gray-600">
            <strong>Dropeado por: </strong> {potion.meta.availability.drop_rate.boss}
            </p>
            <p className="text-base text-gray-600">
            <strong>Drop rate: </strong> {potion.meta.availability.drop_rate.chance}
            </p>
            <button
            className="mt-2 px-4 py-1 bg-gray-700 text-white rounded hover:bg-slate-600"
            onClick={() => setSelectedPotion(potion)}
          >
            Ver detalles
          </button>

          {selectedPotion && (
        <PotionDetailsModal potion={selectedPotion} onClose={handleCloseModal} />
      )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default PotionList;







