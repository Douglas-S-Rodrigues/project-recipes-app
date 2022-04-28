import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <div>
      <Header title="Explore" />
      <a href="/explore/foods">
        <button
          type="button"
        >
          Explore Foods
        </button>
      </a>

      <a href="/explore/drinks">
        <button
          type="button"
        >
          Explore Drinks
        </button>
      </a>

      <Footer />
    </div>
  );
}

export default Explore;
