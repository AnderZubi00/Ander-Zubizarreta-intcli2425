export interface Usage {
    instructions: string[];
    restrictions: Restrictions;
  }
  
  export interface Restrictions {
    levelRequirement: number;
    classRestrictions: string[];
    warnings: string[];
  }
  