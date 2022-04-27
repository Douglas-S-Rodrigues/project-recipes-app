import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';

import Login from './pages/Login';
import Foods from './pages/Foods';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RecipesProvider>
          <Route path="/foods" component={ Foods } />
          <Route exact path="/" component={ Login } />
        </RecipesProvider>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
