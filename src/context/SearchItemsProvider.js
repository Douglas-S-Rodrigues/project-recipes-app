import React, {
  createContext,
  useContext,
  useState,
} from 'react';

import PropTypes from 'prop-types';

const SearchItensContext = createContext();

export const SearchItensProvider = ({ children }) => {
  const [itens, setItens] = useState([]);

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

  return (
    <SearchItensContext.Provider value={ { itens, searchItem } }>
      {children}
    </SearchItensContext.Provider>
  );
};

export const useSearchBar = () => {
  const context = useContext(SearchItensContext);
  return context;
};

SearchItensProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
