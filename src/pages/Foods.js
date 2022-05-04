import React, { useContext, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FoodsRecipes from '../Components/FoodsRecipes';
import FoodCategoryButton from '../Components/FoodCategoryButton';

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
      <Header title="Foods" handleSearch={ handleSearch } searchRender />
      { disableInput ? <SearchBar /> : <FoodCategoryButton /> }
      { itens.length > 0
        ? itens.map((item, index) => <div key={ index }>{item.strMeal}</div>)
        : <FoodsRecipes /> }
      <Footer />
    </>
  );
}

export default Foods;
