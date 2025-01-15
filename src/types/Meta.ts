export interface Meta {
    created_by: string;
    lore: string;
    availability: Availability;
  }
  
  export interface Availability {
    in_shops: boolean;
    quest_reward: boolean;
    drop_rate: DropRate;
  }
  
  export interface DropRate {
    boss: string;
    chance: string;
  }
  