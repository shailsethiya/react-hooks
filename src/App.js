import React, { useState, useEffect } from 'react';
import './App.css';
import { ComponentA } from './ComponentA';

export const userContext = React.createContext();

const App = () =>  {
  return (
    <div className="App">
      <userContext.Provider value={'shailendra'}>
        <ComponentA />
      </userContext.Provider>
    </div>
  );
}

export default App;
