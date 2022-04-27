import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';

import Login from './Components/Login';
import Foods from './Components/Foods';
import { SearchItensProvider } from './context/SearchItemsProvider';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RecipesProvider>
          <SearchItensProvider>
            <Route path="/foods" component={ Foods } />
            <Route exact path="/" component={ Login } />
          </SearchItensProvider>
        </RecipesProvider>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
