import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getFoods from '../services/apiFood';
import getDrinks from '../services/apiDrink';

import apiFoodsDetails from '../services/apiFoodsDetails';
import apiDrinksDetails from '../services/apiDrinksDetails';

import getFoodsCategory from '../services/apiFoodCategory';
import getDrinksCategory from '../services/apiDrinkCategory';
import { getFoodIngredients, getDrinkIngredients } from '../services/apiIngredients';

import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [itens, setItens] = useState([]);
  const [foods, setFoods] = useState([]);
  const [drinkState, setDrinkState] = useState([]);
  const [foodsDetails, setFoodsDetails] = useState([]);
  const [drinksDetails, setDrinksDetails] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);
  const [foodIngredients, setFoodIngredients] = useState([]);
  const [drinkIngredients, setDrinkIngredients] = useState([]);

  async function getApiFoods() {
    const { meals } = await getFoods();
    setFoods(meals);
  }

  async function getApiDrinks() {
    const { drinks } = await getDrinks();
    setDrinkState(drinks);
  }

  async function getApiFoodsDetails(id) {
    const { meals } = await apiFoodsDetails(id);
    setFoodsDetails(meals[0]);
  }

  async function getApiDrinksDetails(id) {
    const { drinks } = await apiDrinksDetails(id);
    setDrinksDetails(drinks[0]);
  }

  async function getFoodCategoryApi() {
    const { meals } = await getFoodsCategory();
    setFoodCategory(meals);
  }

  async function getDrinkCategoryApi() {
    const { drinks } = await getDrinksCategory();
    setDrinkCategory(drinks);
  }

  async function getFoodIngredientsApi() {
    const { meals } = await getFoodIngredients();
    setFoodIngredients(meals);
  }

  async function getDrinkIngredientsApi() {
    const { drinks } = await getDrinkIngredients();
    setDrinkIngredients(drinks);
  }

  async function searchItem(event) {
    event.preventDefault();
    const [searchinput] = event.target.elements;
    const searchType = event.target.elements.searchType.value;
    const endpointSearch = searchType === 'i' ? 'filter' : 'search';
    const url = `https://www.themealdb.com/api/json/v1/1/${endpointSearch}.php?${searchType}=${searchinput.value}`;

    if (searchType === 'f' && searchinput.value.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setItens(data.meals));
    }
  }

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    itens,
    setItens,
    searchItem,
    getFoods,
    getDrinks,
    foods,
    getApiFoods,
    drinkState,
    getApiDrinks,
    getApiFoodsDetails,
    getApiDrinksDetails,
    foodsDetails,
    drinksDetails,
    foodCategory,
    getFoodCategoryApi,
    drinkCategory,
    getDrinkCategoryApi,
    foodIngredients,
    getFoodIngredientsApi,
    drinkIngredients,
    getDrinkIngredientsApi,
    setFoods,
    setDrinkState,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
