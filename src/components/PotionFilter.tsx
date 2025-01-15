import React, { useState } from 'react';
import { Potion } from '../types/Potion';
import {filterByLevelRequirement, getPotionsByRarity, findPotionByEffect, calculateCraftingTime} from '../helpers/potionHelpers';

interface PotionFiltersProps {
  potions: Potion[];
  onFilter: (filteredPotions: Potion[]) => void;
}

const PotionFilters: React.FC<PotionFiltersProps> = ({ potions, onFilter }) => {
  const [level, setLevel] = useState(100);
  const [rarity, setRarity] = useState<string | null>(null);
  const [effect, setEffect] = useState('');
  const [craftTime, setCraftTime] = useState<number | null>(null);

  const handleFilter = () => {
    let filteredPotions = potions;

    filteredPotions = filterByLevelRequirement(filteredPotions, level);

    if (rarity) {
      filteredPotions = getPotionsByRarity(filteredPotions, rarity);
    }

    if (effect.trim() !== '') {
      filteredPotions = findPotionByEffect(filteredPotions, effect);
    }

    onFilter(filteredPotions);
  };

  const handleCraftTime = () => {
    const totalTime = calculateCraftingTime(potions);
    setCraftTime(totalTime);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="level" className="block font-medium mb-2 text-gray-950">
          Nivel máximo ({level})
        </label>
        <input
          id="level"
          type="range"
          min="0"
          max="100"
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rarity" className="block font-medium mb-2 text-gray-950">
          Rareza
        </label>
        <select
          id="rarity"
          value={rarity || ''}
          onChange={(e) => setRarity(e.target.value || null)}
          className="w-full p-2 border rounded"
        >
          <option value="">Todas</option>
          <option value="legendary">Legendary</option>
          <option value="epic">Epic</option>
          <option value="mythic">Mythic</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="effect" className="block font-medium mb-2 text-gray-950">
          Efecto secundario
        </label>
        <input
          id="effect"
          type="text"
          value={effect}
          onChange={(e) => setEffect(e.target.value)}
          placeholder="Buscar por efecto"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={handleFilter}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Aplicar Filtros
        </button>

        <button
          onClick={handleCraftTime}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Calcular Tiempo de Creación
        </button>

        {craftTime !== null && (
          <span className="ml-4 font-medium text-gray-950">
            Tiempo total: {craftTime} minutos
          </span>
        )}
      </div>
    </div>
  );
};

export default PotionFilters;

