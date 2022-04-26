import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './context/RecipesProvider';
import Footer from './Components/Footer';

function App() {
  return (
    <RecipesProvider>
      <Footer />
    </RecipesProvider>

  );
}

export default App;
