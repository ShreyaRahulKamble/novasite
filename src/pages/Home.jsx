// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;