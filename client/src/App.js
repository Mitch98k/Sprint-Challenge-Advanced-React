import React from 'react';
import './App.css';
import { Players } from './components/Players';
import { AddPlayers } from './components/AddPlayers';
function App() {
  return (
    <div className="App">
     <AddPlayers />
     <Players />
    </div>
  );
}

export default App;
