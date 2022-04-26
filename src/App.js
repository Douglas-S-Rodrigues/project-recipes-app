import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './context/RecipesProvider';

import Login from './Components/Login';


function App() {
  return (
    <RecipesProvider>

      <h1>Receitas</h1>
      <Login />

    </RecipesProvider>

  );
}

export default App;
