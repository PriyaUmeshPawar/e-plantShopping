import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us-container" aria-labelledby="about-us-heading">
      <h2 className="about-us-heading" id="about-us-heading">About Us</h2>
      <p className="about-us-description">Welcome to Paradise Nursery, where green meets serenity!</p>
      <p className="about-us-content">
        At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of
        high-quality plants that enhance the beauty of your surroundings and contribute to a healthier, more sustainable lifestyle.
        From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.
      </p>
      <p className="about-us-content">
        Our team is dedicated to ensuring that each plant meets our standards of quality and care. Whether you are a seasoned
        gardener or just starting your green journey, we are here to help you find the perfect plant for your home or office.
      </p>
      <p className="about-us-content">
        Join us in our mission to create a greener, healthier world. Visit Paradise Nursery and experience the beauty of nature
        right at your doorstep.
      </p>
    </section>
  );
}

export default AboutUs;
