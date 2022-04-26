import React, { useContext, useState } from 'react';
import RecipesContext from '../context/RecipesContext';

function Login() {
  const {user, setUser} = useContext(RecipesContext);
  const [disable, setDisable] = useState(true);

  const validUser = () => {
    const userEmail = user.email;
    const userPassword = user.password;
    const MAX_LENGTH_PASSWORD = 6;
    const isValidPassword = userPassword >= MAX_LENGTH_PASSWORD;
    const isValidEmail = userEmail.match(/[\w.!#$%&'*+=?^_`{|}~-]+@[\w.-]+\.[A-Z]{2,}/gmi);
    setDisable(!(isValidPassword && isValidEmail));
  }

  return (
    <section>
      <input
        type="email"
        placeholder="Email"
        name="email"
        data-testid="email-input"
        value={ user.email }
        onChange={ ({ target }) => setUser({ email: target.value }) }
      />
      <input
        type="password"
        placeholder="Senha"
        name="password"
        data-testid="password-input"
        value={ user.password }
        onChange={ ({ target }) =>  setUser({ password: target.value })}
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disable }
        onClick={  }
      >
        Enter
      </button>
    </section>
  );
}

export default Login;
