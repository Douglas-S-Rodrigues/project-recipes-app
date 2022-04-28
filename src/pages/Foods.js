import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import SearchBar from '../components/SearchBar/SearchBar';
import RecipesContext from '../context/RecipesContext';

function Foods() {
  const { itens } = useContext(RecipesContext);
  const [disableInput, setDisableInput] = useState(false);

  const handleSearch = () => {
    if (!disableInput) {
      setDisableInput(true);
    } else {
      setDisableInput(false);
    }
  };

  return (
    <>
      <Header title="Foods" handleSearch={ handleSearch } />
      { disableInput && <SearchBar /> }
      {itens.length > 0
        && itens.map((item, index) => <div key={ index }>{item.strMeal}</div>)}
      <Footer />
    </>
  );
}

export default Foods;
