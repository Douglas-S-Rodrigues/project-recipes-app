import React, { useContext, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DrinksRecipes from '../Components/DrinksRecipes';
import DrinkCategoryButton from '../Components/DrinkCategoryButton';

import SearchBar from '../Components/SearchBar/SearchBar';
import RecipesContext from '../context/RecipesContext';

function Drinks() {
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
      <Header title="Drinks" handleSearch={ handleSearch } searchRender />
      { disableInput && <SearchBar /> }
      {itens.length > 0
        && itens.map((item, index) => <div key={ index }>{item.strMeal}</div>)}
      <DrinkCategoryButton />
      <DrinksRecipes />
      <Footer />
    </>
  );
}

export default Drinks;
