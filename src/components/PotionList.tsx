import React, { useState } from 'react';
import { Potion } from '../types/Potion';
// import DetallesAvanzados from './DetallesAvanzados';

interface PotionListProps {
  potions: Potion[];
}

const PotionList: React.FC<PotionListProps> = ({ potions }) => {
const [detailModalShown, setDetailModalShown] = useState<boolean>(false);

detailModalShown


  return (
    <div className="p-4 overflow-x-auto">

      <div className="flex space-x-4 min-w-max">
        {potions.map((potion) => (
          <div
            key={potion.id}
            className="flex-shrink-0 bg-white shadow-lg rounded-lg w-64 text-center p-4"
          >
            <img
              src={`/${potion.image}`}
              alt={potion.name}
              className="w-24 h-24 mx-auto mb-2 rounded-full"
            />
            <h3 className="font-bold text-lg">{potion.name}</h3>
            <p className="text-sm text-gray-600">Rareza: {potion.rarity}</p>
            <p className="text-sm text-gray-600">
              Dropeado por: {potion.meta.availability.drop_rate.boss}
            </p>
            <p className="text-sm text-gray-600">
              Drop rate: {potion.meta.availability.drop_rate.chance}
            </p>
            <button
              className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setDetailModalShown(true)}
            >
              Ver detalles
            </button>

            {/* {detailModalShown && (
          <DetallesAvanzados
            potion={potion}
          />
        )} */}

          </div>
        ))}
      </div>
    </div>
  );
};

export default PotionList;



