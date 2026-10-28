import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => setShowProductList(true);
  const handleHomeClick = () => setShowProductList(false);

  return (
    <div className="app-container">
      <section className={`landing-page ${showProductList ? 'fade-out' : ''}`} aria-hidden={showProductList}>
        <div className="background-image" aria-hidden="true" />
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider" />
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" type="button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </section>
      <section className={`product-list-container ${showProductList ? 'visible' : ''}`} aria-hidden={!showProductList}>
        <ProductList onHomeClick={handleHomeClick} />
      </section>
    </div>
  );
}

export default App;