import React, { useContext, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import SearchBar from '../Components/SearchBar/SearchBar';
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
