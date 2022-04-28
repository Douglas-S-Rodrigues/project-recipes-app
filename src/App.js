import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';

// import { SearchItensProvider } from './context/SearchItemsProvider';

import Login from './pages/Login';
import Foods from './pages/Foods';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RecipesProvider>
          <Route path="/profile" component={ Profile } />
          <Route path="/explore/drinks" component={ ExploreDrinks } />
          <Route path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/" component={ Login } />
        </RecipesProvider>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
