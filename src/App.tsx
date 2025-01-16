import React, { useState } from 'react';
import PotionList from './components/PotionList';
import PotionFilters from './components/PotionFilter';
import { potions} from './data/data';
import { Potion } from './types/Potion';

const App: React.FC = () => {
  const [filteredPotions, setFilteredPotions] = useState<Potion[]>(potions);

  return (
    <div className="App grid lg:grid-cols-[3fr_1fr] gap-4 p-4">
      <div>
        <h1 className="text-center text-2xl font-bold mb-4">Lista de Pociones</h1>
        <PotionList potions={filteredPotions} />
      </div>
      <div className="sticky top-4 h-fit">
        <PotionFilters potions={potions} onFilter={setFilteredPotions} />
      </div>
    </div>
  );
};

export default App;



