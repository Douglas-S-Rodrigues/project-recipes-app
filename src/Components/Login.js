import React, { useEffect, useContext, useState } from 'react';
import RecipesContext from '../context/RecipesContext';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(RecipesContext);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    function validUser() {
      const MAX_LENGTH_PASSWORD = 6;
      const isValidPassword = password.length >= MAX_LENGTH_PASSWORD;
      const isValidEmail = email
        .match(/[\w.!#$%&'*+=?^_`{|}~-]+@[\w.-]+\.[A-Z]{2,}/gmi);
      if (isValidEmail && isValidPassword) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }

    validUser();
  }, [email, password]);

  return (
    <section>
      <input
        type="email"
        placeholder="Email"
        name="email"
        data-testid="email-input"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        placeholder="Senha"
        name="password"
        data-testid="password-input"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disable }
      >
        Enter
      </button>
    </section>
  );
}

export default Login;
