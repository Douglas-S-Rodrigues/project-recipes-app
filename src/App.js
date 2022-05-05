import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';

import Login from './pages/Login';
import Foods from './pages/Foods';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoods from './pages/ExploreFoods';
import FoodsIngredients from './pages/FoodsIngredients';
import DrinksIngredients from './pages/DrinksIngredients';
import FoodsNationalities from './pages/FoodsNationalities';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RecipesProvider>
          <Route path="/explore/drinks/ingredients" component={ DrinksIngredients } />
          <Route path="/explore/foods/nationalities" component={ FoodsNationalities } />
          <Route path="/explore/foods/ingredients" component={ FoodsIngredients } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route exact path="/explore" component={ Explore } />
          <Route path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/profile" component={ Profile } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/" component={ Login } />
          <Route exact path="/explore/drinks/nationalities" component={ NotFound } />
        </RecipesProvider>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
