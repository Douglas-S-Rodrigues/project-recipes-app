import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <RecipesProvider>
      <h1>Receitas</h1>
    </RecipesProvider>

  );
}

export default App;
