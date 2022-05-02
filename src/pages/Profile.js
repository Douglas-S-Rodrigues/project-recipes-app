import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Profile() {
  return (
    <>
      <Header title="Profile" />

      <h2 data-testid="profile-email">
        { JSON.parse(window.localStorage.getItem('user')).email }
      </h2>

      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
      </Link>

      <Link to="/favorite-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
      </Link>

      <Link to="/">
        <button
          type="button"
          onClick={ () => localStorage.clear() }
          data-testid="profile-logout-btn"
        >
          Logout
        </button>
      </Link>

      <Footer />
    </>
  );
}

export default Profile;
