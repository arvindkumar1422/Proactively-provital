import React from 'react';
import './HeroSection.scss';
import AnimatedImageColumns from './AnimatedImageColumns';
import SearchBar from './SearchBar';
import GradientBar from './GradientBar';

const HeroSection = () => (
  <div className="hero-container">
    <section className="hero-section-grid">
      <div className="hero-content">
        <h1>
          Book an appointment with<br />
          <span className="highlight">lifestyle medicine</span> <span className="hero-experts">experts</span>
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>
      <SearchBar />
      <div className="hero-images">
        <AnimatedImageColumns />
      </div>
    </section>
    <GradientBar />
  </div>
);

export default HeroSection; 