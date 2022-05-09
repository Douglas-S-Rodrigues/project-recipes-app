import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Profile() {
  return (
    <>
      <Header title="Profile" searchRender={ false } />

      <main>

        <h2 data-testid="profile-email">
          { localStorage.getItem('user') }
        </h2>

        <div>

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

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Profile;
