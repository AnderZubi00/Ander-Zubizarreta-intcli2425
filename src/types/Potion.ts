import { Effect } from './Effects';
import { SecondaryEffect } from './SecondaryEffect';
import { Ingredient } from './Ingredient';
import { Crafting } from './Crafting';
import { Usage } from './Usage';
import { Meta } from './Meta';

export interface Potion {
  id: string;
  name: string;
  type: string;
  rarity: string;
  effects: {
    primary: Effect;
    secondary: SecondaryEffect[];
  };
  ingredients: Ingredient[];
  crafting: Crafting;
  usage: Usage;
  meta: Meta;
  image: string;
}

