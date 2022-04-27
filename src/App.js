import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import Login from './Components/Login';
import Recipes from './Components/Recipes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RecipesProvider>
          <Route path="Recipes" component={ Recipes } />
          <Route exact path="/" component={ Login } />
          <Recipes />
        </RecipesProvider>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
