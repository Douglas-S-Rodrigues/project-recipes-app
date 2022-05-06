import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DrinksRecipes from '../Components/DrinksRecipes';
import DrinkCategoryButton from '../Components/DrinkCategoryButton';

import SearchBar from '../Components/SearchBar/SearchBar';

function Drinks() {
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
      <Header title="Drinks" handleSearch={ handleSearch } searchRender />
      { disableInput ? <SearchBar /> : <DrinkCategoryButton /> }
      <DrinksRecipes />
      <Footer />
    </>
  );
}

export default Drinks;
