import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getFoods from '../services/apiFood';
import getDrinks from '../services/apiDrink';
import apiFoodsDetails from '../services/apiFoodsDetails';
import apiDrinksDetails from '../services/apiDrinksDetails';
import getFoodsCategory from '../services/apiFoodCategory';
import getDrinksCategory from '../services/apiDrinkCategory';
import getApiFoodCategoryByNationality from '../services/apiFoodCategoryByNationality';
import { getFoodIngredients, getDrinkIngredients } from '../services/apiIngredients';
import { apiFoodRandom, apiDrinkRandom } from '../services/apiRandom';

import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [foods, setFoods] = useState([]);
  const [drinkState, setDrinkState] = useState([]);
  const [foodsDetails, setFoodsDetails] = useState([]);
  const [drinksDetails, setDrinksDetails] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [foodIngredients, setFoodIngredients] = useState([]);
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [randomFood, setRandomFood] = useState([]);
  const [randomDrink, setRandomDrink] = useState([]);

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

  async function getFoodCategoryApiByNationality() {
    const { meals } = await getApiFoodCategoryByNationality();
    setNationalities(meals);
  }

  async function getFoodIngredientsApi() {
    const { meals } = await getFoodIngredients();
    setFoodIngredients(meals);
  }

  async function getDrinkIngredientsApi() {
    const { drinks } = await getDrinkIngredients();
    setDrinkIngredients(drinks);
  }

  function redirectSearch(type, id) {
    window.location.href = `/${type}/${id}`;
  }

  async function getRandomRecipe() {
    const { meals } = await apiFoodRandom();
    setRandomFood(meals[0]);
  }

  async function getRandomDrink() {
    const { drinks } = await apiDrinkRandom();
    setRandomDrink(drinks[0]);
  }

  async function searchItem(event, pathname) {
    // previne a atualização da pagina após o evento de submit do formulário.
    event.preventDefault();

    const [searchinput] = event.target.elements;
    const searchType = event.target.elements.searchType.value;
    const endpointSearch = searchType === 'i' ? 'filter' : 'search';

    // verifica em qual pagina o usuário está e atualiza a url da api a ser utilizada(api de drinks ou api de comidas).
    let url = pathname === '/foods'
      ? 'https://www.themealdb.com/api/json/v1/1/'
      : 'https://www.thecocktaildb.com/api/json/v1/1/';
    url += `${endpointSearch}.php?${searchType}=${searchinput.value}`;

    // verifica se a pesquisa utilizada foi first letter, se sim verifica a quantidade de caracteres passada.
    if (searchType === 'f' && searchinput.value.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      fetch(url)
        .then((response) => response.json())
        .then(({ drinks, meals }) => {
          // verifica se nenhuma receita foi encontrada.
          if (!drinks?.length > 0 && !meals?.length > 0) {
            global.alert('Sorry, we haven\'t found any recipes for these filters.');
          } else {
            // verifica se apenas 1 receita foi encontrada.
            // caso verdadeiro, redireciona o usuário para a pagina dos detalhes da receita.
            if (drinks?.length === 1) {
              redirectSearch('drinks', drinks[0].idDrink);
            } else if (meals?.length === 1) {
              redirectSearch('foods', meals[0].idMeal);
            }

            // atualiza as receitas
            setFoods(meals);
            setDrinkState(drinks);
          }
        });
    }
  }
  const detailsDrinks = Object.keys(foodsDetails);
  const filterIngredientsDrinks = () => {
    const ingredientsFilter = [];
    detailsDrinks.forEach((ingredient) => {
      if (ingredient.includes('strIngredient') && drinksDetails[ingredient]) {
        ingredientsFilter.push(drinksDetails[ingredient]);
      }
    });
    return ingredientsFilter;
  };

  const filterMeasureDrinks = () => {
    const measureFilter = [];
    detailsDrinks.forEach((measures) => {
      if (measures.includes('strMeasure')) {
        measureFilter.push(drinksDetails[measures]);
      }
    });
    const newMeasureFilter = measureFilter.filter((measures) => measures !== ' ');
    return newMeasureFilter;
  };

  const details = Object.keys(foodsDetails);
  const filterIngredients = () => {
    const ingredientsFilter = [];
    details.forEach((ingredient) => {
      if (ingredient.includes('strIngredient') && foodsDetails[ingredient]) {
        ingredientsFilter.push(foodsDetails[ingredient]);
      }
    });
    return ingredientsFilter;
  };

  const filterMeasure = () => {
    const measureFilter = [];
    details.forEach((measures) => {
      if (measures.includes('strMeasure')) {
        measureFilter.push(foodsDetails[measures]);
      }
    });
    const newMeasureFilter = measureFilter.filter((measures) => measures !== ' ');
    return newMeasureFilter;
  };

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
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
    nationalities,
    getFoodCategoryApiByNationality,
    ingredients,
    setIngredients,
    measure,
    setMeasure,
    doneRecipes,
    setDoneRecipes,
    randomFood,
    getRandomRecipe,
    randomDrink,
    getRandomDrink,
    filterIngredients,
    filterMeasure,
    filterIngredientsDrinks,
    filterMeasureDrinks,
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
