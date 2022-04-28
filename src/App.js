import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';

<<<<<<< HEAD
import Login from './pages/Login';
import Foods from './pages/Foods';
=======
import Login from './Components/Login';
import Foods from './Components/Foods';
import { SearchItensProvider } from './context/SearchItemsProvider';
>>>>>>> parent of 139aea1 (Merge branch 'main-group-5' into Seachbar-Requisitos-13ao18)

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RecipesProvider>
<<<<<<< HEAD
          <Route path="/foods" component={ Foods } />
          <Route exact path="/" component={ Login } />
=======
          <SearchItensProvider>
            <Route path="/foods" component={ Foods } />
            <Route exact path="/" component={ Login } />
          </SearchItensProvider>
>>>>>>> parent of 139aea1 (Merge branch 'main-group-5' into Seachbar-Requisitos-13ao18)
        </RecipesProvider>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
