import React, { useState, useEffect } from 'react';
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
  const [filteredPotions, setFilteredPotions] = useState<Potion[]>(potions);

  useEffect(() => {
    let filtered = potions;

    filtered = filterByLevelRequirement(filtered, level);

    if (rarity) {
      filtered = getPotionsByRarity(filtered, rarity);
    }

    if (effect.trim() !== '') {
      filtered = findPotionByEffect(filtered, effect);
    }

    setFilteredPotions(filtered);
    onFilter(filtered);
    setCraftTime(null); 
  }, [level, rarity, effect, potions, onFilter]);

  const handleCraftTime = () => {
    const totalTime = calculateCraftingTime(filteredPotions);
    setCraftTime(totalTime);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-sm">
      <div className="space-y-4">
        <div>
          <label htmlFor="level" className="block font-medium mb-1 text-gray-950">
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

        <div>
          <label htmlFor="rarity" className="block font-medium mb-1 text-gray-950">
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

        <div>
          <label htmlFor="effect" className="block font-medium mb-1 text-gray-950">
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
      </div>

      <div className="mt-4 flex flex-col space-y-2">
        <button
          onClick={handleCraftTime}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Calcular Tiempo de Creación
        </button>

        {craftTime !== null && (
          <span className="font-medium text-gray-950 text-center">
            Tiempo total: {craftTime} minutos
          </span>
        )}
      </div>
    </div>
  );
};

export default PotionFilters;

