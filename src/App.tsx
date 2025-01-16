import React, { useState } from 'react';
import PotionList from './components/PotionList';
import PotionFilters from './components/PotionFilter';
import { potions} from './data/data';
import { Potion } from './types/Potion';

const App: React.FC = () => {
  const [filteredPotions, setFilteredPotions] = useState<Potion[]>(potions);

  return (
    <div>
      <h1 className="absolute top-10 text-4xl font-bold mb-4 flex justify-center items-center  w-full">Lista de Pociones</h1>
      <div>
        <PotionList potions={filteredPotions} />
      </div>
      <div>
        <PotionFilters potions={potions} onFilter={setFilteredPotions} />
      </div>
    </div>
  );
};

export default App;



