import { Potion } from '../types/Potion';
import { filterByLevelRequirement, getPotionsByRarity, listIngredients, findPotionByEffect, calculateCraftingTime } from '../helpers/potionHelpers';

const mockPotions: Potion[] = [
    {
        id: "potion_001",
        name: "Elixir of Eternal Flame",
        type: "consumable",
        rarity: "legendary",
        effects: {
            primary: {
                attribute: "fireResistance",
                value: 80,
                duration: { unit: "minutes", amount: 15 }
            },
            secondary: [
                { attribute: "healthRegeneration", value: 10, duration: { unit: "seconds", amount: 300 } }
            ]
        },
        ingredients: [
            { name: "Phoenix Feather", quantity: 1, origin: { location: "Volcanic Crater", region: "Everburning Peaks" } }
        ],
        crafting: { station: "Alchemist's Crucible", required_level: 25, time: { unit: "minutes", amount: 45 } },
        usage: { instructions: ["Shake well before use."], restrictions: { levelRequirement: 15, classRestrictions: ["Fire Mage"], warnings: [] } },
        meta: { created_by: "Grand Alchemist", lore: "Powerful potion", availability: { in_shops: false, quest_reward: true, drop_rate: { boss: "Infernal Dragon", chance: "5%" } } },
        image: "image_1.webp"
    },
    {
        id: "potion_002",
        name: "Essence of Frostbound Will",
        type: "consumable",
        rarity: "epic",
        effects: {
            primary: {
                attribute: "iceResistance",
                value: 85,
                duration: { unit: "minutes", amount: 20 }
            },
            secondary: [
                { attribute: "manaRegeneration", value: 15, duration: { unit: "seconds", amount: 120 } }
            ]
        },
        ingredients: [
            { name: "Frostbloom Petals", quantity: 2, origin: { location: "Frozen Glade", region: "Everwhite Tundra" } }
        ],
        crafting: { station: "Frostforge Lab", required_level: 20, time: { unit: "minutes", amount: 60 } },
        usage: { instructions: ["Consume in freezing temperatures."], restrictions: { levelRequirement: 20, classRestrictions: ["Frost Sorcerer"], warnings: [] } },
        meta: { created_by: "Icecaster", lore: "Chilling potion", availability: { in_shops: true, quest_reward: false, drop_rate: { boss: "Glacial Titan", chance: "3%" } } },
        image: "image_2.webp"
    }
];

describe('Potion Helpers', () => {
    test('filterByLevelRequirement debe devolver pociones con el nivel requerido menor o igual al nivel especificado', () => {
        const result = filterByLevelRequirement(mockPotions, 20);
        expect(result).toHaveLength(2);
        expect(result[0].id).toBe("potion_001");
        expect(result[1].id).toBe("potion_002");
    });

    test('getPotionsByRarity debe devolver pociones con la rareza especificada', () => {
        const result = getPotionsByRarity(mockPotions, "legendary");
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe("potion_001");
    });

    test('listIngredients debe devolver una lista de nombres de ingredientes para una poción especifica', () => {
        const result = listIngredients(mockPotions[0]);
        expect(result).toEqual(["Phoenix Feather"]);
    });

    test('findPotionByEffect debe devolver pociones que tengan un efecto secundario específico', () => {
        const result = findPotionByEffect(mockPotions, "manaRegeneration");
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe("potion_002");
    });

    test('calculateCraftingTime debería devolver el tiempo total de elaboración en minutos para todas las pociones', () => {
        const result = calculateCraftingTime(mockPotions);
        expect(result).toBe(105);
    });


});
