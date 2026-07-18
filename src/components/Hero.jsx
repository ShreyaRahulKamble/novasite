// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Your Name</span>
        </h1>
        <p className="hero-subtitle">
          Creative Developer & Designer
        </p>
        <p className="hero-description">
          I build beautiful, functional websites and digital experiences that make an impact.
          Passionate about clean code, elegant design, and solving real-world problems.
        </p>
        <button className="cta-button" onClick={handleCTAClick}>
          Get In Touch
        </button>
      </div>
      <div className="hero-visual">
        <div className="hero-shape"></div>
      </div>
    </section>
  );
};

export default Hero;