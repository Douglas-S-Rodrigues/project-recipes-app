import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const inputEmail = () => screen.getByTestId('email-input');
const inputPassword = () => screen.getByTestId('password-input');
const buttonSubmit = () => screen.getByTestId('login-submit-btn');
const EMAIL_USER_VALID = 'email@email.com';
const PASSWORD_USER_VALID = '1234567';
const EMAIL_USER_INVALID = 'email@';
const PASSWORD_USER_INVALID = '1234';

describe('1. testes do Login.js', () => {
  it('Deveria exibir os elementos da tela Login', () => {
    renderWithRouter(<App />);
    const email = inputEmail();
    const password = inputPassword();
    const button = buttonSubmit();

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it('Deveria exibir Button Submit se o email e senha forem válidos', () => {
    renderWithRouter(<App />);

    const email = inputEmail();
    const password = inputPassword();
    const button = buttonSubmit();

    userEvent.type(email, EMAIL_USER_VALID);
    userEvent.type(password, PASSWORD_USER_VALID);
    expect(button).not.toBeDisabled();
  });
  it('Não deveria exibir Button Submit se o email não for válido', () => {
    renderWithRouter(<App />);

    const email = inputEmail();
    const password = inputPassword();
    const button = buttonSubmit();

    userEvent.type(email, EMAIL_USER_INVALID);
    userEvent.type(password, PASSWORD_USER_VALID);
    expect(button).toBeDisabled();
  });
  it('Não deveria exibir Button Submit se a senha não for válida', () => {
    renderWithRouter(<App />);

    const email = inputEmail();
    const password = inputPassword();
    const button = buttonSubmit();

    userEvent.type(email, EMAIL_USER_VALID);
    userEvent.type(password, PASSWORD_USER_INVALID);
    expect(button).toBeDisabled();
  });
  /* it('Deveria renderizar a pagina "/Foods" ao clicar no buttonSubmit', () => {
    const { history } = renderWithRouter(<App />);
    const email = inputEmail();
    const password = inputPassword();
    const button = buttonSubmit();

    userEvent.type(email, EMAIL_USER_VALID);
    userEvent.type(password, PASSWORD_USER_VALID);
    userEvent.click(button);
    expect(history.location.pathname).toEqual('/');
  }); */
});
