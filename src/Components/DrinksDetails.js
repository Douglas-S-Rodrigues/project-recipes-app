import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import heartIcon from '../images/whiteHeartIcon.svg';

function DrinksDetails() {
  return (
    <div>
      <img src="" alt="" data-testid="recipe-photo" />
      <h2 data-testid="recipe-title">Nome da receita</h2>
      <img src={ shareIcon } alt="shareIcon" data-testid="share-btn" />
      <img src={ heartIcon } alt="heartIcon" data-testid="favorite-btn" />
      <h5 data-testid="recipe-category">Categoria</h5>
      <ul>
        <li data-testid={ `${index}-ingredient-name-and-measure` }>ingredients</li>
      </ul>
      <h4>Instruções</h4>
      <p data-testid="instructions">Texto das instruções</p>
      <iframe src="" title="Video"> </iframe>
      <div data-testid={ `${index}-recomendation-card` }>
        Card da receita
      </div>
      <button type="button" data-testid="start-recipe-btn">
        Iniciar receita
      </button>
    </div>
  );
}

export default DrinksDetails;
