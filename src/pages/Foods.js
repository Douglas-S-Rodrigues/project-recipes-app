import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FoodsRecipes from '../Components/FoodsRecipes';
import FoodCategoryButton from '../Components/FoodCategoryButton';

import SearchBar from '../Components/SearchBar/SearchBar';

function Foods() {
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
      <FoodsRecipes />
      <Footer />
    </>
  );
}

export default Foods;
