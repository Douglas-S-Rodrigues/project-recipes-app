import React from 'react';
<<<<<<< HEAD:src/pages/Foods.js
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Foods() {
  return (
    <>
      <Header />
      <h1>Foods</h1>
      <Footer />
=======
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
>>>>>>> parent of 139aea1 (Merge branch 'main-group-5' into Seachbar-Requisitos-13ao18):src/Components/Foods.js
    </>
  );
}

export default Foods;
