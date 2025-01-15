import React, { useState } from 'react';
import PotionList from './components/PotionList';
import PotionFilters from './components/PotionFilter';
import { potions} from './data/data';
import { Potion } from './types/Potion';
import viteLogo from 'vite.svg';

const App: React.FC = () => {
  const [filteredPotions, setFilteredPotions] = useState<Potion[]>(potions);


  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold my-4">Lista de Pociones</h1>
      <PotionList potions={filteredPotions} />
      <PotionFilters potions={potions} onFilter={setFilteredPotions} />
    </div>
  );
};

export default App;

