import React from 'react';
import { useSearchBar } from '../context/SearchItemsProvider';
import SearchBar from './SearchBar/SearchBar';

function Foods() {
  const { itens } = useSearchBar();
  return (
    <>
      <h1>Foods</h1>
      <SearchBar />
      {itens.length > 0
        && itens.map((item, index) => <div key={ index }>{item.strMeal}</div>)}
    </>
  );
}

export default Foods;
