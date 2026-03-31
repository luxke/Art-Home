import React from 'react';
import './App.css';

// Data for the 2x2 grid
const categories = [
  { id: 1, title: 'Bead Art', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Thread Art', img: 'https://images.unsplash.com/photo-1528399580456-11f4864ebf94?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Sandals', img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Belts', img: 'https://images.unsplash.com/photo-1628161314605-87c2b5ec5f28?q=80&w=800&auto=format&fit=crop' }
];

function App() {
  return (
    <div className="site-wrapper">
      
      {/* 1. HERO SECTION */}
      {/* You will replace this background image in the CSS with your actual top image */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title"><span>ART HOME</span></h1>
          <p className="hero-subtitle">Handcrafted stories in beads and thread</p>
          <div className="arrow-down">&#x2304;</div>
        </div>
      </section>

      {/* 2. CATEGORIES GRID */}
      <section className="categories-section">
        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="img-container">
                <img src={cat.img} alt={cat.title} />
              </div>
              <h3>{cat.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT / FEATURED SECTION */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2><span>A home for handmade art.</span></h2>
            <p>
              Each piece is crafted carefully, using beads, 
              thread, and leather—carrying stories 
              of hands, culture, and time.
            </p>
          </div>
          <div className="about-image">
             <img src="https://images.unsplash.com/photo-1611078711671-55db5cece2f1?q=80&w=800&auto=format&fit=crop" alt="Beaded belt" />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2><em>Art lives here.</em> Explore the collection.</h2>
        <div className="button-group">
          <button>Collections</button>
          <button>Our Story</button>
          <button>Contact</button>
        </div>
      </section>

    </div>
  );
}

export default App;