import React from 'react';
import logo from './logo.svg';
import {FetchData} from './components/fetch';
import {useLocalStorage} from './hooks/useLocalStorage';
import './App.css';

function App() {
  return (
        <div>
          <FetchData /> 
          <useLocalStorage />
        </div>
  );
}

export default App;
