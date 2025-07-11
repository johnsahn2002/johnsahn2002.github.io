import React from 'react';
import Navigation from '../Entities/Navigation.js';
import Hero from '../Entities/Hero.js';
import About from '../Entities/About.js';
import Projects from '../Entities/Projects.js';
import Contact from '../Entities/Contact.js';
import Footer from '../Entities/Footer.js';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
