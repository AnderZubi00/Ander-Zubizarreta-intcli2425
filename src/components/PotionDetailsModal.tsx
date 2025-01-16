import React from 'react';
import { Potion } from '../types/Potion';

interface PotionDetailsModalProps {
  potion: Potion;
  onClose: () => void;
}

const PotionDetailsModal: React.FC<PotionDetailsModalProps> = ({
  potion,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">{potion.name}</h2>
        <img
           src={`/${potion.image}`}
          alt={potion.name}
          className="w-32 h-32 mx-auto mb-4 rounded-full"
        />
        <p className="text-gray-600">
          <strong>Primary Effect:</strong> {potion.effects.primary.attribute} +{potion.effects.primary.value}% for {potion.effects.primary.duration.amount} {potion.effects.primary.duration.unit}
        </p>
        <p className="text-gray-600">
          <strong>Secondary Effects:</strong>
          <ul className="list-disc pl-6">
            {potion.effects.secondary.map((effect, index) => (
              <li key={index}>
                {effect.attribute} +{effect.value}% for {effect.duration.amount} {effect.duration.unit}
              </li>
            ))}
          </ul>
        </p>
        <p className="text-gray-600">
          <strong>Ingredients and Origins:</strong>
          <ul className="list-disc pl-6">
            {potion.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.quantity}x {ingredient.name} - Found in {ingredient.origin.location} ({ingredient.origin.region})
              </li>
            ))}
          </ul>
        </p>
        <p className="text-gray-600">
          <strong>Restrictions:</strong>
          <ul className="list-disc pl-6">
            <li>Level Requirement: {potion.usage.restrictions.levelRequirement}</li>
            <li>Class Restrictions: {potion.usage.restrictions.classRestrictions.join(', ')}</li>
            {potion.usage.restrictions.warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </p>
        <p className="text-gray-600">
          <strong>Notice of Use, Side Effects:</strong>
          <ul className="list-disc pl-6">
            {potion.usage.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </p>
        <p className="text-gray-600">
          <strong>Crafting Time:</strong> {potion.crafting.time.amount} {potion.crafting.time.unit}
        </p>
        <p className="text-gray-600">
          <strong>Crafting Station:</strong> {potion.crafting.station} (Level {potion.crafting.required_level} required)
        </p>
      </div>
    </div>
  );
};

export default PotionDetailsModal;