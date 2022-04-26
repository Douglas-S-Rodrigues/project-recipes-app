import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './context/RecipesProvider';

import Login from './Components/Login';
import Recipes from './Components/Recipes';

function App() {
  return (
    <RecipesProvider>
      <Login />
      <Recipes />
    </RecipesProvider>

  );
}

export default App;
